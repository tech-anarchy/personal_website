let experiances = [
    {
        position : "Graduate Research Assistant",
        company : "Distributed AI Robotics Lab, Texas A & M University, College Station.",
        start : "Sep. 2017",
        end_month: "Present",
        end_year: "",
        desc : "<i class='bx bx-chevrons-right'></i> Designed and analyzed planning problems for multi-agent systems. </br>" +
                "<i class='bx bx-chevrons-right'></i> Designed and analyzed economic theories for multi-agent crowdsouring systems.",
    },
    {
        position : "Graduate Teaching Assistant",
        company : "Texas A & M University, College Station.",
        start : "Sep 2019.",
        end_month: "May",
        end_year: "2020",
        desc : "<i class='bx bx-chevrons-right'></i> Mentored multiple groups of student projects and taught lecture on Natural Language Processing and Temporal Logic.",
    },
    {
        position : "Graduate Research Fellow",
        company : "Mays Innovation Research Center, College Station.",
        start : "Jun. 2018.",
        end_month: "Aug.",
        end_year: "2019",
        desc : "<i class='bx bx-chevrons-right'></i> Analyzed incentivisation theory and mechanism design for crowdsourced markets. </br>" +
            "<i class='bx bx-chevrons-right'></i> Mentored undergraduate students on topics of crowdsourcing.",
    },
    {
        position : "Technical Consultant",
        company : "D. Devshi Pvt. Ltd., Ghaziabad.",
        start : "Aug., 2016.",
        end_month: "Jan.",
        end_year: "2017",
        desc : "<i class='bx bx-chevrons-right'></i> Advised committee on new consumer home automation electronics products based on market research.",
    },
    {
        position : "Embedded System Engineer",
        company : "Smart Joules Pvt. Ltd., Delhi",
        start : "Jun. 2016",
        end_month: "Aug.",
        end_year: "2016",
        desc : "<i class='bx bx-chevrons-right'></i> Designed low-cost PLC module using Atmel ATMega16 microprocessor. </br>" +
            "<i class='bx bx-chevrons-right'></i> Implemented PLC embedded software using embedded C via Atmel Studio. </br>" +
            "<i class='bx bx-chevrons-right'></i> Designed an efficient data logging hardware for monitoring various parameters of a hospital environment.",
    },
    {
        position : "Co-founder and Chairperson",
        company : "Dinobots Collegiate Club, KIET, Ghaziabad",
        start : "Aug. 2013",
        end_month: "May.",
        end_year: "2016",
        desc : "<i class='bx bx-chevrons-right'></i> Founded collegiate club with the vision to take part in national robotics competitions. </br>" +
            "<i class='bx bx-chevrons-right'></i> Achieved National runner-up position in ROBOCON 2015. </br>" +
            "<i class='bx bx-chevrons-right'></i> Designed robotic platforms for school students using Atmel ATmega16 and ATmega2560.",
    },
    {
        position : "Project Engineer",
        company : "Sapro Robotics Pvt. Ltd., Ghaziabad",
        end_month: "Aug.",
        end_year: "2013",
        start : "Nov. 2015",
        desc : "<i class='bx bx-chevrons-right'></i> Project leader for commercial GSM based Water-level Monitor, and Home Automation System circuit using Atmel ATmega16. </br>" +
            "<i class='bx bx-chevrons-right'></i> Conducted workshop on embedded C.",
    }
]


for (let i in experiances){

    document.write('<div class="timeline">\n' +
        '              <div class="icon"></div>\n' +
        '              <div class="date-content">\n' +
        '                <div class="date-outer">\n' +
        '                                    <span class="date">\n' +
        '                                            <span class="month">' + experiances[i].end_month + '</span>\n' +
        '                                    <span class="year">' + experiances[i].end_year + '</span>\n' +
        '                                    </span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="timeline-content">\n' +
        '                <h5 class="title">' + experiances[i].position + '</h5>\n' +
        '                <h5 class="company"> <em>' + experiances[i].company + '</em> </h5>\n' +
        '                <h5 class="timeline_date">' + experiances[i].start + ' &#8213; ' +  experiances[i].end_month + ' ' + experiances[i].end_year + '</h5>\n' +
        '                <p class="description">\n' + experiances[i].desc +
        '                </p>\n' +
        '              </div>\n' +
        '            </div>')

}