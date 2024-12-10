const name1 = document.getElementById("player1");
const name2 = document.getElementById("player2");
const button = document.getElementById("startButthon");
const display = document.getElementById("display");

button.addEventListener('click', ()=>{
    const playerName1=name1.value;
    const playerName2=name2.value;

    display.textContent=`PlayerName1 :- ${playerName1}, PlayerName2 :- ${playerName2} ` ;

    name1.style.display="none";
    name2.style.display="none";
    button.style.display="none";

    fetch('https://the-trivia-api.com/v2/questions?limit=50') 
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
            data.forEach(function(categoryList, index){
                display.innerHTML+=`<ul>${index+1}. ${categoryList.category}</ul>`
            })
        })
        .catch(error =>{
            console.log("Error fetching data:", error)
        })
        
})
    
    
