/* Add your JavaScript to this file */

window.addEventListener("load", function (e) {
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var btn = document.querySelector("button");

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        console.log('Form submitted');

        var email = document.querySelector('#email');

        if(email.value.match(pattern))
        {
            document.querySelector(".message").innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list.";
            console.log("Thank you! Your email address " + email.value + " has been added to our mailing list.");
        }

        else {
            document.querySelector(".message").innerHTML = "Please enter a valid email address."
            console.log("Please enter a valid email address.");
        }
    
    });

} )