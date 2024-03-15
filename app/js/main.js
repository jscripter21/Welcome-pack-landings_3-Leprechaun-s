document.getElementById('myButton').addEventListener('click', function() {
    const link = 'https://sloterra.com/registration';

    window.location.href = link;
});



document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.querySelector('.icons-btn');

    copyButton.addEventListener('click', function() {
        var textToCopy = 'ASK155';

        var textarea = document.createElement('textarea');
        textarea.value = textToCopy;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand('copy');

        document.body.removeChild(textarea);

        copyButton.style.transform = 'scale(1.1)';

        setTimeout(function() {
            copyButton.style.transform = 'scale(1)';
        }, 300);
    });
});