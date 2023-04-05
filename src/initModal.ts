import { Movie } from "./movie.interface";
import './css/modal.css';

/**
 * This function initializes and displays a modal window with details for a given movie.
 * 
 * @param {Movie} movie - The movie to display in the modal window
 * 
 * @returns {void}
 */
export function initModal(movie: Movie) : void {

    // Create a new dialog element for the modal window
    const modal = document.createElement('dialog');
    modal.id = 'modal-detail-movie';   
    modal.innerHTML = `
        <div class='container-status-bar'> 
            <div id='container-left-status-bar'>
                <img src="src/img/Time.svg" id="img-time" alt="image time" />
            </div>
            <div id='container-right-status-bar'>
                <img src="src/img/MobileSignal.svg" id="img-mobile-signal" alt="image mobile signal" />
                <img src="src/img/Wifi.svg" id="img-wifi" alt="image wifi" />
                <img src="src/img/Battery.svg" id="img-battery" alt="image battey" />
            </div>
        </div>
        <header id='modal-header'>
            <img src="src/img/arrow-left.svg" alt="image return" class="closeBtn">   
            <h1 id="title" class='title-center'>Detail</h1>
        </header>
        <main id='main-modal'>
            <div id='container-cover-thumbnail'>
                <img src="${movie.cover}" alt='cover movie' class='cover-details-movie'/>
                <div id='container-title-thumbnail-modal'>
                    <img src=${movie.thumbnail} id='thumbnail-modal'>
                    <h2 class='title-modal-movie'>${movie.title}</h2>
                </div>
            </div>
            <div id='container-details-modal'>
                <div class='line-detail-modal' id='date-detail-modal'>
                    <img src="src/img/CalendarGrey.svg" alt='logo date movie' class='logo-details-movie'/><p class='movie-details-modal'>${movie.date}</p>
                </div>
                <img src="src/img/Vector.svg" alt='design separator' class='separator-details'/>
                <div class='line-detail-modal'>
                    <img src="src/img/ClockGrey.svg" alt='logo duration movie' class='logo-details-movie'/><p class='movie-details-modal'>${movie.duration} minutes</p>
                </div> 
                <img src="src/img/Vector.svg" alt='design separator' class='separator-details'/>
                <div class='line-detail-modal' id='type-detail-modal'>
                <img src="src/img/TicketGrey.svg" alt='logo type of movie' class='logo-details-movie'/><p class='movie-details-modal'>${movie.type}</p>
                </div> 
            </div>
            <p id='about-movie'>About Movie</p>
            <img src="src/img/separatorHorizontal.svg" alt='design separator' class='separator-about'/>
           <p id='about-movie-description'>${movie.description}</p>
        </main>
    `;

    // Get all image elements in the modal and add an error handler to each one
    const movieImgs = modal.querySelectorAll("img");
    movieImgs.forEach((img) => {
      img.addEventListener("error", () => {
        img.src = "src/img/NoData.svg";
        img.style.backgroundColor = 'white';
      });
    });

    // Add the modal to the app container and display it
    const app = document.querySelector('#app') as HTMLElement;
    app.appendChild(modal);
    modal.showModal();

    // Hiding scroll main menu page
    document.body.style.overflow = 'hidden';

    // Close the modal when users click on back button
    const closeBtn = document.querySelector(".closeBtn") as HTMLButtonElement;
    closeBtn.addEventListener("click", () => {
        // Activate scroll main menu page
        document.body.style.overflow = 'auto';
        modal.close();
        modal.remove();
    });

}
