let employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

let list = employees.map((employeeName) => {
    return {
        name: employeeName,
        personalNum: employeeName.length
    };
});

list.forEach((employee) => {
    console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNum}`);
});