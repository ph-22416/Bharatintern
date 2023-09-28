function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempValue").value);
    const tempUnit = document.getElementById("tempUnit").value;

    let convertedTemp;

    if (tempUnit === "celsius") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (tempValue * 9/5) + 32;
        document.getElementById("output").innerHTML = `${tempValue}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemp = (tempValue - 32) * 5/9;
        document.getElementById("output").innerHTML = `${tempValue}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }
}
