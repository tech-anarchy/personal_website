var game_mode = false;

const greetings = ` [[;rgba(237, 147, 79, 0.69);]
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣿⡿⠛⠉⠉⠉⠛⢿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⠋⡀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀[[;rgba(232, 103, 52, 0.69);]
⠀⠀⣀⣰⣶⣿⣿⣿⣿⣿⣿⣀⣀⣀⣀⣀⣀⣰⣰⣶⣿⣿⣿⣿⣿⣿⣷⣦⣤⣀ [[;rgba(231, 61, 49, 0.69);]
⠉⠉⠉⠉⠈⠉⠛⠛⠛⠛⣿⣿⡽⣏⠉⠉⠉⠉⠉⣽⣿⠛⠉⠉⠉⠉⠉⠉⠉⠁ [[;rgba(237, 147, 79, 0.69);]
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣷⣦⣄⣀⣠⣴⣾⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⠿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
[[;rgb(170,170,170);]Hi! Type 'help' to see the list of available commands.\n`


const game_greetings = `
[[;rgb(255,0,0);] Game is not available yet.
[[;rgb(255,255,0);]Type 'resume' to go back to the resume.
`

const commands = {
    help() {
        if (game_mode) {
            term.echo(game_greetings);
            return;
        }
        term.echo(`List of available commands: ${help}`);
    },
    about_me() {
        if (game_mode) {
            term.echo(game_greetings);
            return;
        }
        closeAllSections();
        toggleSectionContent("about-me-description");
    },
    education() {
        if (game_mode) {
            term.echo(game_greetings);
            return;
        }
        closeAllSections();
        toggleSectionContent("education-description");
    },
    skill() {
        if (game_mode) {
            term.echo(game_greetings);
            return;
        }
        closeAllSections();
        toggleSectionContent("skill-description");
    },
    experience(...args) { 
        if (game_mode) {
            term.echo(game_greetings);
            return;
        }
        closeAllSections();
        experienceCommand(args);

    },
    echo(...args) {
        closeAllSections();
        term.echo(args.join(' '));
    },
    game() {
        closeAllSections();
        game_mode = true;
        startGame();
        term.echo(game_greetings);
    },
    resume() {
        closeAllSections();
        game_mode = false;
        startResume();
    }
};


const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

const command_list = ['clear'].concat(Object.keys(commands));
const help = formatter.format(command_list);

var term = $('.terminal').terminal(commands, {
    greetings: greetings,
    prompt: 'guest[@diptanil.com]: > ',
    checkArity: false,
    exit: false,
    completion: true
});


const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    var str = `[[;rgb(126, 219, 242);]${command}`;
    
    // first argument should be in yellow rest in grey
    if (args) {
        str += `[[;rgb(232, 247, 141);]${args[0]}`;
        var color = "rgb(170, 170, 170)";
        for (var i = 1; i < args.length; i++) {
            if (args[i] === "-") {
                color = "rgb(232, 247, 141)";
            }
            if (args[i] === " ") {
                color = "rgb(170, 170, 170)";
            }
            str += `[[;${color};]${args[i]}`;
        }
    } 
    return str;
}]);


function makeSelectionVisible(contentId) {
    var x = document.getElementById(contentId);
        x.style.display = "block";
}

function closeAllSections() {
    var x = document.getElementsByClassName("section-description");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function toggleSectionContent(contentId){
    var x = document.getElementById(contentId);
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

filterSelection("experience-subsection","all");


function filterCountrySelection() {
    var sel = document.getElementById("exp-country-sel").value;
    filterSelection("experience-subsection", sel);
}

function filterSelection(filterClass, filterValue) {
    var x, i;
    x = document.getElementsByClassName(filterClass);
    if (filterValue == "all") filterValue = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show-filter");
        if (x[i].className.indexOf(filterValue) > -1) addClass(x[i], "show-filter");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    }
    element.className = arr1.join(" ");
}


function experienceCommand(args) {       
    if (args.length === 2) {
        if (args[0] === "-f" || args[0] === "--filter") {

            var filter = args[1];

            makeSelectionVisible("experience-description");

            if (filter === "all") {
                filter = "all";
            } else if (filter === "india") {
                filter = "india-experience";
            } else if (filter === "us" || filter === "usa") {
                filter = "us-experience";
            }else if (filter === "cs") {
                filter = "compsci-experience";
            }else if (filter === "embedded") {
                filter = "embedded-experience";
            }else if (filter === "academic") {
                filter = "academy-experience";
            } else {
                term.echo(`[[;rgb(255,0,0);]Invalid filter: ${filter}`);
                term.echo(`Available filters: [[;rgb(0,255,0);] all, india, us, cs, embedded, academic`);
                filter = "all";
                term.echo(`Showing all experience`);
            }

            document.getElementById("exp-country-sel").value = filter;

            filterSelection("experience-subsection", filter);
        }

    } else {
        if (args.length !== 0) {
            term.echo(`[[;rgb(255,0,0);]Invalid command: experience ${args.join(' ')}`);
            term.echo(`Usage: experience --filter (-f) <filter>`);
            term.echo(`Available filters: all, india, us, cs, embedded, academic`);
            term.echo(`Showing all experience`);
            makeSelectionVisible("experience-description");
        } else {
            toggleSectionContent("experience-description");
        }
        document.getElementById("exp-country-sel").value = "all";
        filterSelection("experience-subsection", "all");
    }
}



function startGame() {
    var resumeContainer = document.getElementById("resume-container");
    var gameContainer = document.getElementById("game-container");
    resumeContainer.style.display = "none";
    gameContainer.style.display = "block";
}

function startResume() {
    var resumeContainer = document.getElementById("resume-container");
    var gameContainer = document.getElementById("game-container");
    resumeContainer.style.display = "block";
    gameContainer.style.display = "none";
}


const typed = document.getElementById("typed")
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('#typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
