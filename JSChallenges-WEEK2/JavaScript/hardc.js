var massTom = 3.63; // converted to kg
var heightTom = 0.22; // converted to m

var massJerry = 0.045;
var heightJerry = 0.1;

var BMItom = massTom / (heightTom * heightTom);
var BMIjerry = massJerry / (heightJerry * heightJerry);

var TomBMIhigher = BMItom > BMIjerry;

console.log("Is Tom's BMI higher than Jerry's? " + TomBMIhigher);