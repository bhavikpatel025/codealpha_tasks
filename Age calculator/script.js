document.getElementById("calculateButton").addEventListener("click", function () {
    const dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob)) {
        document.getElementById("result").textContent = "Please select a valid date.";
        document.getElementById("result").classList.add("text-danger");
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`;
    document.getElementById("result").classList.remove("text-danger");
    document.getElementById("result").classList.add("text-success");
});
