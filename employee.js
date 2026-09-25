const practiceEmployees = [
    {
        id: 1,
        firstName: "Maya",
        lastName: "Rodriguez",
        weekOneHours: 40,
        weekTwoHours: 36,
        hourlyRate: 18.50
    },
    {
        id: 2,
        firstName: "Jordan",
        lastName: "Lee",
        weekOneHours: 32,
        weekTwoHours: 38,
        hourlyRate: 21.25
    },
    {
        id: 3,
        firstName: "Sofia",
        lastName: "Patel",
        weekOneHours: 40,
        weekTwoHours: 40,
        hourlyRate: 17.75
    },
    {
        id: 4,
        firstName: "Marcus",
        lastName: "Chen",
        weekOneHours: 25,
        weekTwoHours: 31,
        hourlyRate: 24.00
    },
    {
        id: 5,
        firstName: "Aaliyah",
        lastName: "Brooks",
        weekOneHours: 42,
        weekTwoHours: 39,
        hourlyRate: 19.50
    },
    {
        id: 6,
        firstName: "Noah",
        lastName: "Williams",
        weekOneHours: 37,
        weekTwoHours: 35,
        hourlyRate: 22.00
    }
];

function calculatePayroll(employees){
    let totalPayrollPayout = 0;

    for(let i = 0; i < employees.length; i++){
        const employee = employees[i];

        //week 1 pay
        const weekOnePay = employee.weekOneHours * employee.hourlyRate;

        //week 2 pay
        const weekTwoPay = employee.weekTwoHours * employee.hourlyRate;

        //gross earning
        const grossEarnings = weekOnePay + weekTwoPay;

        //deductions
        const stateTax = grossEarnings * 0.035;
        const federalTax = grossEarnings * 0.10;
        const socialSecurity = grossEarnings * 0.062;

        //total deductions
        const totalDetuctions = stateTax + federalTax + socialSecurity;

        //net pay
        const netPay = grossEarnings - totalDetuctions

        totalPayrollPayout += netPay;

        console.log(
            `${employee.lastName}, ${employee.firstName} | `+
            `Gross Earning: $${grossEarnings.toFixed(2)} | `+
            `Net Pay: $${netPay.toFixed(2)}`
        );
    }
    console.log("");

    console.log(`TOTAL PAYROLL PAYOUT: $${totalPayrollPayout.toFixed(2)}`);
}
calculatePayroll(practiceEmployees)