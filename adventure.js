//importing the prompt module
const prompt = require('prompt-sync')()

//asking the player if they would like to play
const answer = prompt('Would you like to play (y/n)? ')

//if the answer is yes
//then ask the player if they would like to go left or right
if (answer.toLowerCase() === 'y') {
	const answer2 = prompt(
		'Would you like to go left or go right (left/right)? '
	)

	//if the answer is left
	if (answer2 === 'left') {
		console.log('Oops, you go left and fall of a bridge! You lost!')

		//if the answer is right
	} else {
		//right
		console.log('Nice! you go right and approach a birdge...')
		const answer3 = prompt(
			'Would you like to cross the bridge, or turn around and find another way (cross/turn)? '
		)

		//if the answer is cross then we move to the end of the game

		if (answer3 === 'cross') {
			console.log('You crossed the bridge and reach the end of the game!')

			//if the answer is turn then we move back
		} else {
			console.log(
				'You turn back and trip on a log and hurt your leg. you lose'
			)
		}
	}

	//if the answer is no then we move to the end of the game
} else {
	console.log("That's too bad!")
}
