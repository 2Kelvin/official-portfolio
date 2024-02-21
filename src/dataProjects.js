const kplcApp = {
    id: 0,
    appType: 'Web app',
    appName: 'Lights Back',
    githubLink: 'https://github.com/2Kelvin/lights-back',
    description: 'A web application for Kenyans to report power anomalies in their exact location.',
    tags: ['React', 'CSS', 'Responsive Design'],
};

const decorApp = {
    id: 1,
    appType: 'Web app',
    appName: 'Scarlette\'s Glam Decor',
    githubLink: 'https://github.com/2Kelvin/website-scarlettes-glam-decor',
    description: 'An events and decoration website I built for my friend for her business.',
    tags: ['React', 'CSS', 'Responsive Design'],
};

const therapistApp = {
    id: 2,
    appType: 'Android app',
    appName: 'Therapist Near You',
    githubLink: 'https://github.com/2Kelvin/myEmobilisProject',
    description: 'An android app where users can log in and search for counsellors who are relatively close to their location without the hussle of doing it manually. On finding a suitable therapist, the user can go ahead and call or text the therapist to book for a counselling session. Interested therapists can also join the app by registering and having their data saved to the app\'s database which is then displayed on the app.',
    tags: ['Kotlin', 'Firebase', 'Google Auth'],
};

const dataFetchingApp = {
    id: 3,
    appType: 'Web app',
    appName: 'Async Data Fetching',
    githubLink: 'https://github.com/2Kelvin/fetch-react-project-challenge',
    description: 'n this web project, I use an async await function to fetch API data into my app, convert it from its JSON format and use map() to display each required data on its own table cell with each having a unique key.',
    tags: ['Async Programming', 'API', 'JSON'],
};

const todoApp = {
    id: 4,
    appType: 'Web app',
    appName: 'To Do List',
    githubLink: 'https://github.com/2Kelvin/react-my-todo-app',
    description: 'A simple and beautiful app to keep track of my goals as I complete them. The golas are saved to local storage so the data isn\'t wiped or reset after every session. On the side, I added a feature that fetches some dad jokes from an API to lighten up the app.',
    tags: ['React', 'API', 'Local Storage'],
};

const airbnbApp = {
    id: 5,
    appType: 'Web app',
    appName: 'AirBnB',
    githubLink: 'https://github.com/2Kelvin/AirBnB_clone_v4',
    description: 'An airBnB app built using Python\'s Flask for the server side and jquery for the client side.',
    tags: ['Python', 'Flask', 'jquery'],
};


export const allProjects = [kplcApp, decorApp, therapistApp, todoApp, dataFetchingApp, airbnbApp];