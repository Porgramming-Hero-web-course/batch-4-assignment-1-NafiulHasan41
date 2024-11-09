{
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). 
    // The function should return the number of times the word appears in the sentence, ignoring case. Use the simple
    //  sentence without punctuation as input.

    const countWordOccurrences = ( sentence: string, word: string) : number => {
        const words = sentence.toLowerCase().split(' ').filter((w)=> w=== word).length;
        //  here is a flaw in this code that here can be a word that has . or any other symbol attached to it.
        // as it is not mentioned in the question I did not think about it but I know if I use regex I can solve the problem.
        // console.log(words);
        return words;

    }

    console.log(countWordOccurrences('The the the the quick brown fox jumps over the lazy dog', 'the'));
    console.log(countWordOccurrences("I love typescript", "typescript"));



}