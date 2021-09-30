const projectList = {
  "Books and Emotions": [
    {
      Name: "Emoji Interpreter",
      Date: "sep,2020",
      Description:
        "Emoji interpreter app helps to know the meaning of the given emojis",
      link1: "https://sr-emoji-interpreter.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/emoji-interpreter",
    },
    {
      Name: "Book Recommendation",
      Date: "sep,2021",
      Description:
        "This app helps to recommend good books based on the given category",
      link1: "https://sr-book-recommendation-app.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/book-recommendation",
    },
  ],

  BirthdayApp: [
    {
      Name: "Birthday Checker",
      Date: "sep,2021",
      Description:
        "This app help to check whether your birth date is lucky or not",
      link1: "https://sr-birthday-lucky.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/birthday-checker",
    },
    {
      Name: "Plindrome Birthday Checker",
      Date: "sep,2021",
      Description:
        "This app helps to check whether your birth date is palindrome or not",
      link1: "https://sr-palindrome-birthday.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/birthday-palindrome",
    },
  ],
  API: [
    {
      Name: "Minion Speak",
      Date: "sep,2021",
      Description:
        "This app translates given text into banana language using fun translation API",
      link1: "https://sr-minion-speak.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/Minion-Speak",
    },
    {
      Name: "Fun Translator",
      Date: "sep,2021",
      Description:
        "This app translates given text into chef language using fun translation API",
      link1: "https://chef-talk.netlify.app/",
      link2: "https://github.com/SRUJANA-PENUGONDA13/Fun-Translator",
    },
  ],
  "CLI APP": [
    {
      Name: "Buddy Meter",
      Date: "sep, 2021",
      Description:
        "BuddyMeter is a quiz to on myself to know how well my friends know me and it is developed using node.js ",
      link1: "https://replit.com/@PSRUJANA/BuddyMeter#index.js",
      link2: "https://replit.com/@PSRUJANA/BuddyMeter?embed=true#index.js",
    },
    {
      Name: "Fun App",
      Date: "July, 2021",
      Description:
        "Fun-App is quiz to test your IQ and developed using node.js",
      link1: "https://replit.com/@PSRUJANA/Fun-App#index.js",
      link2: "https://replit.com/@PSRUJANA/Fun-App?embed=true#index.js",
    },
  ],
  cashAndStocks: [
    {
      Name: "Cash Register",
      Date: "sep, 2021",
      Description:
        "This app help the user by telling how can he/she return the change to the customer with a minimum number of notes",
      link1: "https://sr-cash-register.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/cash-register",
    },
    {
      Name: "Stocks Profit/Loss",
      Date: "July, 2021",
      Description:
        "This app helps to know how much profit or loss gained on your stocks based on the current stock price",
      link1: "https://sr-stock-profit-loss.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/stock-profit-loss",
    },
  ],
  funWithTriangles: [
    {
      Name: "Fun with Triangles",
      Date: "sep, 2021",
      Description: "This app helps you to test your knowledge on Triangles",
      link1: "https://sr-fun-with-triangles.netlify.app",
      link2: "https://github.com/SRUJANA-PENUGONDA13/fun-with-triangles",
    },
  ],
};

var index = 0;
const projectDetails = (projects) => {
  document.querySelectorAll(".section-card").forEach(function (ele) {
    ele.remove();
  });
  var n = projects.length;
  for (var i = 0; i < n; i++) {
    projectInfo = document.getElementById("card");
    var htmlEle = "";
    for (i = 0; i < projects.length; i++) {
      htmlEle += "<div class='section-card'>";
      htmlEle += '<div class="section-area">';
      htmlEle += '<div class="section-head">';
      htmlEle += "<b>";
      htmlEle += projects[i]["Name"];
      htmlEle += "</b>";
      htmlEle += "</div>";
      htmlEle += '<div class="section-date">';
      htmlEle += projects[i]["Date"];
      htmlEle += "</div>";
      htmlEle += '<div class="section-description">';
      htmlEle += projects[i]["Description"];
      htmlEle += "</div>";
      htmlEle += '<div class="section-link1">';
      htmlEle += "<a href=";
      htmlEle += projects[i]["link1"];
      htmlEle += ' target="_blank"><b>Visit Live</b></a>';
      htmlEle += "</div>";
      htmlEle += '<div class="section-link2">';
      htmlEle += "<a href=";
      htmlEle += projects[i]["link2"];
      htmlEle += ' target="_blank"><b>View Source Code</b></a>';
      htmlEle += "</div>";
      htmlEle += "</div>";
      htmlEle += "</div>";
    }
    projectInfo.innerHTML = htmlEle;
  }
};

function performAction(projectName) {
  if (projectName == "Books and Emotions") {
    projectDetails(projectList["Books and Emotions"]);
  }
  if (projectName == "BirthdayApp") {
    projectDetails(projectList["BirthdayApp"]);
  }
  if (projectName == "api") {
    projectDetails(projectList["API"]);
  }
  if (projectName == "cliApp") {
    projectDetails(projectList["CLI APP"]);
  }
  if (projectName == "cashAndStocks") {
    projectDetails(projectList["cashAndStocks"]);
  }
  if (projectName == "funWithTriangles") {
    projectDetails(projectList["funWithTriangles"]);
  }
}
