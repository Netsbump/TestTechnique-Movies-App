/**
 * Add status bar mobile to main page.
 * 
 * @returns {void}
*/
export function statusBar() : void {

    // Remove logo movies app
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML= '';

    // Add status bar
    const div = document.createElement('div');
    div.id = 'container-status-bar';
    div.innerHTML = `
        <div id='container-left-status-bar'>
            <img src="src/img/Time.svg" id="img-time" alt="image time" />
        </div>
        <div id='container-right-status-bar'>
            <img src="src/img/MobileSignal.svg" id="img-mobile-signal" alt="image mobile signal" />
            <img src="src/img/Wifi.svg" id="img-wifi" alt="image wifi" />
            <img src="src/img/Battery.svg" id="img-battery" alt="image battey" />
        </div>
    `

    app.appendChild(div);

}