// Create the submitt button

document.querySelector('button').addEventListener("click", Operate)
// create the fucntion thats going to find answers and take the value of it
function Operate(event){
    event.preventDefault()
    let wuWeapon = document.querySelector(".WepQuestion:checked").value;
    let wuCity = document.querySelector(".CityQuestion:checked").value;
    let wuMoney = document.querySelector(".MoneyQuestion:checked").value;
    let wuWould = document.querySelector(".WouldQuestion:checked").value;
    let wuBat = document.querySelector(".BatQuestion:checked").value;
// in order to store the values into the different simulations i  create an object and constructor.
    class Choice {
        constructor(weapon, city, money, would, bat){
            this.weapon = parseInt(weapon),
            this.city = parseInt(city),
            this.money = parseInt(money),
            this.would = parseInt(would),
            this.bat = parseInt(bat)
        }
    }
    

    let wuname = new Choice(wuWeapon, wuCity, wuMoney, wuWould, wuBat);
// The values of each answer have to calculated to create a unique name each time
let total = 0

Object.values(wuname).forEach( num => {
    total = total+num;
})

document.querySelector("h3").innerText=GiveName(total)
}


function GiveName(total){
    if(total === 5){
        return("CRZY WOrrd")
    } 
    console.log(total)
    // else if(total == 6){
    //     return "ha"
    // }else if(total == 7){
    //     return "maybe"
    // }else if(total == 8){
    //     return "close"
    // }else if(total == 9){
    //     return "next"
    // }else if(total == 10){
    //     return "HIM"
    // }
}


