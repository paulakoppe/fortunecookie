const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const startFC = document.querySelector("#startFC")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
"Delight the world with compassion, kindness and grace",
"The early bird gets the worm, but the second mouse gets the cheese",
"Some days you are pigeon, some days you are statue. Today, bring umbrella",
"The fortune you seek is in another cookie",
"Be on the alert to recognize your prime at whatever time of your life it may occur",
"Your reality check about to bounce",
"Tension is who you think you should be. Relaxation is who you are",
"When blind leading the blind……..get out of the way",
"Everyone seems normal until you get to know them",
"Only difference between rut and a grave is depth",
"Experience is what you have left when everything else gone",
"A closed mouth gathers no feet",
"A conclusion is simply the place where you got tired of thinking",
"A cynic is only a frustrated optimist",
"A foolish man listens to his heart. A wise man listens to cookies",
"Your road to glory will be rocky but fulfilling",
"Courage is not simply one of the virtues, but the form of every virtue at the testing point",
"Patience is your alley at the moment. Dont worry!",
"Nothing is impossible to a willing heart",
"Dont worry about money. The best things in life are free",
"Dont pursue happiness – create it",
"If at first you dont succeed, skydiving not for you",
"Ninety-nine percent of all lawyers give the rest a bad name",
"Easiest way to find lost object is buy replacement",
"Smart husband buys wife fine china. Then she not trust him to wash it",
"Inside every old person is young person wondering what the hell happened",
"When chosen for jury duty, tell judge “fortune cookie say guilty!",
"Stop eating now. Food poisoning no fun",
"You are cleverly disguised as responsible adult",
"Tomorrow at breakfast, listen carefully: do what rice krispies tell you to",
"Drive like hell, you will get there",
"Hard work pays off in the future. Laziness pays off now",
"You think its a secret, but they know",
"If a turtle doesnt have a shell, is it naked or homeless?",
"Change is inevitable, except for vending machines",
"Dont eat the paper",
"You will die alone and poorly dressed",
"A fanatic is one who can’t change his mind and won’t change the subject",
"If you look back, you’ll soon be going that way",
"You will live long enough to open many fortune cookies",
"An alien of some sort will be appearing to you shortly",
"Courage is not the absence of fear; it is the conquest of it",
"Nothing is so much to be feared as fear",
"All things are difficult before they are easy",
"The real kindness comes from within you",
"A ship in harbor is safe, but that’s not why ships are built",
"Person who eat fortune cookie get lousy dessert",
"Okay to look at past and future. Just don’t stare",
"Wise person needs either good manners or fast reflexes",
"Soup was secret family recipe made from toad. Hope you liked!",
"You will soon have an out of money experience",
"One tequila, two tequila, three tequila, floor",
"The older you get, the better you were",
"Age is high price to pay for maturity",
"Procrastination is art of keeping up with yesterday",
"A fool and his money are soon partying",
"Do not mistake temptation for opportunity",
"Flattery will go far tonight",
"He who laughs at himself never runs out of things to laugh at",
]

startFC.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screenTwo.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screenOne.classList.contains('hide')){
        handleResetClick()
        }

        
    }
)

function handleTryClick(event) {
    toggleScreen()
    pickFortune()    
}

function handleResetClick() {
toggleScreen()
}


function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screenTwo.querySelector("h2").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    screenTwo.classList.toggle("hide")
    screenOne.classList.toggle("hide")
}