const heroes = document.querySelectorAll('.hero');

heroes.forEach(hero => {
    hero.addEventListener('click', event => {
        const column = event.target.closest('.column');
        const heroIndex = parseInt(event.target.dataset.index);

        // Move the selected hero to the top of the column
        column.insertBefore(event.target, column.firstChild);

        // Log the index of the selected hero
        console.log(`Selected hero index: ${heroIndex}`);
    });
});