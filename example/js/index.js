let myName = 'Christoffer';
const age = 33;

console.log(myName);

myName = 'Alice';

console.log(myName);

//age = 10; // Ger JS - fel då vi försöker ändra värdet på en konstant

if (myName == 'Alice') { // == är jämförelse
    console.log('Hej Alice');
} else {
    console.log('Du är inte Alice');
}

if (age > 35) {
    console.log('Ung i hjärtat');
} else if (age > 30 && age < 35) {
    console.log('Precis rätt');
}