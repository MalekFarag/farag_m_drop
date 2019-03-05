(() => {
	console.log('goteem');
	
	// set up the puzzle pieces and boards

	//need a reference to each piece that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	
	// get a reference to the drag side
	let piecesBoard = document.querySelector('.puzzle-pieces');
	let puzzleBoard = document.querySelector('.puzzle-board');

	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll('#buttonHolder img');


	// DROP ZONES******
	let dropZones = document.querySelectorAll('.drop-zone');



	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate images here -> need to make 4 (top left, top right, bottom left and bottom right)
		// debugger;	
		//loop through the images refs and generate one for each 
		thePieces.forEach((piece, index)=> {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece" draggable>`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
		initDrag();
	}














		//********drag + drop funtionality*******
		//
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img =>{
			img.addEventListener("dragstart", function(e){
				console.log('dragging...');
				e.dataTransfer.setData('text/plain', this.id);
			});
		});
	}

	//coding the drop
	//
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', function(e){
			e.preventDefault(); //prevents default (reload page (in this case))
			console.log('dragged')
		});
		zone.addEventListener('drop', function(e){
			e.preventDefault();
			console.log('dropped')

			let piece = e.dataTransfer.getData('text/plain');
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	function resetPuzzlePieces() {
		// change the current puzzle, regenerate the pieces
		// debugger;
		// clean out the puzzle pieces div

		piecesBoard.innerHTML = "";
		// generate new pieces
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	// call this function to set up / generate the pieces on load
	createPuzzlePieces(0);

})();
