/**
 * This interface defines the shape of a movie object in the application.
 */
export interface Movie {
    title: string,       // The title of the movie
    type: string,        // The type of the movie (e.g. drama, comedy, action, etc.)
    date: string,        // The release date of the movie
    description: string, // A brief description of the movie
    duration: string,    // The duration of the movie in minutes
    thumbnail: string,   // The URL of the thumbnail image for the movie
    cover: string,       // The URL of the cover image for the movie
}