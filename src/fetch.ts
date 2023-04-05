import axios from 'axios';
import { Movie } from './movie.interface';

/**
 * Fetch express api to get movies
 * You can find details in server.js 
 * 
 * @returns  {Promise<Movie[]>} - Array of movies
 */
export async function fetch(): Promise<Movie[]> {
  const { data } = await axios.get<Movie[]>('https://europe-west1-movie-api-recruitment.cloudfunctions.net/movies', {
    withCredentials: false,
  });
  return data;
}


