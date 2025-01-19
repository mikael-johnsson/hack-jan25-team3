// Logic for escape button in the nav bar: redirects the user to google and replaces the last page in
// the history with '/news' so as not to appear suspicious

const escapeButton = document.getElementById('nav-safety-button');
    escapeButton.addEventListener('click', (e) => {
        console.log('Escape button clicked!');
        window.location.replace("https://google.com")
        history.replaceState(null,'','/news')
})