function bmiCalculator(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight/(height*height);
    document.getElementById("BMIresult").textContent= "Your BMI is " + bmi.toFixed(2);
}
