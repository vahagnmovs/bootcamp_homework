const employees = [
    {
        "firstName": "Arabela",
        "lastName": "Fockes",
        "email": "afockes0@wired.com",
        "salary": "$6.18",
        "isEngineer": true,
        "gender": "Female"
    },
    {
        "firstName": "Bryant",
        "lastName": "Marchi",
        "email": "bmarchi1@theatlantic.com",
        "salary": "$8.05",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Batholomew",
        "lastName": "Eim",
        "email": "beim2@goodreads.com",
        "salary": "$7.26",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Ritchie",
        "lastName": "Ferreira",
        "email": "rferreira3@booking.com",
        "salary": "$4.07",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Kaylyn",
        "lastName": "Ivain",
        "email": "kivain4@gmpg.org",
        "salary": "$5.89",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Wilhelmina",
        "lastName": "Portigall",
        "email": "wportigall5@plala.or.jp",
        "salary": "$2.06",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Rouvin",
        "lastName": "Gillcrist",
        "email": "rgillcrist6@aol.com",
        "salary": "$7.29",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Flemming",
        "lastName": "Scroggins",
        "email": "fscroggins7@msu.edu",
        "salary": "$7.54",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Sallee",
        "lastName": "Schlagh",
        "email": "sschlagh8@reuters.com",
        "salary": "$2.24",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Roxine",
        "lastName": "Bedo",
        "email": "rbedo9@whitehouse.gov",
        "salary": "$6.47",
        "isEngineer": false,
        "gender": "Female"
    }
]

// TASK 2
// Create a function that is receiving a collection of employees and using toString() returns a
// string with comma-separated
// `email: salary` with the following format
// hloyley5@uol.com.br: $1368.00, ldoige2@mashable.com: $1873.56

// function transferSalaryWithComma(array) {
//     let obj = {};
//     let string = '';
//     for (let idx = 0; idx < array.length; idx++) {
//         if (idx === array.length - 1) {
//             obj[array[idx].email] = array[idx].salary
//             string += `${Object.keys(obj)}: ${Object.values(obj)}`
//             obj = {};
//         } else {
//             obj[array[idx].email] = array[idx].salary
//             string += `${Object.keys(obj)}: ${Object.values(obj)}, `
//             obj = {};
//         }
//     }
//     return string;
// }
//
// console.log(transferSalaryWithComma(employees))

Object.prototype.toString = function () {
    return `${this.email}: ${this.salary}`;
}