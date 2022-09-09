const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordViewerOne = document.getElementById("password-view-one")
let passwordViewerTwo = document.getElementById("password-view-two")
function randomCharacter(){
    let randomIndex = Math.floor(Math.random()* characters.length)
    return randomIndex  
}
function passwordGenerator(){
    let randomPassword = ""
    for (let i = 0; i < 12; i++) {
        randomPassword += characters[randomCharacter()]
    }
    return randomPassword
}

function buttonClick(){
    passwordViewerOne.textContent = passwordGenerator()
    passwordViewerTwo.textContent = passwordGenerator()
}



// TODO
//Add copy-to-click option
//ability to set the password lenght