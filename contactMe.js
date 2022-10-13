let form = document.querySelector("form");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let message = document.querySelector(".message");
let input = document.querySelector("input");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    console.log('Button Clicked');
    formValidation();
});

let formValidation = () => { 
    if (input.value === "") { 
        console.log("Failure");
    } else {
        console.log("Success");
        acceptData();
    }
};

let data = {};

let acceptData = () => { 
    data['Name'] = name.value;
    data['Email'] = email.value;
    data['Subject'] = subject.value;
    data['Message'] = message.value;
    console.log(data);
};

