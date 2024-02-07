const rows = document.querySelectorAll('.row');
const row1 = document.querySelectorAll('.row1');
const row2 = document.querySelectorAll('.row2');
const row3 = document.querySelectorAll('.row3');
const row4 = document.querySelectorAll('.row4');

const wordList1 = ['apple', 'orange', 'pear', 'cucumber'];
const wordList2 = ['rose', 'daisy', 'dandelion', 'violet'];
const wordList3 = ['starBurst', 'gummyBear', 'jawBreaker', 'smarties'];
const wordList4 = ['laptop', 'phone', 'tv', 'tablet']

/** 
 * example for selecting from a massive array of words if you want to add all words simultaneously
 
const someBigAssArray = [];
const startingIndex = Math.floor(Math.random() * (someBigAssArray.length - 16));

const bigAssArraySlice = someBigAssArray.slice(startingIndex, startingIndex + 17);

const selectedWords = [];
*/

function checkIfWordsAreRelated(wordsArray) {
    const wordCategories = {
        apple: ['red', 'fruit', 'sweet'],
        rose: ['plant', 'red', 'thorn'],
        gummyBear: ['squishy', 'sweet', 'candy'],
    };
    
    const word1 = 'apple';
    const word2 = 'rose';
    
    return wordsAreRelated = wordCategories[word1].map((word) => {
        if(wordCategories[word2].includes(word)) {
            return true;
        }
    });
}


// example. This should be refactored without repetition
row1.forEach((column, index) => {
    console.dir(column)
    column.textContent = wordList1[index];
});
row2.forEach((column, index) => {
    console.dir(column)
    column.textContent = wordList2[index];
});
row3.forEach((column, index) => {
    console.dir(column)
    column.textContent = wordList3[index];
});
row4.forEach((column, index) => {
    console.dir(column)
    column.textContent = wordList4[index];
});

rows.forEach((row) => {
    row.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`type of event:`);
        console.dir(row)
        // go blue
        if (row.style.backgroundColor === 'blue') {
            const wordLocation = selectedWords.indexOf(row.textContent);
            selectedWords.splice(wordLocation, 1);
            console.log(selectedWords);
            row.style.backgroundColor = 'white';
        } else {
            selectedWords.push(row.textContent);
            console.log(selectedWords);
            if (selectedWords.length === 4) {
                // call validation of game completion.
                checkIfWordsAreRelated(selectedWords)
            }
            row.style.backgroundColor = 'blue';
        }
    });
});

console.log(`Words are related: ${wordsAreRelated}`);
