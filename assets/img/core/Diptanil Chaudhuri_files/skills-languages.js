let languages = [
    {
        name : "Python",
        icon : "<i class='bx bxl-python'></i>",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "MATLAB",
        icon : "<i class='bx bx-math'></i>",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "C++",
        icon : "<i class='bx bxl-c-plus-plus' ></i>",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "C#",
        icon : '<img class="c-sharp-logo" src="./assets/img/core/c-sharp.png">',
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "Embedded C",
        icon : '<i class="bi bi-cpu-fill"></i>',
        value : "50",
        level : "MODERATE",
        bg : ""
    },
    {
        name : "HTML",
        icon: "<i class='bx bxl-html5' ></i>",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "CSS",
        icon : "<i class='bx bxl-css3' ></i>",
        value : "50",
        level : "MODERATE",
        bg : ""
    }
]


for (let i in languages){

    document.write('<div class="progress col-md-4">\n' +
        '              <div class="row">\n' +
        '                <div class="col-2 skill-icon">\n' +
        '                  ' + languages[i].icon + '\n' +
        '                </div>\n' +
        '                <div class="col-1"></div>\n' +
        '                <div class="col-8 skill-detail">\n' +
        '                  <span class="skill">' + languages[i].name + ' <i class="val">' + languages[i].level + '</i></span>\n' +
        '                  <div class="progress-bar-wrap">\n' +
        '                    <div class="progress-bar progress-bar-striped progress-bar-animated ' + languages[i].bg + '" role="progressbar" aria-valuenow="' + languages[i].value + '" aria-valuemin="0" aria-valuemax="100"></div>\n' +
        '                  </div>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '            </div>')


}