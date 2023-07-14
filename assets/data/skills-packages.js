let pack = [
    {
        name : "Unity",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "Git",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "Machine Learning",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "Reinforcement Learning",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "Game Theory",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "NLP",
        value : "75",
        level : "INTERMEDIATE",
        bg : "bg-warning"
    },
    {
        name : "Agile",
        value : "100",
        level : "EXPERT",
        bg : "bg-success"
    },
    {
        name : "ATMEL MCU",
        value : "50",
        level : "MODERATE",
        bg : ""
    },
    {
        name : "Raspberry Pi",
        value : "75",
        level : "INTERMEDIATE",
        bg: "bg-warning"
    }
]


for (let i in pack){

    document.write('<div class="progress col-md-4">\n' +
    '<span class="skill">' + pack[i].name + ' <i class="val">' + pack[i].level + '</i></span>\n' +
    '<div class="progress-bar-wrap">\n' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated ' + pack[i].bg + '" role="progressbar" aria-valuenow="' + pack[i].value + '" aria-valuemin="0" aria-valuemax="100"></div>\n' +
    '</div>\n' +
    '</div>')


}