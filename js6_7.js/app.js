function lockedProfile() {
   
    let profiles = document.getElementsByClassName('profile');
 
    for (let profile of profiles) {
        
        let button = profile.getElementsByTagName('button')[0];       
        button.addEventListener('click', function() {
           
            let unlockRadio = profile.querySelector('input[value="unlock"]');
            let lockRadio = profile.querySelector('input[value="lock"]');            
            let hiddenFields = profile.getElementsByTagName('div')[0];

            if (unlockRadio.checked) {
                
                if (hiddenFields.style.display === 'none') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            } else if (lockRadio.checked && button.textContent === 'Hide it') {
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        });
    }
}