function firstRecurringChar(text: string): string {
    if(text === '') return '';
    const hashTables = {};
    for(let i = 0; i < text.length; i++) {
        if(!Object.keys(hashTables).includes(text[i])) {
            hashTables[text[i]] = 1;
        } else {
            hashTables[text[i]] += 1;
        }
    };

    for(let i = 0, tableValues = Object.values(hashTables); i < tableValues.length; i++) {
        if(tableValues[i] > 1 ) {
            return Object.keys(hashTables)[i];
        }
    }
    return text[0];
}

console.log(firstRecurringChar("ABCC"))
console.log(firstRecurringChar("DCABAD"))
console.log(firstRecurringChar("EBC"))
console.log(firstRecurringChar("F"))