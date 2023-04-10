//Bara'a Abo-Asal : Write a JavaScript program to display the current day and time in the following format.
// Ex: Today is : Tuesday. Current time is : 10 PM : 30 : 38


function displayTimeAndDate() {
    document.getElementById("button").innerText = 'Refresh';
    
    const now = new Date(); // create a new Date object with the current date and time
    const options = { weekday: 'long' }; // set the option to display the day of the week in long format
    const dayOfWeek = now.toLocaleString('en-US', options); //this method gets the day of the week in long format
    const minutes =  String(now.getMinutes()).padStart(2, '0'); //get the current minutes (00-59)
    const seconds =  String(now.getSeconds()).padStart(2, '0'); //get the current seconds (00-59)
    let hours = now.getHours(); //get the current hour (0-23)
    let period = '';
    // if (hours > 12) {
    //     hours = hours - 12;
    //     period = 'PM';
    // }
    // else {
    //     hours = hours;
    //     period = 'AM';
    // }
    hours > 12 ? period = 'PM' : period = 'AM';
    hours = hours % 12 || 12; //i had an error when this line was before line 21! This line have to be after the ternary operator
    output = `Today is: ${dayOfWeek} | Current time: ${hours} ${period} : ${minutes} : ${seconds}`
    document.getElementById("time").innerHTML = output;
}


