export const ProjectsData: Website.IProject[] = [
    {
        id: 'a',
        label: 'Maze Generation',
        date: 'May 2017',
        tags: [
            {
                label: 'p5',
            },
            {
                label: 'JavaScript',
            },
        ],
        p5: {
            frameURL: 'https://editor.p5js.org/mitch702/present/56IhHcVIx',
        },
        links: [
            {
                label: "Daniel Shiffman's YouTube Channel",
                url: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
            },
            {
                url: 'https://editor.p5js.org/mitch702/sketches/56IhHcVIx',
                label: 'Code',
            },
        ],
        description:
            'Maze Generation is a project that I followed along with Daniel Shiffman on YouTube. I would like to thank him for his help and great resources.  This project was done using the p5 library.',
    },
    {
        id: 'b',
        label: "Conway's Game of Life",
        tags: [
            {
                label: 'p5',
            },
            {
                label: 'JavaScript',
            },
        ],
        p5: {
            frameURL: 'https://editor.p5js.org/mitch702/present/TdpKX73to',
        },
        links: [
            {
                url: 'https://editor.p5js.org/mitch702/sketches/TdpKX73to',
                label: 'Code',
            },
            {
                url: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life',
                label: "Conway's Game of Life Wiki",
            },
        ],
        description:
            'Maze Generation is a project that I followed along with Daniel Shiffman on YouTube. I would like to thank him for his help and great resources.  This project was done using the p5 library.',
    },
    {
        id: 'c',
        label: "Accenture's Automated Malware Analysis Platform",
        date: 'April 2018',
        image: '/assets/images/amap/accenture-team-photo.jpg',
        images: [
            '/assets/images/amap/amap-dashboard.png',
            '/assets/images/amap/accenture-team-photo.jpg',
            '/assets/images/amap/amap-file.png',
        ],
        tags: [
            {
                label: 'python',
            },
        ],
        description:
            'Accenture is a professional services company that solves their clients’ problems by providing services in strategy, consulting, digital, technology and operations. Accenture’s iDefense provides timely, relevant and actionable cyber threat intelligence to the largest organizations in the world.  Malware is software that is intended to damage or disable computers. Accenture iDefense maintains a large database with more than 260 million samples of malware. Before being added to this database, each new malware sample must be analyzed to determine what it does and how it works. iDefense uses various software modules to analyze malware. However, the number of malware samples is growing so fast that it cannot be processed manually. Our Automated Malware Analysis Platform (AMAP) is a web app that combines iDefense’s various malware analysis modules to process malware automatically at the speed and scale required.  For each batch of malware, users choose which iDefense malware analysis modules to apply. Our dashboard displays the status of malware currently being processed and the status of the overall system. Malware is also processed automatically by our system when users are not actively using it. Our Automated Malware Analysis Platform runs as a web-based application with a backend written in Python. The underlying database holding malware samples and analysis output is mongoDB.',
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/amitch6097/AMAP',
            },
            {
                url:
                    'http://www.cse.msu.edu/~cse498/2018-01/projects/accenture/',
                label: 'Website',
            },
        ],
    },
    {
        id: 'd',
        label: 'Canine Resource Guide Mobile App',
        date: 'May 2018',
        image:
            '/assets/images/canine-resource-guide/canine-resrouce-guide-prj.png',
        images: [
            '/assets/images/canine-resource-guide/canine-resrouce-guide-prj.png',
            '/assets/images/canine-resource-guide/directory.png',
            '/assets/images/canine-resource-guide/calendar.png',
        ],
        tags: [
            {
                label: 'JavaScript',
            },
            {
                label: 'React Native',
            },
        ],
        description:
            "Canine Resource Guide provides information about resources and services to dog owners across Michigan.  For this project I created a mobile app which houses all of the guides information digitally.  This application is created using the React Native Framework and is currently being tested on Apple's Test Flight App.",
        links: [
            {
                label: 'Canine Resouce Guide Website',
                url: 'https://canineresourceguide.com/',
            },
            {
                url: 'https://midogguide.com/',
                label: 'Michigan Dog Guide Website',
            },
        ],
    },
    {
        id: 'e',
        label: 'Steampunked Class Project',
        date: 'March 2017',
        p5: {
            frameURL: 'http://webdev.cse.msu.edu/~mitch702/project3/',
        },
        tags: [
            {
                label: 'PHP',
            },
            {
                label: 'JavaScript',
            },
        ],
        description:
            'Steampunked is a final class project for CSE477. Two players compete on one computer to assemble a pipeline between two pipes.  This project was created with JavaScript and PHP',
        links: [
            {
                label: 'Full Game',
                url: 'http://webdev.cse.msu.edu/~mitch702/project3/',
            },
        ],
    },
    {
        id: 'f',
        label: 'Avida Draw',
        date: 'August 2016',
        p5: {
            frameURL:
                'https://www.youtube.com/embed/k8qN6kdDJso?autoplay=1&enable_js=1',
        },
        tags: [
            {
                label: 'python',
            },
        ],
        description:
            "Avida Draw is a tool I worked on during my time at the BEACON Lab at MSU. The tool creates a visual animation of an Avidan digital orgnism's path. This tool helped me and my team better understand the digital organism's we were researching, as well as helping to present the information in Academic papers.  Avida Draw was built using Python and the turtle graphics",
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/amitch6097/avida_draw',
            },
            {
                label: 'Paper',
                url: 'http://cognet.mit.edu/proceed/10.7551/ecal_a_060',
            },
        ],
    },
    {
        id: 'g',
        label: 'DET X MSU Public Safety Data',
        date: 'July 2016',
        image: '/assets/images/detxmsu/detxmsu.png',
        images: [
            '/assets/images/detxmsu/detxmsu.png',
            '/assets/images/detxmsu/crime-by-year.png',
            '/assets/images/detxmsu/crime-by-category.png',
        ],
        tags: [
            {
                label: 'JavaScript',
            },
        ],
        description:
            "The Detroit X MSU Project was done as a final project for the class MI491. The website showcases public saftey data of Detroit that was cleaned and reviewed while I lived in Detroit for the duration of the class. The website is meant to be a tool for the people of Detroit, so they can create more informed conclusions about the state of Detroit's crime.  This project was created using the Google Charts API, HTML/CSS/JavaScript.",
        links: [
            {
                label: 'Website',
                url: 'https://msu.edu/~mitch702/assets/DETxMSU/year_page.html',
            },
        ],
    },
    {
        id: 'h',
        label: 'Google Maps Zombies',
        date: 'December 2016',
        p5: {
            frameURL:
                'https://msu.edu/~mitch702/assets/GoogleMapsZombies/index.html',
        },
        tags: [
            {
                label: 'JavaScript',
            },
            {
                label: 'p5',
            },
        ],
        description:
            'Google Maps Zobmies is a game I created which uses Google Maps API.The game started from the idea of creating a game, where the player already knew the map. By using Google Maps a user can select the location of their home or a place they know and automaitcally know where to go in the game. Press the mouse to shoot and the arrow keys to move.',
        links: [
            {
                label: 'Full Size Game',
                url:
                    'https://msu.edu/~mitch702/assets/GoogleMapsZombies/index.html',
            },
        ],
    },
    {
        id: 'i',
        label: 'Perceptron',
        date: 'September 2017',
        p5: {
            frameURL: 'https://editor.p5js.org/mitch702/present/O3gX3lf_E',
        },
        tags: [
            {
                label: 'JavaScript',
            },
            {
                label: 'p5',
            },
        ],
        description:
            'Perceptron is a project that I followed along with Daniel Shiffman on YouTube. I would like to thank him for his help and great resources.',
        links: [
            {
                label: "Daniel Shiffman's YouTube Channel",
                url: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
            },
            {
                url: 'https://editor.p5js.org/mitch702/sketches/O3gX3lf_E',
                label: 'Code',
            },
        ],
    },
    {
        id: 'j',
        label: 'Linear Regression',
        date: 'October 2017',
        p5: {
            frameURL: 'https://editor.p5js.org/mitch702/present/fme6e3AJ0z',
        },
        tags: [
            {
                label: 'JavaScript',
            },
            {
                label: 'p5',
            },
        ],
        description:
            'Linear Regression is a project that I followed along with Daniel Shiffman on YouTube. I would like to thank him for his help and great resources.',
        links: [
            {
                label: "Daniel Shiffman's YouTube Channel",
                url: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
            },
            {
                url: 'https://editor.p5js.org/mitch702/sketches/fme6e3AJ0z',
                label: 'Code',
            },
        ],
    },
    {
        id: 'k',
        label: 'Linear Regression w/ Gradient Descent',
        date: 'October 2017',
        p5: {
            frameURL: 'https://editor.p5js.org/mitch702/present/GBNVOZzOU',
        },
        tags: [
            {
                label: 'JavaScript',
            },
            {
                label: 'p5',
            },
        ],
        description:
            'Linear Regression w/ Gradient Descent is a project that I followed along with Daniel Shiffman on YouTube. I would like to thank him for his help and great resources.',
        links: [
            {
                label: "Daniel Shiffman's YouTube Channel",
                url: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
            },
            {
                url: 'https://editor.p5js.org/mitch702/sketches/GBNVOZzOU',
                label: 'Code',
            },
        ],
    },
];
