const hbs = require("hbs");

//helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getName', () => {
    return 'Raul Rodriguez';
});

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');
    words.forEach((w, idx) => {
        // Takes the first position in the word and convert to upper case, then
        // concatenates the rest and converts to lower case
        words[idx] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });

    // join the words and separates them with a space
    return words.join(' ');
});