export const ceaserCipher = (message: string, shiftNum: number): string => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let returnMesssage = '';
    [...message].forEach((character) => {
        if(alphabet.includes(character))
            returnMesssage += alphabet.at((alphabet.indexOf(character) + shiftNum) % 26);
        else
            returnMesssage += character;
    });
    return returnMesssage;
};
