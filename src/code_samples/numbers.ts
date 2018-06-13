interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
    age: number;
}

// OK
let person1: Person;
person1 = {
    firstName: "John",
    // not an error, because middleName is optional
    lastName: "Doe",
    age: 42,
};

// Error
person1 = {
    firstName: "John",
    middleName: "V",
    lastName: "Doe",
    age: "42", // Error! wrong type
};

// Error
person1 = {
    firstName: "John",
    // Error! lastName is missing
    age: 42,
};

// name = {
//     // Error : `second` is missing
//     first: "John",
// };
// name = {
//     // Error : `second` is the wrong type
//     first: "John",
//     second: 1337,
// };
