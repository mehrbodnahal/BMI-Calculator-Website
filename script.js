/**
 * Function: calculateBMI
 * Description: Calculates BMI based on user-entered height and weight,
 *              then displays the result and interpretation.
 */
function calculateBMI() {
    // Retrieve user-entered height and weight from the input fields
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Check if the entered values are valid
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight.";
        return;
    }

    // Calculate BMI and round it to two decimal places
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    // Generate result text and display it
    var resultText = "Your BMI is: " + bmi + "<br>";
    resultText += interpretBMI(bmi);
    document.getElementById('result').innerHTML = resultText;
}

/**
 * Function: interpretBMI
 * Description: Interprets the BMI value and returns the corresponding category.
 * @param {number} bmi - The calculated BMI value
 * @returns {string} - The interpretation of BMI as a category (Underweight, Normal weight, Overweight, or Obese)
 */
function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

