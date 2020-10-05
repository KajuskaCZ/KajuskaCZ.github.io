//const PI = ;
var markerImagePath =
  "Users/karolina.pikorova/Documents/projects/test/assets/images/pin.svg";
var selectedMarkerImagePath =
  "Users/karolina.pikorova/Documents/projects/test/assets/images/pin_selected.svg";
var markerToNeedRedraw = [];
var selectedMarkerId = 0;

var center = SMap.Coords.fromWGS84(15.001265, 49.9243353);
var mapa = new SMap(JAK.gel("mapa"), center, 8);
mapa.addDefaultLayer(SMap.DEF_BASE).enable();
// mapa.addDefaultControls();
var mouse = new SMap.Control.Mouse(
  SMap.MOUSE_PAN | SMap.MOUSE_ZOOM
); /* Ovládání myší */
mapa.addControl(mouse);

var zoomLabels = {
  2: "Svět",
  5: "Stát",
  8: "Kraj",
  11: "Město",
  14: "Obec",
  17: "Ulice",
};
mapa.addControl(new SMap.Control.Scale(), { left: "8px", top: "400px" });
mapa.addControl(new SMap.Control.Compass(), { right: "8px", top: "50px" });
mapa.addControl(new SMap.Control.Zoom(zoomLabels));

var vrstva = new SMap.Layer.Marker();

// var clusterer = new SMap.Marker.Clusterer(mapa);
// vrstva.setClusterer(clusterer);

mapa.addLayer(vrstva);
vrstva.enable();

this.markers.forEach(function (marker) {
  addMarker(marker);
});

vrstva.setReposition({});

//poslouchani na kliknuti u markeru
mapa.getSignals().addListener(this, "marker-click", function (e) {
  var marker = e.target;
  var id = marker.getId();

  if (this.selectedMarkerId === id) {
    return;
  }

  if (this.selectedMarkerId) {
    //vrstva.removeMarker(this.selectedMarker, false);

    //addMarker(this.selectedMarkerId);
    var markerek = document.getElementById(
      "markerImage" + this.selectedMarkerId
    );
    if (markerek) {
      markerek.src = markerImagePath;
      markerek.style.cursor = "pointer";
    } else {
      this.markerToNeedRedraw.push(this.selectedMarkerId);
    }
  }

  var myobj = document.getElementById("troll");
  if (myobj) {
    myobj.remove();
  }

  document.getElementById("markerImage" + id).src = selectedMarkerImagePath;

  // No pointer cursor if selected
  document.getElementById("markerDiv" + id).style.cursor = "auto";

  // Castle detail
  var e = document.getElementById("castle-detail_title");
  e.textContent = this.markers[id - 1].name;

  document.getElementById("castle-intro-picture").src = this.markers[
    id - 1
  ].img;

  this.selectedMarkerId = id;

  //   history.pushState({
  //     id: 'homepage'
  // }, 'Home | My App', '/castle/1');

  // // Construct URLSearchParams object instance from current URL querystring.
  // var queryParams = new URLSearchParams(window.location.search);

  // // Set new or modify existing parameter value.
  // queryParams.set("id", "1");

  // // // Replace current querystring with the new one.
  // //history.replaceState(null, null, "?"+queryParams.toString());
  // history.pushState(null, null, "castle?"+queryParams.toString());
  //window.location.href = "castle?id=1";

  // Wedding Places
  var weddingPlaces = document.getElementById("places");
  weddingPlaces.innerHTML = "";
  this.markers[id - 1].places.forEach(function (place) {
    // Picture
    var picture = document.createElement("IMG");
    picture.setAttribute("src", place.img);
    picture.classList.add("card-photo");
    // Name + Desc
    var cardDiv = document.createElement("DIV");
    cardDiv.innerHTML =
      "<h4><strong>" + place.name + "</strong></h4><p>" + place.desc + "</p>";
    cardDiv.classList.add("container");
    // Card
    var card = document.createElement("DIV");
    card.classList.add("card");
    card.appendChild(picture);
    card.appendChild(cardDiv);
    // Add to grid
    weddingPlaces.appendChild(card);
  });
});

function addMarker(marker) {
  var c = SMap.Coords.fromWGS84(
    marker.coords
  ); /* Souřadnice značky, z textového formátu souřadnic */
  var znacka = JAK.mel("div", { id: "markerDiv" + marker.id });
  var obrazek = JAK.mel(
    "img",
    { src: markerImagePath, id: "markerImage" + marker.id },
    { width: "58px", height: "67px" }
  );
  znacka.appendChild(obrazek);
  var obrazekPopisek = JAK.mel(
    "img",
    { src: marker.img },
    {
      position: "absolute",
      left: "3px",
      top: "2px",
      width: "40px",
      height: "40px",
      "object-fit": "cover",
      "border-radius": "50%",
      border: "solid white 2px",
    }
  );
  znacka.appendChild(obrazekPopisek);

  var mapMarker = new SMap.Marker(c, marker.id, { url: znacka });

  // mapMarker.decorate(SMap.Marker.Feature.Shadow, obrazek);

  vrstva.addMarker(mapMarker);
  addMarkerListeners(marker);
}

//poslouchani prekresleni mapy
mapa.getSignals().addListener(this, "map-redraw", function (e) {
  this.mapMove();
});

//poslouchani zoom mapy
mapa.getSignals().addListener(this, "zoom-stop", function (e) {
  this.mapMove();
});

function mapMove() {
  var index = 0;
  this.markerToNeedRedraw.forEach(function (markerToRedraw) {
    var markerek = document.getElementById("markerImage" + markerToRedraw);
    if (markerek) {
      markerek.src = markerImagePath;
      this.markerToNeedRedraw.splice(index, 1);
    }
    ++index;
  });

  this.markers.forEach(function (marker) {
    if (marker.hasListener) {
      return true;
    }
    this.addMarkerListeners(marker);
  });
}

function addMarkerListeners(marker) {
  var visibleMarker = document.getElementById("markerDiv" + marker.id);
  if (visibleMarker) {
    marker.hasListener = true;
    visibleMarker.addEventListener("mouseenter", function (e) {
      var markerParent = document.getElementById("markerDiv" + marker.id)
        .parentElement;
      markerParent.appendChild(
        document.getElementById("markerDiv" + marker.id)
      );

      //var rect = e.target.getBoundingClientRect();
      //console.log(rect.top, rect.right, rect.bottom, rect.left);
      if (window.selectedMarkerId !== marker.id) {
        //console.log("hello??");
        var box = document.createElement("div");
        box.innerHTML =
          "<strong>" +
          marker.name +
          "</strong>" +
          "<p>" +
          marker.address +
          "</p>";
        box.style.cssText =
          "position:absolute;bottom:47px;left:-130px;width:300px;height:50px;background-color:white;border-radius:7px;padding: 15px 14px;cursor:pointer;border: 2px solid rgb(201,176,101);";
        box.id = "troll";
        //mapa.getContainer().appendChild(box);

        var list = document.getElementById("markerDiv" + marker.id);

        list.insertBefore(box, list.firstElementChild);

        document
          .getElementById("troll")
          .addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "rgb(240,240,240)";
          });
        document
          .getElementById("troll")
          .addEventListener("mouseleave", function (e) {
            e.target.style.backgroundColor = "white";
          });
      }
    });

    visibleMarker.addEventListener("mouseleave", function (e) {
      var myobj = document.getElementById("troll");
      if (myobj) {
        myobj.remove();
      }
    });
  }
}

// CSS
var coll = document.getElementsByClassName("collapsible");

Array.prototype.forEach.call(coll, function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
