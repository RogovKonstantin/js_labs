function attachEventsListeners() {
    const buttons = ['daysBtn', 'hoursBtn', 'minutesBtn', 'secondsBtn'];
    const timeUnits = ['days', 'hours', 'minutes', 'seconds'];

    buttons.forEach((buttonId, index) => {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', function() {
            const inputField = document.getElementById(timeUnits[index]);
            const inputValue = parseFloat(inputField.value);
            const convertedValues = convertTime(inputValue, timeUnits[index]);
            timeUnits.forEach((unit, i) => {
                if (unit !== timeUnits[index]) {
                    const outputField = document.getElementById(unit);
                    outputField.value = convertedValues[i];
                }
            });
        });
    });
}

function convertTime(value, fromUnit) {
    let days, hours, minutes, seconds;

    switch (fromUnit) {
        case 'days':
            days = value;
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            break;
        case 'hours':
            hours = value;
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            break;
        case 'minutes':
            minutes = value;
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
            break;
        case 'seconds':
            seconds = value;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
            break;
    }

    return [days, hours, minutes, seconds];
}