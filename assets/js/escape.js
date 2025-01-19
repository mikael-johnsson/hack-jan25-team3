// Logic for escape button in the nav bar: redirects the user to google and replaces the last page in
// the history with '/news' so as not to appear suspicious
const escapeButtonMobile = document.getElementById('nav-safety-button-mobile');
const escapeButton = document.getElementById('nav-safety-button');
const buttons = [escapeButton, escapeButtonMobile];

    buttons.forEach((btn) => btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Escape button clicked!');
        escapeNow()
    }));

document.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log('Escape keyboard shortcut activated',e.key);
    if (e.ctrlKey && e.key === 'z') {
        escapeNow();
    }
})

const escapeNow = () => {
        window.location.replace("https://www.bbc.co.uk/weather/");
}

