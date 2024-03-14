const kplcApp = {
    id: 0,
    appType: 'Web app',
    appName: 'Lights Back',
    githubLink: 'https://github.com/2Kelvin/lights-back',
    description: 'A web application for Kenyans to report power anomalies in their exact location. I integrated EmailJS library to create a direct channel for clients to send emails directly to the power company and get the help they need.',
    tags: ['React', 'CSS', 'Responsive Design'],
    appUrl: 'https://2kelvin.github.io/landingpage-lightsback/',
};

const decorApp = {
    id: 1,
    appType: 'Web app',
    appName: 'Scarlette\'s Glam Decor',
    githubLink: 'https://github.com/2Kelvin/website-scarlettes-glam-decor',
    description: 'An events and decor website I built for my friend\'s business. I improved the website\'s performance by using performant images that are easy to render. I used lazy loading, compressing the images to lighter jpg format and used small image thumbnails.',
    tags: ['React', 'CSS', 'Responsive Design'],
    appUrl: 'https://bessie16.github.io/scarlettes-glam-decor/',
};

const therapistApp = {
    id: 2,
    appType: 'Android app',
    appName: 'Therapist Near You',
    githubLink: 'https://github.com/2Kelvin/myEmobilisProject',
    description: 'An android app where users can find counsellors in their locale. On finding a suitable therapist, the user can call or text to book a therapy session. More therapists can also register and have their profile appear in the app.',
    tags: ['Kotlin', 'Firebase', 'Google Auth'],
    appUrl: '',
};

const dataFetchingApp = {
    id: 3,
    appType: 'Web app',
    appName: 'Async Data Fetching',
    githubLink: 'https://github.com/2Kelvin/fetch-react-project-challenge',
    description: 'I used JavaScript asynchronous programming to fetch API data, then parsed the JSON data received and finally used map() to display each required data on its own table cell. It\'s a simple project about fetching rest API data.',
    tags: ['Async Programming', 'API', 'JSON'],
    appUrl: '',
};

const todoApp = {
    id: 4,
    appType: 'Web app',
    appName: 'To Do List',
    githubLink: 'https://github.com/2Kelvin/react-my-todo-app',
    description: 'A simple and beautiful app to track your goals. The goals are saved to local storage to avoid data loss after a session. On the side, I added a feature that fetches some dad jokes from an API to lighten up the app.',
    tags: ['React', 'API', 'Local Storage'],
    appUrl: '',
};

const airbnbApp = {
    id: 5,
    appType: 'Web app',
    appName: 'AirBnB Flask App',
    githubLink: 'https://github.com/2Kelvin/AirBnB_clone_v4',
    description: 'An airBnB app built using Python\'s Flask for the server side and jquery for the client side. It\'s a collaborative project tackled as part of my ALX program project challenges. I learnt to use Flask & also work with other developers on a single project.',
    tags: ['Python', 'Flask', 'jquery'],
    appUrl: '',
};


export const allProjects = [kplcApp, decorApp, therapistApp, todoApp, dataFetchingApp, airbnbApp];