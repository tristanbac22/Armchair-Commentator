// Array of comments made watching a match
const armchairComments = [
    'That\'s a soft call.', 'Keep it up.',
    'I could do that in my sleep.', 'I could do better than that.',  
    'That\'s what I want to see.', 'Book an appointment to the optometrist.',
    'Bet he misses.', 'Don\'t blow it.', 'Lucky bounce.', 'Pack it up.',
    'They threw in the towel.', 'They are phoning it in.', 'That looks like it\'d hurt', 
    'They are earning their salary.', 'That\'s a good start.', 'They still got time.'
];

const armchairExclaims = [ 'He is wide open!!!',
    'WOOO-HOOO!', 'YES!', 'OOOOOHHH', 'What a beauty!', 'NOOOOOO!!!', 'HUSTLE!!!', 'Come on!',
    'What a save!', 'Ouch!', 'Seriously!!', 'There we go!', 'That\"s what I am talking about',
    'SHOOOTTT!!', 'THANK YOU!!!'
];

const armchairRhetoricals = ['Where was that going?', 'How did the ref not see that?', 
    'How could they miss?!!', 'Are they blind?!', 'Why are the bounces not going our way?',
    'Why would you do that?', 'What is the coach thinking?!!'
];



/*console.log(armchairComments[0]);
console.log(armchairExclaims[0]);
console.log(armchairRhetoricals[0]);*/

/**
 * Function that takes in an array and selects a value at a random index to return;
 */
const randIndex = (inArr) => {
    let index = Math.floor(Math.random() * inArr.length); 
    return inArr[index];
}

/*console.log(randIndex(armchairComments));
console.log(randIndex(armchairExclaims));
console.log(randIndex(armchairRhetoricals));*/

// array that will be randomly queried to determine the message structure
const msgStructure = ['comment', 'exclaim', 'rhetorical'];

//function that sets up the structure and prints message
const formCommentary = () => {
    let resultCommentary = '';
    for(let i = 0; i < 3; i++){
        let msgType = randIndex(msgStructure);
        switch (msgType){
            case 'comment':
                resultCommentary += (randIndex(armchairComments) + ' ');
                break;
            case 'exclaim':
                resultCommentary += (randIndex(armchairExclaims) + ' ');
                break;
            case 'rhetorical':
                resultCommentary += (randIndex(armchairRhetoricals) + ' ');
                break;
        };
        //console.log(resultCommentary);
    }
    return resultCommentary;
}

console.log(formCommentary());


