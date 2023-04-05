
/**
 * This function generates the header for the webpage.
 * 
 * @returns {void}
 */
export function header() : void {

    const app = document.querySelector('#app') as HTMLDivElement;
    const header = document.createElement('header');
    header.innerHTML = `
    <h1 id="title">What do you want to watch?</h1>
    <div id="search-container">
        <input type="text" placeholder="Search" name="search" id="search-input">
        <button class="search-button">
            <div class="search-icon"></div>
            <div class="search-bar"></div>
        </button>
    </div>
    `
    app.appendChild(header);
}