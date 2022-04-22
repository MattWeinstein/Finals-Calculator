/*document.querySelector('button').addEventListener('click',runDisneyAPI)
function runDisneyAPI(){
    
    let url = `https://api.disneyapi.dev/characters`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
*/

// 88 in class, 25% above a 78

document.querySelector('button').addEventListener('click',runDisneyAPI)

function runDisneyAPI(){
//Setting variables
let location =  document.querySelector('h2')
let startingGrade = document.getElementById('currentGrade').value
let testWeight = document.getElementById('testWorth').value
let goal = document.getElementById('goalGrade').value

//Calculating grade
let num = goal-((1-(testWeight/100))*startingGrade)
let denom = testWeight
let answer =100*(num/denom)
console.log(typeof answer)
//DOM Manipulation
if(answer>1 && answer<100){
insertNumber() 
} else if(answer>100){
  location.style.color='red'
  location.innerHTML = (`You need a ${answer} on the final. You may be screwed`)
} else {
  alert('All fields should be filled with numbers between 1 and 100')
}


function insertNumber(){
location.innerHTML = `You need a ${answer}% on the final.`
  if(answer<65){
    location.style.color='green'
}else if(answer>85){
  location.style.color='red'
}
}

}
