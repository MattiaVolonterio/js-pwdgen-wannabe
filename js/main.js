// Selezionare elemento h1
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// Inserisci Nome Utente
const userName = prompt("Qual è il tuo nome?", "Mattia");
console.log(userName);

// Inserisci Cognome Utente
const userSurname = prompt("Qual è il tuo cognome?", "Volonterio");
console.log(userSurname);

// Inserisci Colore Preferito Utente
const userColor = prompt("Qual è il tuo colore preferito?", "Nero");
console.log(userColor);

// Genera la password
const pswGenerated = userName + userSurname + userColor + "24";
console.log(pswGenerated);

// Stampare password generate nel titolo della pagina
mainTitle.innerText = `La password che abbiamo generato per te è: ${pswGenerated}`;
