# TestTechnique-Movies-App

<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="img/Popcorn.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Front-end Developer Technical Test</h3>

  <p align="center">
    Front-end project developed as part of a technical assessment for a recruitment process.
    <br />
    <a href="https://github.com/Netsbump/TestTechnique-Movies-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://netsbump.github.io/TestTechnique-Movies-App/">View Demo</a>
    ·
    <a href="https://github.com/Netsbump/TestTechnique-Movies-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/Netsbump/TestTechnique-Movies-App/pulls">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#exercise-description">Exercise Description</a>
    </li>
    <li>
      <a href="#instruction">Instructions</a>
    </li>
    <li><a href="#expected-deliverables">Expected Deliverables</a></li>
    <li><a href="#evaluation-criteria">Evaluation Criteria</a></li>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#choices-building-in-application">Choices In Building Application</a></li>
  </ol>
</details>



<!-- EXERCISE DESCRIPTION -->
## Exercise Description

This exercise consists of implementing a web application that displays a list of movies based on the provided Figma mockup and a given API Endpoint.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- INSTRUCTIONS -->
## Instructions

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Retrieving data from the API Endpoint and displaying it in the movie list

You must retrieve the data from the provided API Endpoint, then display it in the movie list of your web application as follows:
1. The header section of the application's homepage should display the 4 most recent movies from the complete list in a horizontal scrollable list.
2. The rest of the section should display the list of all other movies in a vertical scrollable list.

### Search by movie title

Users should be able to search for movies (by title only). 
The search results must be displayed in a modal and sorted alphabetically. The choice of search algorithm is up to you (e.g., fuzzy).

### Displaying movie details in a modal

When a movie is selected, its details should be displayed in a modal.

### Application adaptability

The application must be designed as "Mobile First" and responsive, ensuring an optimal user experience on all screen sizes for smartphones and tablets.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- EXPECTED DELIVERABLES -->
## Expected Deliverables

1. The source code must be hosted in a public GitHub repository.
2. A README file must be present at the root of the repository. It should summarize all the details and choices made in building the application, as well as the link to the hosted application (see below).
The application must then be hosted on a hosting platform of your choice (Netlify, GitHub Pages, Firebase Hosting, etc).

<aside>
💡 Make sure the repository and hosted application are accessible for the test evaluation.
</aside>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- EVALUATION CRITERIA -->
## Evaluation Criteria

1. Justification of technological choices: We will evaluate the relevance of the choices made for the framework (if applicable) and external packages, as well as the candidate's ability to explain and justify their choices.
2. Quality of implementation: We will evaluate the quality of the application's implementation, the quality of the code, the application's structure, and the quality of the user interface, particularly its adaptation to different resolutions and formats of phones and tablets.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RESOURCES -->
## Resources

### Figma Mockup

<p><a href="https://www.figma.com/file/vRA7hIaeeYsFaK3v8nx7il/Movies-app-(Community)?node-id=0%3A1&t=7VQH4vPNhEXILAQ4-1</a></p>
<aside>
💡 A Figma account is required to inspect the mockup
</aside>

### Fonts

Poppins : <p><a href="https://fonts.google.com/specimen/Poppins</a></p>
Montserrat : <p><a href="https://fonts.google.com/specimen/Montserrat</a></p>

### Data Response Format

[
  {
		"title": string,
		"type": string,
    "date": string,
    "description": string,
    "duration": string,
    "thumbnail": uri,
		"cover": uri,
  }
]

<!-- CHOICES IN BUILDING APPLICATION -->
## Choices In Building Application

 1. I decided to build my project with Vite.js to quickly start coding and take the opportunity to explore this tooling solution. 
 2. The project is built using vanilla JavaScript with TypeScript, as I am not familiar with any frameworks, and it didn't seem particularly useful for this integration project. 
 3. I used fuzzy.js as the library for the movie search algorithm, and axios for HTTP requests to simplify the syntax and familiarize myself with the library.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
