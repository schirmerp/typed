const textDisplay = document.getElementById('text')
const phrases = ['Look ma My JS is typing', 'I dont even have a package.json', 'so fuck all that nonsense']

let i = 0
let j = 0
let currentPhrase = []
let wholePhrase = []
let isDeleting = false
let isEnd = false

function newline() {
    isEnd = false
    textDisplay.innerHTML = wholePhrase.join("") + currentPhrase.join("")
    
    if (i < phrases.length) {
    
        
        if (j <= phrases[i].length){
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML =wholePhrase.join('') + currentPhrase.join("")
        }
        
      

        if (j == phrases[i].length){
            isEnd = true  
            j = 0
        }
        
        if(j === 0) {
            wholePhrase.push(currentPhrase.join(""))
            wholePhrase.push('<br />')
            currentPhrase = []
            
            isDeleting = false
            i++
            if(i=== phrases.length){
                i= 0
            }
        }
        
    }   
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : normalSpeed
    setTimeout(newline, time)
}

newline()