console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const phone = document.querySelector('#phone').value;

        if (name !== '' && email !== '' && message !== '' && phone != '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-message').innerHTML = message;
            document.querySelector('#user-phone').innerHTML = phone;
            document.querySelector('#send').classList.add('show-send-succed');

        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0];
            document.querySelector('#user-name').innerHTML = `${userData.name.title}. ${userData.name.first} ${userData.name.last}`;
            document.querySelector('#user-img').src = userData.picture.large;
        })
        .catch((error) => {
            document.querySelector('#error-mrx').innerHTML = "No se ha podido recuperar el usuario. Por favor inténtelo más tarde.";
            console.log('aja', error)});
}