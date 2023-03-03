import './style.css'
import {calculateWakeTimes} from "./waketimes";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="root-container">
    
        <!-- Title container -->
        <div class="title-container">
            <h1>TypeSleep</h1>
            <div class="subtitle-container">
                <h3>
                    A minimal sleep calculator made with
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" class="logo" alt="Vite logo" />
                    </a>+
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="src/typescript.svg" class="logo" alt="TypeScript logo" />
                    </a>
                </h3>
            </div>
        </div>
        
        <!-- Body container -->
        <div class="body-container">
            <div class="data-container">
                <h2>I want to go to bed at:</h2>
                <input type="time" id="time-input" required value="22:00">
                <button id="set-now-button" type="button">Set Current Time</button>
            </div>
            <div class="time-display" id="time-display"></div>
        </div>
        
    </div>
`

calculateWakeTimes(
    document.querySelector<HTMLInputElement>('#time-input'),
    document.querySelector<HTMLButtonElement>('#set-now-button'),
    document.getElementById('time-display')
    )