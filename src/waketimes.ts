export function calculateWakeTimes(bedtimeInput: HTMLInputElement, buttonElement: HTMLButtonElement, displayElement: HTMLDivElement) {
    let wake_times: string[] = []

    const setWakeTimes = (wake_times: string[]) => {
        const listElements = wake_times.map((time) => `<li>${time}</li>`);
        displayElement.innerHTML = `
            <div class="help-text">
            <h3>On average, you need four to six cycles of sleep <br> every 24 hours to feel fresh and rested.</h3>
            </div>
            <ul>${listElements.join('')}</ul>
        `;
    };

    const calculateWakeTimes: any = (set_current_time: boolean) => {
        const bedtime_array = bedtimeInput.value.split(':');
        let bedtime_hours = parseInt(bedtime_array[0]);
        let bedtime_minutes = parseInt(bedtime_array[1]);

        let today = new Date();

        if (set_current_time) {
            bedtime_hours = parseInt(today.getHours().toString());
            bedtime_minutes = parseInt(today.getMinutes().toString());
        }

        today.setHours(bedtime_hours, bedtime_minutes, 0, 0);

        let local_time_str = today.toLocaleTimeString([],
            { hour: "2-digit", minute: "2-digit", hour12: false})
        bedtimeInput.value = local_time_str;

        const wake_times = [];
        for (let i = 0; i < 8; i++) {
            today.setHours(today.getHours() + 1, today.getMinutes() + 44, 0, 0);
            wake_times.push(String(i+1) + " R.E.M cycle(s): " + today.toLocaleTimeString());
        }

        return wake_times;
    }

    wake_times = calculateWakeTimes();
    setWakeTimes(wake_times)

    bedtimeInput.addEventListener('change', () => {

        wake_times = calculateWakeTimes(false);
        setWakeTimes(wake_times)

    })

    buttonElement.addEventListener('click', () => {
        wake_times = calculateWakeTimes(true);
        setWakeTimes(wake_times)
    })
}