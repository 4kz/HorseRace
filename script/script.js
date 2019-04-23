const CHARACTERS = 4;

//Uses the template above to show 4 characters
function RenderCharacters(div, characters){
	var data = [];

	for (var i = 0; i < characters.length; i++) {
		data.push(characters[i].getDisplayInfo())
	}

	div.html(data.map(characterTemplate).join(''));
}

function SelectCharacters(json){
	const index = shuffle(range(json.length));
	var characters = [];

	for (var i = 0; i < CHARACTERS; i++) {
		const temp = json[index[i]];
		var newCharacter = new Character(
				i,
				temp["name"],
				temp["strength"],
				temp["stamina"],
				temp["bet"],
				temp["image"],
				0
			);
		characters.push(newCharacter);
	}

	return characters;
}

var charactersInGame;

$(document).ready(() => {
	var charactersDiv = $("#characters");

	$.getJSON("data/characters.json", (json) => {
		charactersInGame = SelectCharacters(json);
		RenderCharacters(charactersDiv, charactersInGame);
	});
});