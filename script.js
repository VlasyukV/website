const featuresList = document.getElementById('features-list');

featuresList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(`You clicked on ${e.target.textContent}`);
    }
});