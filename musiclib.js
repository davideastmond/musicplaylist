function generateRandomString() {
	/** This function generates a string of random alpha numeric characters */
	const validChars = "abcdefghijklmnopqrstuvwxyz1234567890";

	let returnString = "";
	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.floor(Math.random() * (validChars.length - 1 - 0) + 0);
		const shouldCap = Math.floor(Math.random() * (2 - 0) + 0);
		if (shouldCap === 1) {
			returnString += validChars[randomNumber].toUpperCase();
		} else {
			returnString += validChars[randomNumber];
		}
	}
	return returnString;
}

class MusicLibrary {
	constructor (libName, creatorName) {
		this.name = libName;
		this.creator = creatorName;
		this.playLists = [];
	}

	addPlayList(pList) {
		if (typeof(pList, "PlayList")) {
			this.playLists.push(pList);
		} else {
			throw new error("Please supply a valid playlist object.");
		}
	}

	printPlayLists() {
		this.playLists.forEach((plist) => {
			console.log()
		});
	}
}

class PlayList {
	constructor (pname) {
		this.name = pname;
		this.tracks = [];
	}

	overallRating() {
		/* 
		function which will calculate the 
		rating by averaging the rating of the tracks */
		let adder = 0;
		this.tracks.forEach((el) => {
			adder += el.rating;
		});
		return Math.floor(adder / this.tracks.length);
	}

	totalDuration() {
		/* 
		function which will sum the duration of all of the tracks
		*/
		let totalDuration = 0;
		this.tracks.forEach((track) => {
			totalDuration += track.length;
		});

		console.log(`Total duration of all tracks is ${totalDuration} minutes.`);
	}

	addTrack(pTrack) {
		if (typeof(pTrack, "Track")) {
			this.tracks.push(pTrack);
		} else {
			throw new Error("Type Error - invalid track type");
		}
	}

	printTracks() {
		this.tracks.forEach((t) => {
			// Do Something
			console.log(` ${t.id} ${t.artist} - ${t.title}`);
		});
	}
}

class Track {
	constructor (pArtist, pTitle, pRating, pLength) {
		this.artist = pArtist;
		this.title = pTitle;
		this.rating = pRating;
		this.length = pLength;
		this.id = generateRandomString();
	}
}



// Create a new music library
const lib = new MusicLibrary("David's Lib", "David Eastmond");

// Create a playlist for the library
const list = new PlayList("80s Pop Faves", "David Eastmond");
const list1 = new PlayList("New Wave 80s faves", "David Eastmond");

// Create some tracks and add some tracks to the play list 
const track1 = new Track("Oh Sheila", "Ready For the World", 4 , 4);
const track2 = new Track("Ceramic Girl", "Ready For the World", 4 , 4);
const track3 = new Track("Cross My Broken Heart", "The Jets", 4, 4);

list.addTrack(track1);
list.addTrack(track2);
list.addTrack(track3);

// Create some more tracks for the second playlist
const track4 = new Track("Human", "Human League", 4, 3);
const track5 = new Track("Hungry Like the Wolf", "Duran Duran", 4, 3);

list1.addTrack(track4);
list1.addTrack(track5);

// Add the playlist to the library
lib.addPlayList(list);
lib.addPlayList(list1);

// Print the music library
console.log(lib);
lib.printPlayLists();
list.printTracks();