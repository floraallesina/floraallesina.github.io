const fortunes = [
    "La fortuna che cerchi è in un altro biscotto.",
    "Credo in te. Ma sono solo un biglietto generato casualmente.",
    "Ritenta. Sarai più fortunatx... forse.",
    "5, 8, 33. Se vinci mi dai anche la tua metà.",
    "Il tuo giorno fortunato? Ieri.",
    "Il biglietto fortunato l'ha già trovato qualcun altro.",
    "Ancora tu?",
	"Per le frasi di Confucio mangia un cioccolatino.",
	"Don't panic.",
	"Pensi che sia stato un anno difficile? Non ti dico il prossimo.",
	"Error 404: biglietto non trovato. ",	
	"Non ascoltare il biglietto prima. Non sa cosa dice.",
	"Riprova più tardi, sto dormendo. (Si, anche i biscotti devono dormire)",
    "Se vuoi trovare te stesso devi giocare a nascondino da solo.",
];

const biscotto = document.getElementById('biscotto');
const messaggio = document.getElementById('messaggio');

biscotto.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    messaggio.textContent = randomFortune;
});