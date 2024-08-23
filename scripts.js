function copyToClipboard(button, text) {
    navigator.clipboard.writeText(text).then(function() {
        const copyIcon = button.querySelector('.copy-icon');
        const successIcon = button.querySelector('.success-icon');

        copyIcon.classList.add('hidden');
        successIcon.classList.remove('hidden');

        setTimeout(() => {
            successIcon.classList.add('hidden');
            copyIcon.classList.remove('hidden');
        }, 2000);
    }, function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
