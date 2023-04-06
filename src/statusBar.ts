import imgTime from './img/Time.svg';
import imgMobileSignal from './img/MobileSignal.svg';
import imgWifi from './img/Wifi.svg';
import imgBattery from './img/Battery.svg';

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
            <img src="${imgTime}" id="img-time" alt="image time" />
        </div>
        <div id='container-right-status-bar'>
            <img src="${imgMobileSignal}" id="img-mobile-signal" alt="image mobile signal" />
            <img src="${imgWifi}" id="img-wifi" alt="image wifi" />
            <img src="${imgBattery}" id="img-battery" alt="image battey" />
        </div>
    `

    app.appendChild(div);

}