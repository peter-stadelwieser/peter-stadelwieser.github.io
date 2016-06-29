fs = require('fs');
Handlebars = require('handlebars');

var index = String(fs.readFileSync("index.hbs", 'utf8'));
var template = Handlebars.compile(index, {
    noEscape: true
});

var context = {
    pageTitle: "Peter Stadelwieser - Prozessentwicklung und -begleitung",

    pageHeader: "Peter Stadelwieser",
    introTextLine1: "Agile Unternehmens&shy;entwicklung",
    introTextLine2: "schulen. beraten. umsetzen.",

    portfolioDetails: [

        {
            title: "SCRUM",
            img_src: "img/scrum.JPG",
            description: "Einführung und Schulung von SCRUM. Profitieren Sie von den agilen Methoden, ich helfe Ihnen als Coach und als externer SCRUM Master schnell Fuß zu fassen."
        },
        {
            title: "Requirements",
            img_src: "img/lupe.JPG",
            description: "Ich unterstütze Sie als Coach und Product Owner bei der Etablierung eines schlanken Anforderungsmanagements, damit Sie schnell und effektiv die Wünsche Ihrer Kunden umsetzen können. "
        },
        {
            title: "Organisation",
            img_src: "img/vision_berg.JPG",
            description: "Gehen Sie den Schritt zur agilen Organisation. Richten Sie Ihre Organisation an den Bedürfnissen Ihrer Kunden aus, gemeinsam gestalten wir diese."
        },
    ],
    aboutMe: {
        portrait_img: "img/Portrait.jpg",
        werdegang: [
        "Studium der Fertigungsautomatisierung an der Fachhochschule Vorarlberg",
        "Langjährige Erfahrung als Softwareentwickler",
        "Führungserfahrung als Team- und Entwicklungsleiter",
        "Mehrjährige Erfahrung als SCRUM Master",
        "Mehrjährige Erfahrung als Product Owner",
        "Lehrbeauftragter an der Fachhochschule Vorarlberg"
        ],
        motivation: "Bestrebt, Teams zusammenzuschweißen, die Freude an ihrer Arbeit haben. Stets auf der Suche nach neuen Wegen, um die Welt für Teams etwas einfacher und agiler zu machen."
    },
    contact:{
        mail: "peter@stadelwieser.at",
        phone: "+43 680 1247831",
        addresslines: [
            "In Fängen 43",
            "A-6850 Dornbirn"
        ]
    },
    references: [
      {
          img_src: "img/references/fhv_logo.png",
          img_info: "Fachhochschule Vorarlberg",
          img_link: "http://www.fhv.at/"
      },

      {
          img_src: "img/references/wg-logo-footer-icon.jpg",
          img_info: "Webgears",
          img_link: "http://www.webgears.at/"
      },
        {
            img_src: "img/references/V-Research_03_grau.jpg",
            img_info: "v-research",
            img_link: "http://www.v-research.at/"
        },


        {
            img_src: "img/references/inetlog.jpg",
            img_info: "inet logistics",
            img_link: "https://www.inet-logistics.com/"
        },
        {
           img_src: "img/references/solve_logo.png",
           img_info: "Solve Engineering",
           img_link: "http://www.solve-engineering.ch/"
       },
        {
            img_src: "img/references/phios_logo.png",
            img_info: "phios",
            img_link: "http://phios.li/"
        },




    ]
};
var html = template(context);

fs.writeFileSync("index.html", html);
