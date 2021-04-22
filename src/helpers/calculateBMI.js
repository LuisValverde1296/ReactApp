
export const calculateBMI = async(height, weight) => {
    let bmi = (weight*1000/((height*height)/10));
    if(weight < 0 || height < 0){
        bmi = 0;
    } else if(!isFinite(bmi)){
        bmi = 0;
    }
    let status = '';
    if(bmi > 18.5 && bmi < 25){
        status = "Normal Weight";
    } else if(bmi >= 25){
        status = "Overweight";
    } else if(bmi < 18.5 && bmi > 0){
        status = "Underweight";
    } else{
        status = "invalid height or weight"
    }
    return {bmi, status};
}