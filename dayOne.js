// DAY 1
// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(sentences, wordOne) {
    let splitWords = sentences.split(' ');
    console.log(splitWords)

    let wordOneCount = 0;

    for (let i = 0; i<splitWords.length; i++) {
        if(splitWords[i] === wordOne) {
            wordOneCount = wordOneCount + 1;
        }
        return wordOneCount;
    }
}

console.log(countWords(paragraph, 'love'));


// console.log(countWords(paragraph,'love', 'you'));