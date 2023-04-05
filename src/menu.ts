import { header } from './header';
import { fetch } from './fetch';
import { renderMovies } from './renderMovies';
import { updateTitleToSearch } from './updateTitleToSearch';
import { updateMovieList } from './searchMovies';
import { statusBar } from './statusBar';
import './css/menu.css';

/**
 * This function displays the main menu of movies on the webpage.
 * 
 * @returns {void}
 */
export function menu() : void {

    // Display the status bar and header
    statusBar();
    header();

    // Fetch the movies from the API and render them on the page
    fetch()
    .then(movies => {

        const moviesList = renderMovies(movies);

        // Bind the updateMovieList function to the search input element
        const searchInput = document.querySelector('#search-input') as HTMLInputElement;
        searchInput.addEventListener('input', (event: Event) => {
        
        updateTitleToSearch();
        
        // Call the updateMovieList function to filter the movie list based on the search query
        const searchText = (event.target as HTMLInputElement).value;
        updateMovieList(searchText, moviesList);

    });
    })
    .catch(error => {
        console.error(error);
    });;
}