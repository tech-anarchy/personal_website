let projects = [
    {
        title : "Multi-commodity routing with stateful consumer demands",
        company : "Texas A & M University, College Station.",
        tag : "research",
        desc : "<i class='bx bx-chevrons-right'></i> Designed Markov Chain model for modeling consumer demands. </br>" +
            "<i class='bx bx-chevrons-right'></i> Formulated approximate solution methods that increase solution time-efficiency.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Coordinated Event Observation for Structured Narratives",
        company : "Texas A & M University, College Station.",
        tag : "research",
        desc : "<i class='bx bx-chevrons-right'></i> Designed Markov Chain model for modeling real-world events. </br>" +
            "<i class='bx bx-chevrons-right'></i> Formulated k-order Markov model to quantify the artistic nature of video cinematography.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Crowdsourcing with time-extended, open-ended, and creative tasks",
        company : "Texas A & M University, College Station.",
        tag : "research",
        desc : "<i class='bx bx-chevrons-right'></i> Designed economic model for multi-agent incentives. </br>" +
            "<i class='bx bx-chevrons-right'></i> Analyzed theoretical behaviour model of agents in a Nash equilibrium setting. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented web-platform using Django, CSS, and JavaFX for real-world analysis of the theoretic model.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Group formation and match-making in a multi-agent system",
        company : "Texas A & M University, College Station.",
        tag : "research",
        desc : "<i class='bx bx-chevrons-right'></i> Designed model for multi-agent coordination for creative open-ended tasks. </br>" +
            "<i class='bx bx-chevrons-right'></i> Developed game-theoretic algorithm to match agents into groups under preferential constraints.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "PLC system",
        company : "Smart Joules Pvt. Ltd., Delhi.",
        tag : "industry",
        desc : "<i class='bx bx-chevrons-right'></i> Designed circuit hardware. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented embedded software with security protocol.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Data Logger (Hardware and Software)",
        company : "Smart Joules Pvt. Ltd., Delhi.",
        tag : "industry",
        desc : "<i class='bx bx-chevrons-right'></i> Designed low-cost hardware with surge protection. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented embedded software to backup data in SD card.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Bioimpedance meter",
        company : "KIET, Ghaziabad.",
        tag : "personal",
        desc : "<i class='bx bx-chevrons-right'></i> Designed filter and amplifier circuit to extract the bioimpedance signal. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented python GUI (Tkinter) to view the signals and also extract relevant information from signal.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Intelligent Traffic Monitoring and Control System",
        company : "Ghaziabad Development Authority (Govt. Organization), Ghaziabad.",
        tag : "research",
        desc : "<i class='bx bx-chevrons-right'></i> Designed and analyzed neural-fuzzy algorithm to improve the traffic monitoring and control system.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "GSM based Water-level Monitor",
        company : "Sapro Robotics Pvt. Ltd., Ghaziabad",
        tag : "industry",
        desc : "<i class='bx bx-chevrons-right'></i> Lead a team of 5 people. </br>" +
        "<i class='bx bx-chevrons-right'></i> Designed control circuit for submersible motor. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented embedded notification API.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Badminton Playing Robot (ROBOCON 2015)",
        company : "Dinobots Collegiate Club, KIET, Ghaziabad.",
        tag : "personal",
        desc : "<i class='bx bx-chevrons-right'></i> Lead a group of 20 peer students. </br>" +
            "<i class='bx bx-chevrons-right'></i> Achieved runner-up position in national level robotics competition. </br>" +
            "<i class='bx bx-chevrons-right'></i> Designed sensor circuits and implemented path finding algorithm for autonomous operation of the robot.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Quadcopter Motion Planning",
        company : "KIET, Ghaziabad.",
        tag : "personal",
        desc : "<i class='bx bx-chevrons-right'></i> Designed and analyzed neural-fuzzy algorithm to improve the traffic monitoring and control system.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Vibration Detector (using accelerometer)",
        company : "KIET, Ghaziabad.",
        tag : "personal",
        desc : "<i class='bx bx-chevrons-right'></i> Designed and analyzed neural-fuzzy algorithm to improve the traffic monitoring and control system.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Home Automation System",
        company : "Sapro Robotics Pvt. Ltd., Ghaziabad",
        tag : "industry",
        desc : "<i class='bx bx-chevrons-right'></i> Lead a team of 5 people. </br>" +
        "<i class='bx bx-chevrons-right'></i> Designed surge protection circuit. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented embedded notification API.",
        link : "under_construction_glightbox.html"
    },
    {
        title : "Parent and Child Task Robots (ROBOCON 2014)",
        company : "Dinobots Collegiate Club, KIET, Ghaziabad.",
        tag : "personal",
        desc : "<i class='bx bx-chevrons-right'></i> Lead a group of 20 peer students. </br>" +
            "<i class='bx bx-chevrons-right'></i> Designed control circuits using ATmel ATMega2560 and ATMega16. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented path finding algorithm for autonomous operation of the robot.",
        link : "under_construction_glightbox.html"
    }
]


for (let i in projects){

    document.write('<div class="col-md-4 project-item portfolio-item filter-' + projects[i].tag + '">\n' +
        '            <div class="card project-card portfolio-wrap">\n' +
        '\n' +
        '              <div class="card__content project-content">\n' +
        '\n' +
        '                <h1 class="card__content-title project-title">' + projects[i].title + '</h1>\n' +
        '                <p class="card__content-body project-body"><em>' + projects[i].company + '</em></p>\n' +
        '\n' +
        '                <div class="project-tags">\n' +
        '                  <span class="badge badge-pill badge-primary text-uppercase filter-' + projects[i].tag + '">' + projects[i].tag + '</span>\n' +
        '\n' +
        '                </div>\n' +
        '              </div>\n' +
        '\n' +
        '              <div class="card__footer project-detail">\n' +
        '                <p class="card__footer-body">' + projects[i].desc + '</p>\n' +
        '              </div>\n' +
        '\n' +
        '              <div class="portfolio-info">\n' +
        '                <h4>More info</h4>\n' +
        '                <div class="portfolio-links">\n' +
        '                    <a href="' + projects[i].link + '" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>\n' +
        '                  </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '          </div>')

}