import { initModal } from './initModal';
import { Movie } from './movie.interface';

/**
 * Render two sections of movies
 * Section 1 : 4 latest movies by date
 * Section 2 : rest of movies
 * @param {Movie[]} movies - all movies unsorted 
 * @returns {Movie[]} - all movies sorted
 */
export function renderMovies(movies: Movie[]) : Movie[] {

    // Sort movies by date
    movies.sort((a, b) => parseInt(b.date) - parseInt(a.date))

    // Array latestMovies
    const latestMovies = movies.slice(0, 4);

    // Array restMovies
    const restMovies = movies.slice(4);

    /**
     * Build ul list of img movies
     * @param {Movie[]} movies
     * @returns {HTMLUListElement} - HTML unordered list element
     */
    const generateMovieList = (movies: Movie[]): HTMLUListElement => {

        const list = document.createElement('ul');

        movies.forEach((movie, i) => {

          const item = document.createElement('li');
          const img = document.createElement('img');
          const div = document.createElement('div');
          div.innerHTML = `${i +1}`;
          div.classList.add('number-movie');

          img.src = movie.thumbnail;
          img.style.borderRadius = "16px";

          // Check if there is an error with the image fetch and replace with a placeholder image
          img.addEventListener('error', () => {
            img.src = '/TestTechnique-Movies-App/img/NoData.svg';
            img.style.backgroundColor = 'white';
          });

          // Bind a click event to open the modal 
          img.addEventListener('click', () => {
            initModal(movie);
          });

          item.appendChild(img);
          item.appendChild(div);
          list.appendChild(item);
        });
        return list;
    }

    const latestMoviesList = generateMovieList(latestMovies);
    latestMoviesList.classList.add('latest-movies', 'carousel-list');

    const restMoviesList = generateMovieList(restMovies);
    restMoviesList.classList.add('rest-movies');

    // Creation section last movies
    const latestMoviesSection = document.createElement('section');
    latestMoviesSection.id = 'latestMoviesSection';

    // Creation section rest movies
    const restMoviesSection = document.createElement('section');
    restMoviesSection.id = 'restMoviesSection';

    latestMoviesSection.appendChild(latestMoviesList);
    restMoviesSection.appendChild(restMoviesList);

    // Creation separtor design between sections
    const img = document.createElement('img');
    img.src = '/TestTechnique-Movies-App/img/separatorHorizontal.svg';
    img.alt = 'esign separator';
    img.id = 'separator'

    // Add to main html
    const main = document.createElement('main');
    main.appendChild(latestMoviesSection);
    main.appendChild(img);
    main.appendChild(restMoviesSection);

    const app = document.querySelector('#app') as HTMLElement;

    app.appendChild(main);

    return movies;
  }