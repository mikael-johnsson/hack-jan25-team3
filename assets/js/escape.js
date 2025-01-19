// Logic for escape button in the nav bar: redirects the user to google and replaces the last page in
// the history with '/news' so as not to appear suspicious

const escapeButton = document.getElementById('nav-safety-button');
    escapeButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Escape button clicked!');
        escapeNow()
    })

document.addEventListener('keydown', (e) => {
    console.log('Escape keyboard shortcut activated');
    if (e.ctrlKey && e.event.key === 'e') {
        e.preventDefault();
        escapeNow();
    }
})

const escapeNow = () => {
        window.location.replace("https://www.bbc.co.uk/weather/");

}