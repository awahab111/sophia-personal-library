function getCurrentDate() {
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-UK', options).toString();
    return formattedDate;
}

function getCurrentTime() {
    const currentTime = new Date();
    const options = { hour: 'numeric', minute: 'numeric'};
    const formattedTime = currentTime.toLocaleTimeString('en-US', options).toString();
    return formattedTime;
}

export { getCurrentDate, getCurrentTime };