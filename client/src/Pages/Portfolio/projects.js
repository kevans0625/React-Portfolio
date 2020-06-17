
import BookMartHomepage from "../../components/images/BookMartHomepage.png";
import codeMe from "../../components/images/code.me.png";
import weather from "../../components/images/weather.png";
import workday from "../../components/images/workday-scheduler.png";
import book from "../../components/images/Google_Book.png"
import LouVr3d from "../../components/images/LouVr3d.png"

const Project = [
  {
    "id": 6,
    "title": "Le LouVr3d",
    "preview": "https://louvr3d.herokuapp.com/",
    "image": LouVr3d,
    "github": "https://github.com/kevans0625/louvr3d",
    "description": "This is a full-stack MERN application designed to allow people to exhibit objects of historical, scientific, artistic, or cultural interest. The objects are stored and can be exhibited in a 3D room.."
  },
    {
      "id": 5,
      "title": "Google Book Search",
      "preview": "https://googlebook-search-kris.herokuapp.com/",
      "image": book,
      "github": "https://github.com/kevans0625/Google-Book",
      "description": "This is a MERN application that uses the Google Open Book API to display searched book titles and allow for them to be save to a mongoDB collection. This SPA runs in the browser and features are dynamically updated with React.js."
    },
    {
        "id": 4,
        "title": "BookMart",
        "preview": "https://evening-eyrie-42464.herokuapp.com/",
        "image":BookMartHomepage,
        "github": "https://github.com/kevans0625/BookMart",
        "description": 
        "An app that uses the MVC paradigm and it’s own server-side API. As a response to the current COVID-19 pandemic, my team and I created a virtual book club. For this project, I was not only in charge of designing a mobile first layout with the use of Boostraps’ CSS Framework. I also developed a User Authentication and used Sequelize ORM to store user information, including books they have read."
    },
    {
        "id": 3,
        "title": "code.me",
        "preview": "https://kevans0625.github.io/Code.me/",
        "image": codeMe,
        "github": "https://github.com/kevans0625/BookMart",
        "description": 
        "This is a simplistic code challenge application created to assist developers with improve coding skills with daily random generated challenges of a chosen difficulty (Easy, Medium, Hard). This project is currently in the development stage."
      },
      {
        "id": 2,
        "title": "Weather Dashboard",
        "preview": "https://kevans0625.github.io/Weather-Dashboard/",
        "image": weather,
        "github": "https://github.com/kevans0625/Weather-Dashboard",
        "description": 
        "I was challenged to build a weather dashboard that will run in the browser and feature dynamically updated HTML, CSS and JQuery. This app uses a server-side API OpenWeather API to retrieve weather data for cities."
      },
      {
        "id": 1,
        "title": "Workday Scheduler",
        "preview": "https://kevans0625.github.io/Work-Day-Scheduler/",
        "image": workday,
        "github": "https://github.com/kevans0625/Work-Day-Scheduler",
        "description": "This is a simple calendar app that allows users to save events for every hour of the work day. It runs in the browser and feature are dynamically updated with HTML and CSS powered by jQuery."
      },

  ]
  export default Project;
  