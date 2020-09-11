var nmber = document.getElementById("number"); // just normal variables with the ids form html
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var counter = 0;


btn1.onclick = function () {  //If you click button 1 the Lower counter button then afunction will happen
    counter -= 1;               // counter variable -1 every time you click on the button
    nmber.innerHTML = counter;  // counter value will be displayed on the h1 with the ID number

    if (counter < 0) {          // if counter is less then 0, the h1 will turn red color.
        nmber.style.color = "red";

    }
}

btn2.onclick = function () {  //Function if btn2 is being clicked it do the following function.
    counter += 1;             //the counter variable will be increased by 1 every time you press the button Add Counter.
    nmber.innerHTML = counter; // every time it clicks then counter will be added to the h1.   

    if (counter > 0) {          //here the color will happen if the counter is greater then 0 then it will do the green color to the h1 with the id of counter
        nmber.style.color = "green";

    }
}