document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const email = document.getElementById('email');
    const radioButtons = document.getElementsByName('required');
    const message = document.getElementById('message');
    const checkBox = document.getElementById('checkbox');
    const warnings = document.querySelectorAll('p');
    const header = document.querySelector('header');

    first.classList.remove('error-border');
    last.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');

    warnings.forEach(p => {
        p.style.display = 'none';
    });

    let valid = true;

    if (first.value.trim() === '') {
        valid = false;
        first.nextElementSibling.style.display = 'block';
        first.classList.add('error-border');
    }

    if (last.value.trim() === '') {
        valid = false;
        last.nextElementSibling.style.display = 'block';
        last.classList.add('error-border');
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        email.nextElementSibling.style.display = 'block';
        email.classList.add('error-border');
    }

    let radioSelected = false;
    radioButtons.forEach(radio => {
        if (radio.checked) radioSelected = true;
    });
    if (!radioSelected) {
        valid = false;
        document.querySelector('.Query p').style.display = 'block';
    }

    if (message.value.trim() === '') {
        valid = false;
        message.nextElementSibling.style.display = 'block';
        message.classList.add('error-border');
    }

    if (!checkBox.checked) {
        valid = false;
        document.querySelector('.check p').style.display = 'block';
    }

    if (valid) {
        header.classList.add('show');
    }
});
