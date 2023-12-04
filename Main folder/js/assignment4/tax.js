let calculateTax = (income) => {
    let tax = 0;

    if (income <= 300000) {
        console.log(`Your income is ${income}. Therefore, you do not have to pay any tax.`);
    } else if (income > 300000 && income <= 600000) {
        tax = (income + 0) * 0.05;
        console.log(`Your income is ${income}. You have to pay Rs${tax} of tax.`);
    } else if (income > 600000 && income <= 900000) {
        tax = (income + 15000) * 0.10;
        console.log(`Your income is ${income}. You have to pay Rs${tax} of tax.`);
    } else if (income > 900000 && income <= 1200000) {
        tax =  (income + 45000) * 0.15;
        console.log(`Your income is ${income}. You have to pay Rs${tax} of tax.`);
    } else if (income > 1200000 && income <= 1500000) {
        tax =  (income + 105000) * 0.20;
        console.log(`Your income is ${income}. You have to pay Rs${tax} of tax.`);
    } else {
        tax =  (income + 205000) * 0.30;
        console.log(`Your income is ${income}. You have to pay Rs${tax} of tax.`);
    }
}

calculateTax(100000);
calculateTax(351000);
calculateTax(701000);
calculateTax(1100000);
calculateTax(1300000);
calculateTax(2001000);
