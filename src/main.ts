import './css/main.css';
import { menu } from './menu';

// Adds the logo for the application to the webpage
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id='container-logo-popcorn'>
    <a href="#" target="_blank">
      <img src="/TestTechnique-Movies-App/img/PopCorn.svg" id="logo-popcorn" alt="App logo" />
    </a>
  </div>
`
// Redirect to the main menu after a short delay
setTimeout(menu, 1000);
