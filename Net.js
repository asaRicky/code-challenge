//Prompts an individual to input basic salary and benefits
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter the total amount of benefits received: "));
//calculates  basic salary and benefits recieved
const grossSalary =(basicSalary + benefits);
//calculates total deductions
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;
//calculates net salary
const netsalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;
//output of the results
console.log(`Gross salary: ${grossSalary.toFixed(2)}`);
console.log(`Tax deductions: ${taxDeduction.toFixed(2)}`);
console.log(`NHIF deductions: ${nhifDeduction.toFixed(2)}`);
console.log(`NSSF deductions: ${nssfDeduction.toFixed(2)}`);
console.log(`Net  salary: ${netsalary.toFixed(2)}`);
//Last input
console.log(netsalary);
NetDisplay.Innertext = `Your salary is ${netsalary}!`;
//Individual recieves Net Salary

