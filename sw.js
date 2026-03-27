let deferredPrompt;

// On écoute l'événement de Chrome
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log("Stella est prête pour l'installation.");
});

// Action du bouton en haut à gauche
document.getElementById('manual-install').addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Installation acceptée');
            }
            deferredPrompt = null; 
        });
    } else {
        // Si Chrome n'a pas encore détecté le manifest, on donne une astuce
        alert("Pour installer ou mettre à jour : \n1. Cliquez sur les 3 points en haut à droite de Chrome.\n2. Choisissez 'Installer l'application'.");
    }
});
