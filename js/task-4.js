const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const element = event.currentTarget.elements;

    if (element.email.value.trim() && element.password.value.trim() !== '') {
        console.log(`Email : ${element.email.value}`);
        console.log(`Password : ${element.password.value}`);
    } else {
        alert('All form fields must be filled in');
    }

    event.target.reset();
}