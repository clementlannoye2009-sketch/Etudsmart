const filterSelect = document.getElementById('filter');
const fichesList = document.getElementById('fiches-list');
const fichesItems = fichesList.querySelectorAll('li');

function showFiches(filterValue) {
    // On cache toutes les fiches
    fichesItems.forEach(item => item.classList.remove('show'));

    // On affiche celles correspondant au filtre avec cascade
    let delay = 0;
    fichesItems.forEach(item => {
        if(filterValue === 'all' || item.dataset.matiere === filterValue){
            setTimeout(() => item.classList.add('show'), delay);
            delay += 100;
        }
    });
}

// Affiche toutes les fiches au chargement
window.addEventListener('load', () => showFiches('all'));

// Change le filtre
filterSelect.addEventListener('change', () => showFiches(filterSelect.value));
