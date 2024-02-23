document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelector('.head .button');
    const extra = document.getElementById('extra');
    
    button.addEventListener('click', () => {
        if (!extra.style.display || extra.style.display === 'none') {
            extra.style.display = 'block';
            button.textContent = 'Less';
        } else {
            extra.style.display = 'none';
            button.textContent = 'More';
        }
    });
});