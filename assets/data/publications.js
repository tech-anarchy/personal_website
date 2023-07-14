let publications = [
    {
        title : "EQY",
        author : "",
        venue : "",
        other : "2023",
        tag : "",
        yeartag: "filter-2023",
        link : {
            pdf_active: "publication-inactive",
            pdf : "#publications",
            expand_active: "publication-inactive",
            expand : "#publications"
        }
    },
    {
        title : "A causal decoupling approach to efficient planning for logistics problems with stateful stochastic demand",
        author : "Diptanil Chaudhuri, and Dylan A. Shell",
        venue : "In Proceedings of IEEE International Conference on Robotics and Automation (ICRA)",
        other : "London, UK 2023",
        tag : "filter-conf",
        yeartag: "filter-2023",
        link : {
            pdf_active: "publication-active",
            pdf : "./assets/pdf/2023ICRA_Demand.pdf",
            expand_active: "publication-inactive",
            expand : "under_construction_glightbox.html"
        }
    },
    {
        title : "EQY",
        author : "",
        venue : "",
        other : "2021",
        tag : "",
        yeartag: "filter-2021",
        link : {
            pdf_active: "publication-inactive",
            pdf : "#publications",
            expand_active: "publication-inactive",
            expand : "#publications"
        }
    },
    {
        title : "Tractable planning for coordinated story capture: Sequential stochastic decoupling",
        author : "Diptanil Chaudhuri, Hazhar Rahmani, Dylan A. Shell, and Jason M. O’Kane",
        venue : "In Proceedings of International Symposium on Distributed Autonomous Robotic Systems (DARS)",
        other : "Kyoto, Japan/Online, June 2021",
        tag : "filter-conf",
        yeartag: "filter-2021",
        link : {
            pdf_active: "publication-active",
            pdf : "./assets/pdf/DARS_Paparazzi_Extnsn_2021.pdf",
            expand_active: "publication-inactive",
            expand : "under_construction_glightbox.html"
        }
    },
    {
        title : "Conditioning style on substance: Plans for narrative observation",
        author : "Diptanil Chaudhuri, Rhema Ike, Hazhar Rahmani, Dylan A. Shell, Aaron T. Becker, and Jason M. O'Kane",
        venue : "In Proceedings of IEEE International Conference on Robotics and Automation (ICRA)",
        other : "Xi’an, China/Online, May 2021",
        tag : "filter-conf",
        yeartag: "filter-2021",
        link : {
            pdf_active: "publication-active",
            pdf : "./assets/pdf/ICRA_Paparazi_2021.pdf",
            expand_active: "publication-inactive",
            expand : "under_construction_glightbox.html"
        }
    },
    {
        title : "EQY",
        author : "",
        venue : "",
        other : "2015",
        tag : "",
        yeartag: "filter-2015",
        link : {
            pdf_active: "publication-inactive",
            pdf : "#publications",
            expand_active: "publication-inactive",
            expand : "under_construction_glightbox.html"
        }
    },
    {
        title: "A low cost, non-invasive method for detection and measurement of damaged roads",
        author: "Diptanil Chaudhuri, and Shivangi Dwivedi",
        venue: "In International Journal of Engineering and Technical Research",
        other: "3(7):22 &#8213; 27, July, 2015",
        tag: "filter-jour",
        yeartag: "filter-2015",
        link: {
            pdf_active: "publication-inactive",
            pdf: "#publications",
            expand_active: "publication-inactive",
            expand: "under_construction_glightbox.html"
        }
    },
    {
        title: "Applications of accelerometer as a vibration detector",
        author: "Diptanil Chaudhuri, and Rahvindra Singh",
        venue: "In International Journal of Emerging Trends in Science and Technology",
        other: "Mar, 2015",
        tag: "filter-jour",
        yeartag: "filter-2015",
        link: {
            pdf_active: "publication-inactive",
            pdf: "#publications",
            expand_active: "publication-inactive",
            expand: "under_construction_glightbox.html"
        }
    },
    {
        title : "GSM based home security system",
        author : "Diptanil Chaudhuri",
        venue : "In International Journal of Engineering and Technical Research",
        other : "3(2):38 &#8213; 40, Feb, 2015",
        tag : "filter-jour",
        yeartag: "filter-2015",
        link : {
            pdf_active: "publication-inactive",
            pdf : "#publications",
            expand_active: "publication-inactive",
            expand : "under_construction_glightbox.html"
        }
    }
]


for (let i in publications){

    if (publications[i].title != "EQY"){

        document.write('<div class="publication-item ' + publications[i].tag + ' ' + publications[i].yeartag +' ">'  +
            '       <div class="publication-item-text">' +
            '          <h5>' + publications[i].author + '. <b>'+ publications[i].title + '.\n' +
            '          </b> <em>' + publications[i].venue +'</em>, ' + publications[i].other + '.</h5>\n' +
            '          <div class="publication-links">\n' +
            '            <div class="row align-items-start">\n' +
            '              <div class="col">\n' +
            '              </div>\n' +
            '              <div class="col">\n' +
            '                <a href="' + publications[i].link.pdf + '" class="publication-link ' + publications[i].link.pdf_active + '"><i class="bi bi-filetype-pdf"></i> PDF</a>\n' +
            '              </div>\n' +
            '              <div class="col">\n' +
            '                <a href="' + publications[i].link.expand + '" class="publication-link ' + publications[i].link.expand_active + ' portfolio-details-lightbox" data-glightbox="type: external"><i class="bx bx-plus"></i> Details</a>\n' +
            '              </div>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '          </div>\n' +
            '        </div>')

    } else {
        document.write('<div class="publication-item ' + publications[i].yeartag + '">\n' +
            '          <h4>'+ publications[i].other + '</h4>\n' +
            '        </div>')
    }


}