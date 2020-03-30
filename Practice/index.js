var myPod = ['Alan', 'Ana', 'Adrian', 'Zell', 'Caleb'];

// console.log('Adrianna has ' + myPod.length + ' people in her pod.');

// if (myPod.indexOf('Lucy') != -1) {
//     console.log('Lucy is my pod leader');
// } else {
//     console.log('Lucy is NOT my pod leader.');
// }

myPod.push('Tori');
console.log(myPod);

if (myPod.indexOf('Tori') != -1) {
    myPod.pop('Tori');
    console.log('Tori was present and then we removed her from the pod.');
} else {
    console.log('R2H pods rock!');
}

console.log(myPod);