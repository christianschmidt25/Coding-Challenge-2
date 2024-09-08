// Task 1: Calculate the Tip

let x = 200.00; //bill amount (x) is $100
let tip = (50 <= x <= 300) ? x*0.15 : x*0.20;

// tip will be multiplied by 0.15 IF bill is in between 50 and 300, otherwise it will be multiplied by 0.20.


// Task 2: Output Details

let totalbill = x + tip;
console.log(`Thank you for eating here. Your bill was $${x}, your tip was $${tip}, and your total bill was $${totalbill}`);

//The console log will output the correct numbers since it is not in quotations.


// Task 3: Create a Function (calculateTip)

function calculateTip(testBill, tip) {
    return (tip)
};

let testBill = 100;
console.log("Tip amount when the bill is $100 is", calculateTip(100,15));

//will return the tip amount (calculated by ternary operator in step 1) when this test bill is $100.