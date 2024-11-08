/* Movies */
let foods = [
    'Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Salad', 'Ice Cream', 'Donuts', 'Steak', 'Burrito',
    'Curry', 'Soup', 'Fries', 'Sandwich', 'Hot Dog', 'Chocolate', 'Cheese', 'Croissant', 'Pancakes', 'Waffles',
    'Muffins', 'Cupcakes', 'Rice', 'Chicken', 'Fish', 'Shrimp', 'Pork', 'Spaghetti', 'Lasagna', 'Omelette',
    'Bread', 'Tofu', 'Ramen', 'Pho', 'Dumplings', 'Bagels', 'Falafel', 'Hummus', 'Kebab', 'Gyro',
    'Sashimi', 'Nigiri', 'Clam Chowder', 'Lobster Roll', 'Caesar Salad', 'Mac and Cheese', 'Grilled Cheese',
    'BBQ Ribs', 'Fried Chicken', 'Meatloaf', 'Stuffed Peppers', 'Tater Tots', 'Mozzarella Sticks', 'Buffalo Wings',
    'Quesadilla', 'Nachos', 'Guacamole', 'Brisket', 'Pulled Pork', 'Tuna Salad', 'Cobb Salad', 'Chili', 'Cornbread',
    'Potato Salad', 'Coleslaw', 'Pasta Salad', 'Jambalaya', 'Gumbo', 'Fajitas', 'Enchiladas', 'Tamales', 'Pozole',
    'Samosa', 'Chicken Tikka Masala', 'Gnocchi', 'Risotto', 'Quiche', 'Crepes', 'Pad Thai', 'Green Curry', 'Spring Rolls',
    'Egg Rolls', 'Tempura', 'Edamame', 'Fried Rice', 'Chow Mein', 'Lo Mein', 'Banh Mi', 'Pho', 'Roti', 'Empanadas',
    'Arroz Con Pollo', 'Paella', 'Churros', 'Tostones', 'Arepas', 'Shawarma', 'Baklava', 'Tabbouleh', 'Pita', 'Focaccia',
    'Pretzel', 'Pierogi', 'Beef Stroganoff', 'Schnitzel', 'Borscht', 'Dim Sum', 'Bao Buns', 'Chashu Pork', 'Kimchi',
    'Bibimbap', 'Bulgogi', 'Kimbap', 'Yakitori', 'Miso Soup', 'Chicken Parmesan', 'Eggplant Parmesan', 'Caprese Salad',
    'Prosciutto', 'Bruschetta', 'Tiramisu', 'Gelato', 'Cannoli', 'Lamb Chops', 'Crab Cakes', 'Shrimp Scampi', 'Oysters',
    'Mussels', 'Poutine', 'Bangers and Mash', 'Fish and Chips', 'Shepherd’s Pie', 'Scotch Eggs', 'Pavlova', 'Lamingtons',
    'Veggie Burger', 'Salmon Burger', 'Beyond Burger', 'Impossible Burger', 'Fried Calamari', 'Chicken Satay', 'Pork Belly',
    'Roast Beef', 'BBQ Brisket', 'Deviled Eggs', 'Antipasto', 'Escargot', 'Fondue', 'Smoked Salmon', 'Biscuits and Gravy',
    'French Toast', 'Huevos Rancheros', 'Avocado Toast', 'Bagel with Lox', 'New York Cheesecake', 'Banana Bread', 'Brownies',
    'Apple Pie', 'Key Lime Pie', 'Pumpkin Pie', 'Pecan Pie', 'Tartine', 'Popcorn', 'Chips', 'Beef Jerky', 'Trail Mix',
    'Protein Bar', 'Granola', 'Smoothie', 'Milkshake', 'Iced Coffee', 'Latte', 'Espresso', 'Mocha', 'Frappuccino',
    'Cappuccino', 'Bubble Tea', 'Green Tea', 'Kombucha', 'Lemonade', 'Iced Tea', 'Root Beer Float', 'Coleslaw', 'Funnel Cake',
    'Street Pretzel', 'Knish', 'Latkes', 'Rugelach', 'Matzo Ball Soup', 'Schnitzel', 'Corn Dog', 'Chicken and Waffles',
    'Beignets', 'Po’ Boy Sandwich', 'Gravy Fries', 'Muffuletta', 'Italian Beef', 'Hot Pastrami Sandwich', 'Cheesesteak',
    'Chicago Deep Dish', 'Milkshake', 'Soft Serve', 'Cannoli', 'Black and White Cookie', 'Cuban Sandwich', 'Egg Cream',
    'Honeycrisp Apple', 'Poutine'
];
/* Game */

const youWon = "You Won!";
const youLost = "You Lost!";

