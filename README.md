# Frontend Capstone

This project is a Frontend Capstone done during the **Zuitt Web Development Bootcamp 2023**

This will showcase the skills that the developer has acquired during the Frontend discussions of the bootcamp

These skills include but not limited to:
- `Git` Basics
- Semantic `HTML` Coding
- Proper `CSS` Formatting
- `Bootstrap` Framework Familiarity

This serves as the Final requirement for the ***Frontend Web Development*** before transitioning to *Backend Web Development*

### Requirements
These are the requirements for the Frontend Capstone Development. The webpage should, at the very least, have the following features.
- [x] Create a web portfolio using `HTML`, `CSS`, and `Bootstrap`.
- [x] Only use Google Fonts
- [x] Add text and background colors
- [x] Must be responsive to different screen sizes
- [x] Must contain atleast 4 sections
    - [x] Landing Section , id = "landing"
    - [x] Projects Section, id = "projects"
    - [x] Contact Section, id = "contact"
    - [x] Tools Section, id = "tools"
- [x] Has an element bearing the title Full-Stack Web Developer
- [x] Has an element bearing the Trainee's Name
- [x] Has a *\<form\>* element with inputs and text area
- [x] All CSS must be externally declared
- [x] No use of ***\<br\>***, only ***\<hr\>***
- [x] No placeholder in contents of the webpages
- [x] No Horizontal scrolls
- [x] No Dead Links
- [x] Must be a Single-Page Application
      
### Resources Used
This Single-Page Application is built using the following:

* [![Git][Git-logo]](#)
* [![HTML5][HTML-logo]](#)
* [![CSS3][CSS-logo]](#)
* [![Bootstrap][Bootstrap-logo]](#)
* [![JavaScript][JavaScript-logo]](#)
  
## About the Project

The project has three(3) main files:
* [**index.html**](./index.html)
    - Contains the foundation of the Capstone Project
    - As per the requirement, CSS file is externally linked to ***index.css*** through the following code:
      
    ```html
    <link rel="stylesheet" type="text/css" href="./index.css">
    ```
    - ***Bootstrap CSS Framework*** is also used and is linked through the following code:
    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    ```
    - Class attributes of HTML elements are changed to be able access the Bootstrap Framework.
    - A set of Google Fonts (`Kanit`, `Libre Baskerville`, `Open Sans`) are called externally through the following code:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    ```
* [**index.css**](./index.css)
    - Contains the stylings of the Capstone Project.
    - This is where the appearance of the webpage will be changed in order for the webpage to be appealing to other users.
    - A sample code block below shows the CSS Reset done for the webpage. This is good practice when using CSS to have control in alignments and have uniformity when styling html elements.
    ```css
    * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Open Sans",sans-serif;
    }
    ```
    - Google Font ***Open Sans*** is the default font for the whole document.
* [**index.js**](./index.js)
    - Although not required, an **index.js** file is still created to add interactivity to the webpage.
    - In this webpage specifically, it was used for the ***Light*** and ***Dark*** mode of the webpage using *HTML DOM*.

## Usage

## Features

## Conclusion

## License

## Contacts
<!----------------------------------------------------------------------------------------------------------------------------------------------------------->
[Git-logo]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[HTML-logo]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[CSS-logo]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[Bootstrap-logo]: https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[JavaScript-logo]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E

