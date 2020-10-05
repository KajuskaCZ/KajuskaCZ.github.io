var markers = [
  {
    name: "Dětenice",
    id: 1,
    coords: "50.3680475N, 15.1729508E",
    img: "https://d34-a.sdn.cz/d_34/c_img_E_J/IEbBEP.mpo?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Loučeň",
    id: 2,
    coords: "50.2869594N, 15.0245719E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120311/img/23/639x426_DvX6cb.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Hrádek u Nechanic",
    id: 3,
    coords: "50.2234697N, 15.6671183E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120395/img/59/640x426_KjEheA.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Frýdlant",
    id: 4,
    coords: "50.9153239N, 15.0838439E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120369/img/39/1600x1200_gpZ6dv.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Červený hrádek",
    id: 5,
    coords: "50.5540892N, 13.5049089E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120379/img/47/624x351_r7s2XQ.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Ploskovice",
    id: 6,
    coords: "50.5597483N, 14.2008031E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120337/img/10/640x480_rQQ5da.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Roudnice nad Labem",
    id: 7,
    coords: "50.4256369N, 14.2616203E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120379/img/16/640x426_JuA6CB.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Libochovice",
    id: 8,
    coords: "50.4051400N, 14.0438403E",
    img: "https://d34-a.sdn.cz/d_34/c_img_G_m/ucgBU1p.jpeg?fl=res,667,500,1",
    address: "LIb. address",
    hasListener: false,
    places: [
      {
        img:
          "https://www.zamek-libochovice.cz/pamatky/libochovice/fotogalerie/zamek-interiery/satur.jpg",
        name: "Saturnův sál",
        desc: "100 osob, pár termínů",
      },
      {
        img:
          "https://www.zamek-libochovice.cz/pamatky/libochovice/fotogalerie/libo-exterier/mriz-grota.jpg",
        name: "Zámecký park",
        desc: "Po dohodě s matrikou MěÚ Libochovice",
      },
    ],
  },
  {
    name: "Lednice",
    id: 9,
    coords: "48.8016903N, 16.8054806E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120395/img/15/639x427_65AvDQ.jpg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Horšovský Týn",
    id: 10,
    coords: "49.5296253N, 12.9423114E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120358/img/56/640x480_DC5Jbw.jpg?fl=res,667,500,1",
    address: "Náměstí Republiky 1\n 346 01 Horšovský Týn - Město",
    hasListener: false,
    places: [
      {
        img:
          "https://www.zamek-horsovskytyn.cz/pamatky/horsovsky-tyn/fotogalerie/okruhy-park-svatby/svatebni-prostory/stara-kaple.jpg",
        name: "Stará kaple",
        desc: "30 osob, po celý rok",
      },
      {
        img:
          "https://www.zamek-horsovskytyn.cz/pamatky/horsovsky-tyn/fotogalerie/okruhy-park-svatby/svatebni-prostory/erbak.jpg",
        name: "Erbovní sál",
        desc: "200 osob, únor - listopad",
      },
      {
        img:
          "https://www.zamek-horsovskytyn.cz/website/var/tmp/image-thumbnails/30000/37697/thumb__auto_5100bd88df0075e780bbfb26685378c0/parkan.jpeg",
        name: "Parkán",
        desc: "100 osob, deben - říjen",
      },
      {
        img:
          "https://www.zamek-horsovskytyn.cz/pamatky/horsovsky-tyn/fotogalerie/okruhy-park-svatby/svatebni-prostory/horsov.jpg",
        name: "Kostel Všech svatých v Horšově",
        desc: "Ve spolupráci s..",
      },
    ],
  },
  {
    name: "Nelahozeves",
    id: 11,
    coords: "50.2610633N, 14.3014178E",
    img: "https://d34-a.sdn.cz/d_34/c_img_QO_C/QVfT7.jpeg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Veltrusy",
    id: 12,
    coords: "50.2775858N, 14.3298414E",
    img: "https://d34-a.sdn.cz/d_34/c_img_H_c/J6moZs.jpeg?fl=res,667,500,1",
    hasListener: false,
  },
  {
    name: "Hrad Cheb",
    id: 13,
    coords: "50.0811369N, 12.3660353E",
    img:
      "https://d34-a.sdn.cz/d_34/d_15120377/img/65/640x460_hxDCi3.jpg?fl=res,667,500,1",
    address: "Hrad Cheb Dobrovského 21 350 02 Cheb",
    url: "http://www.hrad-cheb.cz/cz/svatebni-obrady-na-hrade-cheb",
    hasListener: false,
    places: [
      {
        img: "http://www.hrad-cheb.cz/images/photos/kaple_06.jpg",
        name: "Kaple sv. Erharda a Uršuly",
        desc: "...",
      },
      {
        img: "http://www.hrad-cheb.cz/images/photos/hradni_nadvori_01.jpg",
        name: "Hradní nádvoří",
        desc: "...",
      },
    ],
  },
];
