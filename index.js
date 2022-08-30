const characters =["C","A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
var firstPassword= document.getElementById("first-password")
var secondPassword= document.getElementById("second-password")

    
function add(){
    firstPassword.textContent= getMultipleRandom(characters, 15);
    secondPassword.textContent= getMultipleRandom(characters, 15);
}
  
  

function getMultipleRandom(characters, num) {
    let num = 0.5 - Math.random()
   const shuffled = [...characters].sort(() => num);
   console.log(shuffled.slice(0, num))
  return shuffled.slice(0, num);
 }
