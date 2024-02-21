// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
    const charsOccurence = {};
    // iterate over each character, initialize it as a key in charsOccurence
    for (const c of str) {
        if (!charsOccurence[c]) {
            charsOccurence[c] = 0;
        }
        charsOccurence[c] += 1
    }

    let maxValueChar = null;
    let count = null
    for (const key in charsOccurence) {
        if (!maxValueChar) {
            maxValueChar = key;
            count = charsOccurence[key];
        }
        else if (charsOccurence[key] > count) {
            maxValueChar = key;
            count = charsOccurence[key];
        }
    }

    return maxValueChar;
};