function Game()
{
	let word = foods[Math.floor(Math.random()*foods.length)];
	word = word.toUpperCase();
	let guessedLetters = [];
	let maskedWord = "";
	let incorrectGuesses = 0;
	let possibleGuesses = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let won = false;
	let lost = false;
	const maxGuesses = 7;

	for ( let i = 0; i < word.length; i++ ) 
	{
		let space = " ";
		let nextCharacter = word.charAt(i) === space ? space : "_";
		maskedWord += nextCharacter;
	}

	let guessWord = function( guessedWord )
	{
		guessedWord = guessedWord.toUpperCase();
		if( guessedWord === word )
		{
			guessAllLetters();
		}
		else
		{
			handleIncorrectGuess();
		}
	}

	let guessAllLetters = function()
	{
		for ( let i = 0; i < word.length; i++ ) 
		{
			guess( word.charAt( i ) );
		}
	}

	let guess = function( letter ) 
	{
		letter = letter.toUpperCase();
		if( !guessedLetters.includes( letter ))
		{	
			guessedLetters.push(letter);
			possibleGuesses = possibleGuesses.replace(letter,"");
			if( word.includes( letter ) )
			{
				let matchingIndexes = [];
				for ( let i = 0; i < word.length; i++ ) 
				{
					if( word.charAt(i) === letter )
					{
						matchingIndexes.push( i );
					}
				}

				matchingIndexes.forEach( function(index) {
					maskedWord = replace( maskedWord, index, letter );
				});	

				if( !lost )
				{
					won = maskedWord === word;	
				}		
			}
			else
			{
				handleIncorrectGuess();
			}
		}
	}

	let handleIncorrectGuess = function()
	{
		incorrectGuesses++;
		lost = incorrectGuesses >= maxGuesses;
		if( lost )
		{
			guessAllLetters();
		}
	}

	return {
		"getWord": function(){ return word; },
		"getMaskedWord": function(){ return maskedWord; },
		"guess": guess,
		"getPossibleGuesses": function(){ return [... possibleGuesses]; },
		"getIncorrectGuesses": function(){ return incorrectGuesses; },
		"guessWord": guessWord,
		"isWon": function(){ return won; },
		"isLost": function(){ return lost; },
	};
}

function replace( value, index, replacement ) 
{
    return value.substr(0, index) + replacement + value.substr(index + replacement.length);
}

function listenForInput( game ) 
{
	let guessLetter = function( letter )
	{
		if( letter )
		{
			let gameStillGoing = !game.isWon() && 
								 !game.isLost();
			if( gameStillGoing )
			{
				game.guess( letter );
				render( game );
			}
		}
	};

	let handleClick = function( event )
	{
	    if (event.target.classList.contains('guess') )
	    {
	    	guessLetter( event.target.innerHTML );
	    }
	}

	let handleKeyPress = function( event )
	{
		let letter = null;
		const A = 65;
		const Z = 90;
		const ENTER = 13;
		let isLetter = event.keyCode >= A && event.keyCode <= Z;
		let guessWordButton = document.getElementById("guessWordButton");
		let newGameButton = document.getElementById("newGameButton");
		let guessBox = document.getElementById("guessBox");
		let gameOver = guessBox.value === youWon || guessBox.value === youLost;

		if( event.target.id !== "guessBox" && isLetter )
		{
			letter = String.fromCharCode( event.keyCode );
		}
		else if( event.keyCode === ENTER && gameOver )
		{
			newGameButton.click();
		}
		else if( event.keyCode === ENTER && guessBox.value !== "" )
		{
			guessWordButton.click();
		}
		guessLetter( letter );
	}

	document.addEventListener('keydown', handleKeyPress );
	document.body.addEventListener('click', handleClick );
}

function guessWord( game )
{
	let gameStillGoing = !game.isWon() && 
						 !game.isLost();
	let guessedWord = document.getElementById('guessBox').value;
	if( gameStillGoing )
	{
		game.guessWord( guessedWord );
		render( game );
	}
}

function render( game )
{
    document.getElementById("word").innerHTML = game.getMaskedWord(); 
	document.getElementById("guesses").innerHTML = "";
	game.getPossibleGuesses().forEach( function(guess) {
		let innerHtml = "<span class='guess'>" + guess + "</span>";
		document.getElementById("guesses").innerHTML += innerHtml;
	});
	document.getElementById("hangmanImage").src = "hangman" + game.getIncorrectGuesses() + ".png";

	let guessBox = document.getElementById('guessBox');
	if( game.isWon() )
	{
		guessBox.value = youWon;
		guessBox.classList = "win";
	}
	else if( game.isLost() )
	{
		guessBox.value = youLost;
		guessBox.classList = "loss";
	}
	else
	{
		guessBox.value = "";
		guessBox.classList = "";
	}
}

function newGame()
{
	history.go(0)
}

let game = new Game();
render( game );
listenForInput( game );