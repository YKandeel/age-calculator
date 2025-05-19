function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").innerText = "Please select a birthdate.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days and months if days are negative
    if (days < 0) {
        months--;
        // Get number of days in previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust years and months if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `Your age is ${years} year(s), ${months} month(s), and ${days} day(s).`;
}
