const changeTheme = document.getElementById('mode');
changeTheme.onchange = (e) => {
  if (changeTheme.checked === false) {
    console.log("Checked")

    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  } else {
    console.log("Not Checked")
    
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
  }
}
const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  changeTheme.checked = false;
  document.documentElement.classList.remove("light")
  document.documentElement.classList.add("dark")
}

if (mode == 'light') {
  changeTheme.checked = true;
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")
}

// JSON for projects 

let projects = [
  {
    title: "Frontend Portfolio",
    image_link:"./assets/images/capstone-project-1.png",
    description:"Capstone 1 of the Zuitt Coding Bootcamp. Used HTML, CSS, JavaScript, and Bootstrap. Serves as my personal portfolio",
    button_link:"https://arvinpaoloqdiaz.github.io/web-portfolio/"
  },
  {
    title: "Backend API",
    image_link:"./assets/images/capstone-project-2.png",
    description:"Capstone 2 of the Zuitt Coding Bootcamp. REST API used in our Ecommerce React App.",
    button_link:"https://arvinpaoloq-diaz.onrender.com"
  },
  {
    title: "Full-Stack React App",
    image_link:"./assets/images/capstone-project-3.png",
    description:"Capstone 3 of the Zuitt Coding Bootcamp. Ecommerce App made through React.js.",
    button_link:"https://csp3-diaz.vercel.app/"
  },
  {
    title: "Simple Calculator",
    image_link:"./assets/images/personal-project-1.png",
    description:"A simple calculator that can calculate basic javascript operations and display it on the screen. It also stores the current operation in a history section.",
    button_link:"https://arvinpaoloqdiaz.github.io/calculator/"
  },
  {
    title: "Animated Login Form",
    image_link:"./assets/images/personal-project-2.png",
    description:"An Animated Login Form made with HTML, CSS, and JavaScript. This is where I focused on CSS animations. Forms and Links still not working.",
    button_link:"https://arvinpaoloqdiaz.github.io/login-form/"
  },
  {
    title: "Personal Blog",
    image_link:"./assets/images/personal-project-3.png",
    description:"A blog that I update throughout my journey as a starting web developer.",
    button_link:"https://my-blog-app-two.vercel.app/"
  },
  {
    title: "Blog API",
    image_link:"./assets/images/personal-project-4.png",
    description:"REST API used in my blog. Has basic features like create, edit, and delete posts. Has user authentication.",
    button_link:"https://blog-api-0qbb.onrender.com/"
  },
  {
    title: "Weather App",
    image_link:"./assets/images/personal-project-5.png",
    description:"Weather app created through Create React App. Used weatherapi as backend.",
    button_link:"https://weather-app-arvin-paolo-diazs-projects.vercel.app/"
  },
  {
    title: "To-do List",
    image_link:"./assets/images/personal-project-6.png",
    description:"Created using HTML, CSS, and JavaScript. Features like add, check-off, delete, and rearrange tasks is implemented. Integrated also as an chrome extension.",
    button_link:"https://arvinpaoloqdiaz.github.io/my-to-do-list/"
  },
];

// div container of projects
    const projectWrapper = document.getElementById("project-container");
function getProjects(project){

    // create container of a project
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("col-xs-12");
     projectContainer.classList.add("col-md-6");
      projectContainer.classList.add("col-lg-4");
       projectContainer.classList.add("my-2");

    // Card Container
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.classList.add("text-center");
    cardContainer.classList.add("bg-card");

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = `${project.title}`;

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Project Preview Image
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img");
    cardImage.setAttribute("src",`${project.image_link}`);
    cardImage.setAttribute("alt",". . .");

    // Card Image Overlay
    const cardImageOverlay = document.createElement("div");
    cardImageOverlay.classList.add("card-image-overlay");

    // Card Text Description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.textContent = `${project.description}`;

    // Card Footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    cardFooter.classList.add("text-body-secondary");

    // Card Footer Content
    const cardFooterContainer = document.createElement("div");
    cardFooterContainer.classList.add("text-center");
    cardFooterContainer.classList.add("m-3");
    cardFooterContainer.classList.add("gap-3");
    cardFooterContainer.classList.add("d-flex");
    cardFooterContainer.classList.add("justify-content-center");

    // Card Footer Content Span
    const cardFooterContent = document.createElement("span");

    // Card Footer Button
    const cardFooterButton = document.createElement("a");
    cardFooterButton.classList.add("btn");
    cardFooterButton.classList.add("btn-card");
    cardFooterButton.setAttribute("target","_blank");
    cardFooterButton.setAttribute("href",`${project.button_link}`);
    cardFooterButton.textContent = "View Project"

    // Appending HTML Elements
    cardImageOverlay.appendChild(cardDescription);

    cardBody.appendChild(cardImage);
    cardBody.appendChild(cardImageOverlay);

    cardFooterContent.appendChild(cardFooterButton);

    cardFooterContainer.appendChild(cardFooterContent);

    cardFooter.appendChild(cardFooterContainer);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);
    cardContainer.appendChild(cardFooter);

    projectContainer.appendChild(cardContainer);

    projectWrapper.appendChild(projectContainer);
  };

projects.forEach(project => {
  getProjects(project);
})
