export const reverseString = (word: string): string => {
    if(word === '') 
        return word;
    else
        return [...word].reduce((previous, current) => current + previous);
}