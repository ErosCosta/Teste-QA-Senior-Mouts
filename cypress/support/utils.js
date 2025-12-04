


export function generateRandomEmail(prefix = 'teste') {
    const timestamp = new Date().getTime();
    return `${prefix}${timestamp}@qa.com.br`;
}


export function generateRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fiona', 'George', 'Hannah'];
    const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    return `${randomName} ${randomSurname}`;
}