const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];
const femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afia", "Ama"
];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

class MyInfo {
    constructor(birthDate,gender) {
        let myDate = birthDate;
        let myGender = gender;

        this.getAkanName =  () => {
            const d = new Date(myDate);
            let day = d.getDay();

            if (myGender == "male"){
                let dayName = days[day];
                let myAkanName = maleNames[day];

                console.log(myAkanName)
                return `You were born on a ${dayName}: your Akan name is ${myAkanName}`;

            }
            else if (myGender == "female"){
                let dayName = days[day];
                let myAkanName = femaleNames[day];

                console.log(myAkanName)
                return `You were born on a ${dayName}: your Akan name is ${myAkanName}`;
            }
            else {
                alert("You entered an invalid month or day");
            }
        }
    }
}


function generateAkana(){
    event.preventDefault();

    const birthDate = document.getElementById("birthDate").value;

    let genders = document.getElementsByName("gender");

    let genderValue;

    genders.forEach(gender => {
        if (gender.checked){
            genderValue = gender.value;
        }
    });
    let myAkan = new MyInfo(birthDate,genderValue);
    document.getElementById('generatedName').textContent = myAkan.getAkanName();
}


module.exports = MyInfo;