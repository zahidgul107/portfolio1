// const header = document.querySelector('.navbar');

// window.onscroll = function (){
//     var top = window.scrollY;
//     if (top>=100) {
//         header.classList.add('navbar-dark bg-dark');
//     } else {
//         header.classList.remove('navbar-dark bg-dark');
//     }
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()