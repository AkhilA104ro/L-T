// ===================================
let patients = [
    { id: 1, name: "John", age: 45, disease: "Fever" },
    { id: 2, name: "Alice", age: 30, disease: "Cold" },
    { id: 3, name: "David", age: 65, disease: "Diabetes" },
    { id: 4, name: "Emma", age: 25, disease: "Asthma" }
];

console.log("Task 6");
for (let patient of patients) {
    console.log(
        "ID:", patient.id,
        "| Name:", patient.name,
        "| Age:", patient.age,
        "| Disease:", patient.disease
    );
}
console.log();


// ===================================
