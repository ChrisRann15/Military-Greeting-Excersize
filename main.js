const name = 'Chris';

const rank = 'Commander';

const age = 19;


if(age < 18) {
    console.log('Sorry, you are too young for the military.');
} else if(name === 'Rugen' && rank === 'Count') {
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.');
} else if(rank === 'Capitan') {
    console.log(`Aye Aye Capitan ${name}!`);
} else if(rank === 'Private' && age > 40) {
    console.log(`What in the world have you been doing with you life ${name}?!`);
} else {
    console.log(`Hello ${rank} ${name}! I cannot wait to celebrate your ${age + 1}th birthday next year!`);
}
