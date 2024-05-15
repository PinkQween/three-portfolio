import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    firebase,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    swift,
    xcode,
    styled,
    portfolio,
    happy,
    ddlc,
    soulSync,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "iOS Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML5",
        icon: html,
    },
    {
        name: "CSS3",
        icon: css,
    },
    {
        name: "ES6",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "swift",
        icon: swift,
    },
    {
        name: "Xcode",
        icon: xcode,
    },
    {
        name: "Styled Components",
        icon: styled,
    },
    {
        name: "Docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Leafster",
        company_name: "Happy Lucky's Teahouse LLC",
        icon: happy,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [
    // {
    //     testimonial:
    //         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Andy Boone",
    //     designation: "COO",
    //     company: "Happy Lucky's Teahouse LLC",
    //     image: "https://media.licdn.com/dms/image/C4D03AQEVOEc1obfs9g/profile-displayphoto-shrink_800_800/0/1581106164397?e=2147483647&v=beta&t=BckgecL2AuEu9128N7Irjs63Azoun4Dkv56rK_PYD7A",
    // }
];

const projects = [
    {
        name: "Portfolio",
        description:
            "The website you're currently viewing made with react and three.js",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/pinkQween/three-portfolio",
        demo_link: "https://hannaskairipa.com/",
    },
    {
        name: "DDLC Websites Clone",
        description: "A clone of the Doki Doki Literature Club Websites",
        tags: [
            {
                name: "Chrome console proof of knowledge",
                color: "pink-text-gradient",
            }
        ],
        image: ddlc,
        source_code_link: "https://github.com/pinkQween/DDLC-website",
        demo_link: "https://ddlc.hannaskairipa.com/",
    }
];

const iOSProjects = [
    {
        name: "SoulSync",
        description:
            "This is a app I created realizing that there aren't really any dating apps for friend making as well as there defiantly can be improvement, it has been temporally canceled due to funding",
        tags: [
            {
                name: "SwiftUI",
                color: "pink-text-gradient",
            },
            {
                name: "Camera",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "blue-text-gradient",
            },
        ],
        image: soulSync,
        source_code_link: "https://github.com/pinkQween/SoulSync",
        // demo_link: "https://hannaskairipa.com/",
    },
];

export { services, technologies, experiences, testimonials, projects, iOSProjects };