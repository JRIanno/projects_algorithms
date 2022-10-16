
// removing the spaces
var a = (" Pl ayTha tF u nkyM usi c ");
    let spaces = a.split(' ').join('');
    console.log(spaces)


// getting the digits
var getDigits = ("abc8c0d1ngd0j0!8")
const replaced = getDigits.replace(/\D/g, '');
console.log(replaced);

let num;
if(replaced !== ''){
    num = Number(replaced);
}
console.log(num)


// Acronyms
function acronym(letters){
    letters = letters.trim();
    const length = letters.length;
    let abbr = letters[0];

    for(let i = 1; i < length; i++){
        if(letters[i-1] === ' ' && letters[i] !== ' '){
            abbr += letters[i];
        }
    }
    return abbr;
    }
    console.log(acronym("Live from New York, it's Saturday Night!"));

// count non-space
var string = ("Honey pie, you are driving me crazy");
    let non = string.split(' ').join('');
    let count = non.length;
    console.log(count)

// remove short strings
var short = ('can you hear the rain on the roof of the house in the city');
var word = short.split(' ');
    var point = [];
    for(var i = 0; i < word.length; i++){
        if(word[i].length > 3) {
            point.push(word[i]);
        }
    }
    var next = point.join(' ');
    console.log(next)