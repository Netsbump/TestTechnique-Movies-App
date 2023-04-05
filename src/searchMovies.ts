import Fuzzy from 'fuzzy';
import { Movie } from './movie.interface';
import { initModal } from './initModal';
import './css/searchMovies.css';

/**
 * This function takes in an array of movie objects and a search text string. 
 * It uses the `Fuzzy` library to perform a fuzzy search on the array based on the 
 * `title` property of each movie object. It returns an array of movie objects that match 
 * the user's search query.
 * 
 * @param {string} searchText - The search query entered by the user
 * @param {Movie[]} movies - An array of movie objects
 * @returns {Movie[]} - An array of movie objects that match the user's search query
*/
const filterMoviesByTitle = (searchText: string, movies: Movie[]): Movie[] => {
  const options = {
    extract: (movie: Movie) => movie.title,
  };
  const results = Fuzzy.filter(searchText, movies, options);
  return results.map((result) => result.original);
}

/**
 * Template string html
 * 
 * @param {string} mainMessage 
 * @returns {string}
 */
const createSearchMessage = (mainMessage : string) : string => {
  const message = `
    <div class='container-search-message'>
      <img src="./src/img/searchLoop.svg" alt='image of search' class='img-loop-search'/>
      <p class="message-search">${mainMessage}</p>
      <p class="message-search-hint">Find your movie by title</p>
    </div>
  `;
  return message;
}

/**
 * This function updates the movie list displayed on the webpage based on a user's search query.
 * 
 * @param {string} searchText - The search query entered by the user
 * @param {Movie[]} allMovies - An array of movie objects
 * @returns {void}
 */
export function updateMovieList(searchText: string, allMovies: Movie[]): void {

  const div = document.querySelector("#search-container") as HTMLElement;
  // Add class to search container for CSS styling
  div.classList.add('search-margin');

  const main = document.querySelector('main') as HTMLElement;
  // Add class to main container for CSS styling
  main.classList.add('search-main-css');

  // Filter the array of movies based on the user's search query
  const filteredMovies = filterMoviesByTitle(searchText, allMovies);

  // Clear the contents of the main container
  main.innerHTML = '';

 // Render message if no results found
 if (filteredMovies.length === 0) {

    const message = createSearchMessage('We Are Sorry, We Can Not Find The Movies :(');
    main.innerHTML = message;

  // Render message if search input is empty
  } else if (searchText.length === 0) {

    const message = createSearchMessage('Start Typing To Find A Movie!');
    main.innerHTML = message;

  // Render the list of movies that match the search query
  } else {

    filteredMovies.forEach((movie) => {

      // Create a new container for each movie and add relevant details
      const containerMovie = document.createElement('div');
      containerMovie.classList.add('render-search-movie', 'movie-details');
      containerMovie.innerHTML = `
        <aside>
        <img src=${movie.thumbnail}> 
        </aside>
        <section class='section-details-movie'>
        <p class='title-search-movie'>${movie.title}</p>
        <div class='container-details-search-movie'>
            <div class='container-line-detail-movie'>
            <img src="./src/img/Ticket.svg" alt='logo type of movie' class='logo-details-movie'/><p class='section-search-movie-details'>${movie.type}</p>
            </div> 
            <div class='container-line-detail-movie'>
                <img src="./src/img/CalendarBlank.svg" alt='logo date movie' class='logo-details-movie'/><p class='section-search-movie-details'>${movie.date}</p>
            </div> 
            <div class='container-line-detail-movie'>
                <img src="./src/img/Clock.svg" alt='logo duration movie' class='logo-details-movie'/><p class='section-search-movie-details'>${movie.duration} minutes</p>
            </div> 
        </div>
        </section>
      `;
      
      // Check if there is an error with the image fetch and replace with a placeholder image
      const movieImgs = containerMovie.querySelectorAll("img");
      movieImgs.forEach((img) => {
        img.addEventListener("error", () => {
          img.src = "./src/img/NoData.svg";
          img.style.backgroundColor = 'white';
        });
      });

      // Append the container to the main container and bind a click event to open the modal
      main.appendChild(containerMovie);
      containerMovie.addEventListener('click', () => {
        initModal(movie);
      });
    });
  }
}