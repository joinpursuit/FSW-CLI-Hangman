const readline = require('readline-sync');
const chalk = require('chalk');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let stats = {
  nameInput : readline.question(chalk.green('What is your name?\n')),
  guess : '',
  guessedLetterArr : [],
  randomWordArr : [],
  charNumArr : [],
  randomword : '',
  numOfGuesses : 0
}

const startGame = () => {
stats.randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
stats.numOfGuesses = stats.randomWord.length
let leave = chalk.magenta(`Aww man, that\'s too bad. Hope to see you soon ${stats.nameInput}!`)
if(readline.keyInYN(chalk.green(`\nHello ${stats.nameInput}, would you like to play SNOWMAN?`))){
  console.clear()
  numOfChar();
}else{
  leaveGame(leave);
}
};

function leaveGame(leave){
leave = `\nAww man, that\'s too bad. Hope to see you soon ${stats.nameInput}!`
if(leave){
  console.log(chalk.magenta(leave));
  process.exit();
}
};

function numOfChar(){
for(let char of stats.randomWord){
  stats.randomWordArr.push(char)
  stats.charNumArr.push('_')
} 
let b = stats.charNumArr.join(' ');
console.log(chalk.bold.cyan(b))
console.log(chalk.yellow(`You have ${stats.numOfGuesses} guesses.\n`))
};

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question(chalk.cyan("\nPlease enter your guess: "))
    if (guessIsValid(input)) {
      letter = input
} else {
      console.log(chalk.italic.red("\nPlease enter a valid letter"))
    }
  }
  stats.guess = letter.toLowerCase() 
  return stats.guess
};

function gameLoop(){
getValidLetterGuess()
for(let i = 0; i < stats.randomWordArr.length; i++){
    if(stats.randomWordArr[i] === stats.guess){
      stats.charNumArr[i] = stats.guess
    }
}
guessCount();
let a = stats.charNumArr.join('')
if(stats.randomWord !== a && stats.numOfGuesses !== 0){
  gameLoop();
}else if(stats.numOfGuesses === 0){
  lostGame();
}else{
  wonGame();
}
};

function guessCount(){
if(!stats.randomWordArr.includes(stats.guess)){
  stats.numOfGuesses--
}
console.clear()
b = stats.charNumArr.join(' ');
console.log(chalk.bold.cyan(b))
if(stats.numOfGuesses === 1){
  console.log(chalk.yellow('You have ' + stats.numOfGuesses + ' guess remaining.'))
}else{
  console.log(chalk.yellow('You have ' + stats.numOfGuesses + ' guesses remaining.'))
}
lettersGuessed();
}

function lettersGuessed(){
  if(stats.guess){
    if(stats.guessedLetterArr.includes(stats.guess)){
      console.log(chalk.italic.red(`You already guessed the letter: ${stats.guess}`))
    }else{
      stats.guessedLetterArr.push(stats.guess)
    }
  }
  if(stats.guessedLetterArr.length > 1){
    console.log(chalk.green(`\nGuessed Letters: ${stats.guessedLetterArr}\n`))
  }else{
    console.log(chalk.green(`\nGuessed Letter: ${stats.guessedLetterArr}\n`))
  }   
  };


function wonGame(){
console.log(chalk.bold.yellow('You\'re so smart ' + stats.nameInput +  ',' + ' it took you ' + stats.guessedLetterArr.length + ' guesses to guess the correct word!'))
};

function lostGame(lost){
lost = chalk.italic.red(`Sorry ${stats.nameInput}, you ran out of guesses!`)
  console.log(lost)
  console.log(chalk.italic.red(`\nThe word was: ${stats.randomWord}`))
  restartGame();
};

function restartGame(){
  if(readline.keyInYN(chalk.green.italic('Play Again?\n'))){
    console.clear()
  stats = {
    nameInput : readline.question(chalk.green('What is your name?\n')),
    guess : '',
    guessedLetterArr : [],
    randomWordArr : [],
    charNumArr : [],
    randomword : '',
    numOfGuesses : 0
  }
startGame();
gameLoop();
}else{
  leave = `\nAww man, that\'s too bad. Hope to see you soon ${stats.nameInput}!`
  leaveGame(leave)
}
};

startGame();
gameLoop();
