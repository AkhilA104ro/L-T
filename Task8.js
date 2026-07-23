// ===================================
console.log("Task 8");

// Add new patient
patients.push({
    id: 5,
    name: "Michael",
    age: 70,
    disease: "Heart Disease"
});

console.log("After Adding New Patient:");
console.log(patients);

let oldestPatient = patients[0];

for (let patient of patients) {
    if (patient.age > oldestPatient.age) {
        oldestPatient = patient;
    }
}

console.log("\nOldest Patient:");
console.log(oldestPatient);
console.log();


// ===================================
