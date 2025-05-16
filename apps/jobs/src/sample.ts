export const myRoadmap = {
  "title": "Web Developer",
  "duration": 180,
  "progress": 0,
  "generated_by": "Gemini",
  "owner": "Kunal",
  "superOwner": "Kunal",
  "expectedDuration": 180,
  "tasks": [
    {
      "title": "HTML Fundamentals",
      "duration": 20,
      "subtopics": [
        {
          "title": "Introduction to HTML",
          "duration": 2,
          "prerequisites": [],
          "resources": "",
          "description": "HTML, or HyperText Markup Language, is the standard markup language for creating web pages. It provides the structure and content of a webpage, using elements represented by tags.",
          "status": "Pending"
        },
        {
          "title": "Basic HTML Tags",
          "duration": 3,
          "prerequisites": ["Introduction to HTML"],
          "resources": "",
          "description": "These are the fundamental building blocks of an HTML document, including tags for defining the document structure (<html>, <head>, <body>), text formatting (<h1>-<h6>, <p>, <span>), and other essential elements.",
          "status": "Pending"
        },
        {
          "title": "HTML Attributes",
          "duration": 2,
          "prerequisites": ["Basic HTML Tags"],
          "resources": "",
          "description": "Attributes provide additional information about HTML elements. They are specified within the start tag and usually come in name-value pairs, like id, class, src, and href.",
          "status": "Pending"
        },
        {
          "title": "HTML Headings and Paragraphs",
          "duration": 2,
          "prerequisites": ["HTML Attributes"],
          "resources": "",
          "description": "Headings (<h1> to <h6>) define the titles and subtitles of a webpage, while paragraphs (<p>) are used to structure and present blocks of text content.",
          "status": "Pending"
        },
        {
          "title": "HTML Lists",
          "duration": 2,
          "prerequisites": ["HTML Headings and Paragraphs"],
          "resources": "",
          "description": "HTML offers ordered lists (<ol>), unordered lists (<ul>), and definition lists (<dl>) to present information in a structured and easily readable format.",
          "status": "Pending"
        },
        {
          "title": "HTML Images",
          "duration": 2,
          "prerequisites": ["HTML Lists"],
          "resources": "",
          "description": "The <img> tag is used to embed images into an HTML page. The 'src' attribute specifies the path to the image, and 'alt' provides alternative text if the image cannot be displayed.",
          "status": "Pending"
        },
        {
          "title": "HTML Links",
          "duration": 3,
          "prerequisites": ["HTML Images"],
          "resources": "",
          "description": "Links, created with the <a> tag, allow users to navigate between different pages or sections within a page. The 'href' attribute specifies the destination URL.",
          "status": "Pending"
        },
        {
          "title": "HTML Tables",
          "duration": 4,
          "prerequisites": ["HTML Links"],
          "resources": "",
          "description": "Tables, created with <table>, <tr> (table row), <th> (table header), and <td> (table data) tags, are used to organize data in rows and columns.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "CSS Fundamentals",
      "duration": 25,
      "subtopics": [
        {
          "title": "Introduction to CSS",
          "duration": 2,
          "prerequisites": ["HTML Fundamentals"],
          "resources": "",
          "description": "CSS, or Cascading Style Sheets, is a style sheet language used to describe the look and formatting of an HTML document. It controls aspects like layout, colors, fonts, and responsiveness.",
          "status": "Pending"
        },
        {
          "title": "CSS Selectors",
          "duration": 3,
          "prerequisites": ["Introduction to CSS"],
          "resources": "",
          "description": "CSS selectors are used to target HTML elements that you want to style. Common selectors include element selectors, class selectors, ID selectors, and attribute selectors.",
          "status": "Pending"
        },
        {
          "title": "CSS Properties (Text, Background, Colors)",
          "duration": 4,
          "prerequisites": ["CSS Selectors"],
          "resources": "",
          "description": "These are fundamental CSS properties used to control the appearance of text (font-size, color, font-family), background (background-color, background-image), and colors throughout the webpage.",
          "status": "Pending"
        },
        {
          "title": "Box Model",
          "duration": 4,
          "prerequisites": ["CSS Properties (Text, Background, Colors)"],
          "resources": "",
          "description": "The CSS box model describes the rectangular boxes that are generated for elements in HTML. It consists of content, padding, border, and margin, and understanding it is crucial for layout control.",
          "status": "Pending"
        },
        {
          "title": "CSS Positioning",
          "duration": 4,
          "prerequisites": ["Box Model"],
          "resources": "",
          "description": "CSS positioning allows you to control the placement of elements on a webpage. Common positioning properties include static, relative, absolute, fixed, and sticky.",
          "status": "Pending"
        },
        {
          "title": "CSS Display Properties",
          "duration": 4,
          "prerequisites": ["CSS Positioning"],
          "resources": "",
          "description": "The 'display' property specifies the type of rendering box used for an element. Common values include block, inline, inline-block, flex, and grid, each affecting how elements flow within the page.",
          "status": "Pending"
        },
        {
          "title": "CSS Floats and Clearfix",
          "duration": 4,
          "prerequisites": ["CSS Display Properties"],
          "resources": "",
          "description": "Floats are used to wrap text around images or other elements. Clearfix is a technique to prevent elements from collapsing when they contain floated children.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "JavaScript Basics",
      "duration": 30,
      "subtopics": [
        {
          "title": "Introduction to JavaScript",
          "duration": 2,
          "prerequisites": ["HTML Fundamentals", "CSS Fundamentals"],
          "resources": "",
          "description": "JavaScript is a versatile, high-level programming language primarily used to add interactivity and dynamic behavior to websites. It can manipulate the DOM, handle events, and communicate with servers.",
          "status": "Pending"
        },
        {
          "title": "Variables and Data Types",
          "duration": 3,
          "prerequisites": ["Introduction to JavaScript"],
          "resources": "",
          "description": "Variables are used to store data in JavaScript. Data types define the kind of values a variable can hold, including primitive types (number, string, boolean, null, undefined, symbol) and object types.",
          "status": "Pending"
        },
        {
          "title": "Operators",
          "duration": 2,
          "prerequisites": ["Variables and Data Types"],
          "resources": "",
          "description": "Operators are symbols that perform operations on variables and values. JavaScript includes arithmetic, comparison, logical, assignment, and other types of operators.",
          "status": "Pending"
        },
        {
          "title": "Control Flow (if/else, switch)",
          "duration": 4,
          "prerequisites": ["Operators"],
          "resources": "",
          "description": "Control flow statements determine the order in which code is executed. 'if/else' statements allow you to execute different code blocks based on a condition, while 'switch' statements provide a way to handle multiple possible cases.",
          "status": "Pending"
        },
        {
          "title": "Loops (for, while)",
          "duration": 4,
          "prerequisites": ["Control Flow (if/else, switch)"],
          "resources": "",
          "description": "Loops are used to repeatedly execute a block of code. 'for' loops are used when the number of iterations is known, while 'while' loops continue as long as a condition is true.",
          "status": "Pending"
        },
        {
          "title": "Functions",
          "duration": 5,
          "prerequisites": ["Loops (for, while)"],
          "resources": "",
          "description": "Functions are reusable blocks of code that perform a specific task. They can accept input values (parameters) and return a value. Functions are essential for organizing and structuring JavaScript code.",
          "status": "Pending"
        },
        {
          "title": "Arrays",
          "duration": 5,
          "prerequisites": ["Functions"],
          "resources": "",
          "description": "Arrays are ordered collections of data. They can hold values of any data type, and elements are accessed using their index (position) within the array.",
          "status": "Pending"
        },
        {
          "title": "Objects",
          "duration": 5,
          "prerequisites": ["Arrays"],
          "resources": "",
          "description": "Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be of any data type. Objects are used to represent complex entities and their properties.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "Responsive Web Design",
      "duration": 20,
      "subtopics": [
        {
          "title": "Viewport Meta Tag",
          "duration": 2,
          "prerequisites": ["HTML Fundamentals", "CSS Fundamentals"],
          "resources": "",
          "description": "The viewport meta tag controls how a webpage is displayed on different devices, particularly mobile devices. It sets the initial scale and width of the viewport to ensure proper rendering and responsiveness.",
          "status": "Pending"
        },
        {
          "title": "CSS Media Queries",
          "duration": 5,
          "prerequisites": ["Viewport Meta Tag"],
          "resources": "",
          "description": "CSS media queries allow you to apply different styles based on characteristics of the device the website is being viewed on, such as screen size, resolution, or orientation. This is crucial for creating responsive designs that adapt to various screen sizes.",
          "status": "Pending"
        },
        {
          "title": "Flexible Layouts (Flexbox)",
          "duration": 6,
          "prerequisites": ["CSS Media Queries"],
          "resources": "",
          "description": "Flexbox is a CSS layout module that provides an efficient way to distribute space among items in a container, even when their size is unknown or dynamic. It simplifies the creation of complex layouts and is particularly useful for one-dimensional content arrangements.",
          "status": "Pending"
        },
        {
          "title": "CSS Grid",
          "duration": 7,
          "prerequisites": ["Flexible Layouts (Flexbox)"],
          "resources": "",
          "description": "CSS Grid Layout is a two-dimensional layout system for the web, allowing developers to create complex and responsive layouts with rows and columns. It offers powerful control over the placement and sizing of elements within a grid container.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "JavaScript DOM Manipulation",
      "duration": 25,
      "subtopics": [
        {
          "title": "Introduction to the DOM",
          "duration": 2,
          "prerequisites": ["JavaScript Basics", "HTML Fundamentals"],
          "resources": "",
          "description": "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page as a tree structure, where each element, attribute, and text node is an object. JavaScript uses the DOM to access and manipulate the content, structure, and style of a web page.",
          "status": "Pending"
        },
        {
          "title": "Selecting Elements",
          "duration": 3,
          "prerequisites": ["Introduction to the DOM"],
          "resources": "",
          "description": "Selecting elements in JavaScript involves using methods like document.getElementById(), document.querySelector(), and document.querySelectorAll() to target specific HTML elements within the DOM for manipulation.",
          "status": "Pending"
        },
        {
          "title": "Changing HTML Content",
          "duration": 4,
          "prerequisites": ["Selecting Elements"],
          "resources": "",
          "description": "Changing HTML content with JavaScript involves using properties like innerHTML, textContent, and setAttribute() to modify the content, text, or attributes of selected HTML elements. This allows for dynamic updates to the webpage based on user interactions or data changes.",
          "status": "Pending"
        },
        {
          "title": "Adding and Removing Elements",
          "duration": 4,
          "prerequisites": ["Changing HTML Content"],
          "resources": "",
          "description": "JavaScript can dynamically add new HTML elements to the DOM using methods like document.createElement() and appendChild(). Similarly, elements can be removed using methods like removeChild() or by setting the innerHTML of the parent element.",
          "status": "Pending"
        },
        {
          "title": "Handling Events",
          "duration": 6,
          "prerequisites": ["Adding and Removing Elements"],
          "resources": "",
          "description": "Handling events in JavaScript involves attaching event listeners to HTML elements to respond to user interactions like clicks, mouseovers, or form submissions. These listeners execute specific functions (event handlers) when the corresponding event occurs, enabling interactive web experiences.",
          "status": "Pending"
        },
        {
          "title": "Styling Elements with JavaScript",
          "duration": 6,
          "prerequisites": ["Handling Events"],
          "resources": "",
          "description": "Styling elements with JavaScript allows for dynamic modification of CSS properties. By accessing the style property of an element, you can change attributes like color, font size, and position, enabling interactive and dynamic visual updates based on user actions or data changes.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "Version Control with Git",
      "duration": 10,
      "subtopics": [
        {
          "title": "Introduction to Version Control",
          "duration": 1,
          "prerequisites": [],
          "resources": "",
          "description": "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a version control system also means that if you screw things up or lose files, you can easily recover.",
          "status": "Pending"
        },
        {
          "title": "Setting up Git and GitHub",
          "duration": 2,
          "prerequisites": ["Introduction to Version Control"],
          "resources": "",
          "description": "This involves installing Git on your local machine and creating an account on GitHub, a web-based platform for version control and collaboration. It also covers configuring Git with your GitHub account, including setting up SSH keys for secure communication and authenticating Git with GitHub.",
          "status": "Pending"
        },
        {
          "title": "Basic Git Commands (add, commit, push, pull)",
          "duration": 4,
          "prerequisites": ["Setting up Git and GitHub"],
          "resources": "",
          "description": "These are the fundamental commands for using Git. add stages changes for commit, commit saves the staged changes with a message, push uploads local commits to a remote repository, and pull downloads changes from a remote repository to your local machine.",
          "status": "Pending"
        },
        {
          "title": "Branching and Merging",
          "duration": 3,
          "prerequisites": ["Basic Git Commands (add, commit, push, pull)"],
          "resources": "",
          "description": "Branching allows you to create diverging lines of development. Merging integrates changes from one branch into another, combining the work done in separate branches back into a single branch, typically the main branch. This enables parallel development and feature isolation.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "JavaScript Framework (React)",
      "duration": 40,
      "subtopics": [
        {
          "title": "Introduction to React",
          "duration": 3,
          "prerequisites": [
            "JavaScript Basics",
            "JavaScript DOM Manipulation",
            "Version Control with Git"
          ],
          "resources": "",
          "description": "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them in response to data changes. React uses a component-based architecture and a virtual DOM to optimize performance, making it ideal for building dynamic and interactive web applications.",
          "status": "Pending"
        },
        {
          "title": "JSX",
          "duration": 3,
          "prerequisites": ["Introduction to React"],
          "resources": "",
          "description": "JSX is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. It simplifies the process of creating and manipulating DOM elements in React by providing a more intuitive and declarative way to describe the desired UI. JSX code is then transformed into standard JavaScript function calls by tools like Babel.",
          "status": "Pending"
        },
        {
          "title": "Components",
          "duration": 6,
          "prerequisites": ["JSX"],
          "resources": "",
          "description": "Components are the building blocks of React applications. They are self-contained, reusable units that encapsulate UI elements and their associated logic. React applications are built by composing components together to create complex user interfaces. Components can be either functional components (defined as JavaScript functions) or class components (defined as JavaScript classes).",
          "status": "Pending"
        },
        {
          "title": "Props",
          "duration": 4,
          "prerequisites": ["Components"],
          "resources": "",
          "description": "Props (short for properties) are a mechanism for passing data from a parent component to a child component. They are read-only values that the child component can use to render its UI or perform calculations. Props enable components to be dynamic and reusable, as they can receive different data dePending on the context in which they are used.",
          "status": "Pending"
        },
        {
          "title": "State",
          "duration": 6,
          "prerequisites": ["Props"],
          "resources": "",
          "description": "State represents the internal data of a component that can change over time. When a component's state changes, React re-renders the component to reflect the updated data. State is managed within a component and is typically used to handle user interactions, data updates, and other dynamic aspects of the UI. Only class components can manage their own state directly; functional components use hooks for state management.",
          "status": "Pending"
        },
        {
          "title": "Lifecycle Methods",
          "duration": 5,
          "prerequisites": ["State"],
          "resources": "",
          "description": "Lifecycle methods are special methods that are automatically called by React at different stages of a component's existence. These methods allow you to perform actions such as initializing state, fetching data, updating the DOM, and cleaning up resources. Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.",
          "status": "Pending"
        },
        {
          "title": "Event Handling in React",
          "duration": 5,
          "prerequisites": ["Lifecycle Methods"],
          "resources": "",
          "description": "React provides a consistent way to handle events such as clicks, form submissions, and keyboard input. Event handlers are functions that are executed when a specific event occurs on a UI element. React uses a synthetic event system that wraps the native browser events, providing improved performance and cross-browser compatibility.",
          "status": "Pending"
        },
        {
          "title": "Conditional Rendering",
          "duration": 4,
          "prerequisites": ["Event Handling in React"],
          "resources": "",
          "description": "Conditional rendering allows you to display different content or components based on certain conditions. This enables you to create dynamic UIs that adapt to different user inputs, data states, or application logic. React supports various techniques for conditional rendering, including using if statements, ternary operators, and logical AND/OR operators within JSX.",
          "status": "Pending"
        },
        {
          "title": "Lists and Keys",
          "duration": 4,
          "prerequisites": ["Conditional Rendering"],
          "resources": "",
          "description": "When rendering lists of elements in React, it's important to provide a unique key prop to each list item. Keys help React efficiently update and re-render the list when items are added, removed, or reordered. The key should be a stable and predictable value that uniquely identifies each item in the list.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "Backend Basics (Node.js and Express)",
      "duration": 10,
      "subtopics": [
        {
          "title": "Introduction to Node.js",
          "duration": 2,
          "prerequisites": ["JavaScript Basics"],
          "resources": "",
          "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling the creation of scalable and efficient network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
          "status": "Pending"
        },
        {
          "title": "Introduction to Express.js",
          "duration": 3,
          "prerequisites": ["Introduction to Node.js"],
          "resources": "",
          "description": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web applications and APIs with Node.js by providing a clear and organized structure.",
          "status": "Pending"
        },
        {
          "title": "Creating APIs with Express",
          "duration": 5,
          "prerequisites": ["Introduction to Express.js"],
          "resources": "",
          "description": "Express.js simplifies the creation of RESTful APIs by providing routing mechanisms, middleware support, and request/response handling utilities. This involves defining endpoints, handling different HTTP methods (GET, POST, PUT, DELETE), and interacting with databases or other data sources to serve or manipulate data.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    },
    {
      "title": "Deployment",
      "duration": 10,
      "subtopics": [
        {
          "title": "Introduction to Deployment",
          "duration": 1,
          "prerequisites": [
            "Version Control with Git",
            "Backend Basics (Node.js and Express)"
          ],
          "resources": "",
          "description": "Deployment is the process of making an application available for users to access. It involves configuring servers, setting up necessary infrastructure, and transferring application code and assets to the production environment. It's crucial for ensuring the application runs smoothly and reliably.",
          "status": "Pending"
        },
        {
          "title": "Deploying Front-end applications (Netlify, Vercel)",
          "duration": 4,
          "prerequisites": ["Introduction to Deployment"],
          "resources": "",
          "description": "Netlify and Vercel are platforms that offer simplified workflows for deploying front-end applications. They provide features like continuous deployment, automatic builds, and global content delivery networks (CDNs) to ensure fast and reliable performance for static websites and single-page applications.",
          "status": "Pending"
        },
        {
          "title": "Deploying Back-end applications (Heroku, AWS)",
          "duration": 5,
          "prerequisites": ["Introduction to Deployment"],
          "resources": "",
          "description": "Heroku and AWS provide different approaches to deploying back-end applications. Heroku offers a Platform-as-a-Service (PaaS) environment, simplifying server management and deployment. AWS, on the other hand, offers a wider range of services, including EC2, ECS, and Lambda, providing more control and customization options for deploying and scaling back-end applications.",
          "status": "Pending"
        }
      ],
      "startDate": null,
      "endDate": null,
      "is_completed": false
    }
  ]
}
