const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let nameInput = readline.question('What is your name?\n')
let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
lost = 'You ran out of guesses!' // once you make variable for number of guesses put it in here.
leave = 'Aww man, that\'s too bad. Hope to see you soon!'
let randomWordArr = []
let charNumArr = []
let a = ''
let b = ''
let letterCheck = false


let stats = {
  guess : '',
  guessedLetterArr : [],
  numOfGuesses : randomWord.length
}



const startGame = () => {
if(readline.keyInYN(`Hello ${nameInput}, would you like to play SNOWMAN?`)){
  numOfChar();
}else{
  leaveGame(leave);
}
};

function leaveGame(leave, lost){
if(leave){
  console.log(leave);
  process.exit();
}else{
  console.log(lost)
  restartGame();
}
};

function numOfChar(){
for(let char of randomWord){
  randomWordArr.push(char)
  charNumArr.push('_')
} 
b = charNumArr.join(' ');
console.log(b)
console.log(`You have ${stats.numOfGuesses} guesses\n`)
};

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("\nPlease enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
} else {
      console.log("Please enter a valid letter")
    }
  }
  stats.guess = letter.toLowerCase() 
  return stats.guess
};


// use 1 var for numn of guesses 
// create a var to track if its the correct guess, initialize to false 
// think about changing the num of guesses outside for loop
// at end of gameloop, think about should game coninue, if yes call gameloop again , 
// OR create all code inside a while loop that checks condition , RUNS WHILE CONDIION IS TRUE 

function gameLoop(){
for(let i = 0; i < randomWordArr.length; i++){
    if(randomWordArr[i] === stats.guess){
      charNumArr[i] = stats.guess
      letterCheck = true
    }
    // else{
    //   letterCheck = false
    // }
}
if(letterCheck){
  stats.numOfGuesses++
  console.log('I\'m adding')
}else{
  // stats.numOfGuesses--
  console.log('I\'m Subtracting')
}
lettersGuessed();
b = charNumArr.join(' ');
console.log(b)
console.log(stats.numOfGuesses)
// console log number of guesses Remaining <---- Key word
c = charNumArr.join('')
if(randomWord !== c){
  getValidLetterGuess();
  gameLoop();
}else{
  wonGame()
}
};

function lettersGuessed(){
  if(stats.guess){
    stats.guessedLetterArr.push(stats.guess)
  }
    console.log(`\nGuessed Letters: ${stats.guessedLetterArr}\n`)   
  };

// function something(){
// if(letterCheck === false){
//   b = charNumArr.join(' ');
//   console.log(b)
//     stats.numOfGuesses--
//      console.log(`Guessed Letters: ${stats.guess}`)  
//     getValidLetterGuess()
//     gameLoop()
//   }else if(letterCheck === true){
//   b = charNumArr.join(' ');
//   console.log(b)
//     stats.numOfGuesses += 1
//     console.log(`Guessed Letters: ${stats.guess}`)  
//     getValidLetterGuess()
//     gameLoop()
//   }else{
//     b === randomWord
//     process.exit()
//   }
  
//   b = charNumArr.join(' ');
//   console.log(b)
// }
// c = charNumArr.join('')
// console.log(c)
//if user puts in correct letter numofguesses does not decrease 
// numofguesses decreases by 1
// b = charNumArr.join(' ');
// console.log(b)




function guessCount(){

 // numofguesses is the number of guesses ypu will get from the begining, it equals the length of the word
// each time the user iputs a letter numofguesses should start decreasing by 1
// if the user guesses the correct letter numofguesses does NOT decrease
 // the 
// if(stats.guess === )
// console.log(`You have ${stats.numOfGuesses} guesses remaining`)
}


function wonGame(){
  console.log('You\'re so smart! You won the game!')
  restartGame();
  }


//How do you clear terminal if the game restarts?
function restartGame(){
if(readline.keyInYN('Play Again?\n')){
  randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  numOfChar();
  getValidLetterGuess();
  gameLoop();
  }else{
    leaveGame(leave)
  }
};

startGame();
getValidLetterGuess();
gameLoop();
// guessCount();
// something()
// lettersGuessed();

