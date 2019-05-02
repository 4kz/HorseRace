const CHARACTERS = 4;
var charactersInGame;
var activeCharacters;

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

	activeCharacters = characters.length;
	return characters;
}

function ToggleCard(id){
	const element = $(`#character-${id}`);

	element.css({
		"opacity": charactersInGame[id].isActive() ? "0.2" : "1"
	});

	charactersInGame[id].toggleActive();

	if(charactersInGame[id].isActive()){
		activeCharacters++;
	}
	else{
		activeCharacters--;
	}
}

function ResizeTrackRows(){
	$(".track-row").css({
		"height": `${100/activeCharacters}%`,
		"width": "100%"
	});
	$(".track-row img").addClass("track-img");
}

function PlaceCharactersOnTrack(){
	var track = $("#track");
	var html = "";
	for(var i=0; i<charactersInGame.length; i++){
		if(!charactersInGame[i].isActive())
			continue;
		console.log(charactersInGame[i].getName());
		html += `<div class="track-row row"><img src="${charactersInGame[i].getImage()}"></img></div>`;
	}
	track.html(html);
	ResizeTrackRows();
}

$(document).ready(() => {
	var charactersDiv = $("#characters");

	$("#start-button").click(() => {
		if(activeCharacters < 2){
			alert("You must chose at least 2 players to start a race!");
		}
		else{
			alert(`${activeCharacters} in game!`);
			PlaceCharactersOnTrack();
		}
	});

	$.getJSON("data/characters.json", (json) => {
		charactersInGame = SelectCharacters(json);
		RenderCharacters(charactersDiv, charactersInGame);
	});
});
