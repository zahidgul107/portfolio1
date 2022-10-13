let form = document.querySelector("#form");
let name = document.querySelector('.name');
let email = document.querySelector('.email');
let buget = document.querySelector(".buget");
let description = document.querySelector(".description");
let input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('button clicked');
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        console.log('failure');
    } else {
        console.log('success');
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data['Name'] = name.value;
    data['Email'] = email.value;
    data['Buget'] = buget.value;
    data['Description'] = description.value;
    console.log(data);
};
