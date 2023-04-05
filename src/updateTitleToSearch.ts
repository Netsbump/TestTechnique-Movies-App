import { menu } from './menu';

/**
 * Change title "What do you want to watch? " in "Search"
 * Add back button to main menu
 * 
 * @returns {void}
 */
export function updateTitleToSearch() : void  {

  // Change title
  const title = document.querySelector('#title') as HTMLElement;
  title.classList.add('title-center');
  title.textContent = "Search";

  // Add arrow back for return
  const header = title.parentElement as HTMLElement;
  const inputContainer = document.querySelector('#search-container') as HTMLElement;

  let img = document.querySelector('#img-back-main-menu') as HTMLImageElement;
  // Creation of arrow back if doesn't exist
  if (!img) { 

    img = document.createElement("img");
    img.src = "/src/img/arrow-left.svg";
    img.alt = "image go back to main menu";
    img.id = "img-back-main-menu";

    const newDiv = document.createElement("div");
    newDiv.id = "container-title-search";
    newDiv.appendChild(img);
    newDiv.appendChild(title);

    header.insertBefore(newDiv, inputContainer);

    // Bind event click 
    img.addEventListener("click", () => {

      // Remove css class search container
      const div = document.querySelector("#search-container") as HTMLElement;
      div.classList.remove('search-margin');
      const main = document.querySelector('main') as HTMLElement;
      main.classList.remove('search-main-css');
      
      // Go back to main menu
      menu()

    });
  }
}
  