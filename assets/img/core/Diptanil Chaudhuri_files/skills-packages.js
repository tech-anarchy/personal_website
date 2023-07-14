let pack = [
    {
        name : "Python",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "MATLAB",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "C++",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "C++",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "Embedded C",
        value : "50",
        level : "MODERATE",
        bg : ""
    },
    {
        name : "HTML",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "CSS",
        value : "50",
        level : "MODERATE",
        bg : ""
    }
]


for (let i in pack){

    document.write('<div class="progress col-md-3">\n' +
    '<span class="skill">' + pack[i].name + ' <i class="val">' + pack[i].level + '</i></span>\n' +
    '<div class="progress-bar-wrap">\n' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated ' + pack[i].bg + '" role="progressbar" aria-valuenow="' + pack[i].value + '" aria-valuemin="0" aria-valuemax="100"></div>\n' +
    '</div>\n' +
    '</div>')


}