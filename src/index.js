const piece = (name,point,colour) => {
  const getName = () => name;
  const getPoint = () => point;
  const getColour = () => colour;
  return {getName,getPoint,getColour}
}
const gameLogic = (() => {
  /* Creating black pieces */
  const blackPawnImage = "./images/pawn.png"
  const blackKingImage = "./images/blackKing.png"
  const blackQueenImage = "./images/blackQueen.png"
  const blackRookImage = "./images/blackRook.png"
  const blackKnightImage = "./images/blackKnight.png"
  const blackBishopImage = "./images/blackBishop.png"
  /* Creating white pieces */
  const whiteRookImage = "./images/whiteRook.png"
  const whiteKnightImage = "./images/whiteKnight.png"
  const whiteBishopImage = "./images/whiteBishop.png"
  const whiteKingImage = "./images/whiteKing.png"
  const whiteQueenImage = "./images/whiteQueen.png"
  const whitePawnImage = "./images/whitePawn.png"
  /* Creating images */
  const createImageElement = (choice) => {
    const image = document.createElement('img')
    if (choice === "blackPawn") {
      image.src = blackPawnImage
    } else if (choice === "blackKing") {
      image.src = blackKingImage
    } else if (choice === "blackQueen") {
      image.src = blackQueenImage
    } else if (choice === "blackRook") {
      image.src = blackRookImage
    } else if (choice === "blackKnight") {
      image.src = blackKnightImage
    } else if (choice === "blackBishop") {
      image.src = blackBishopImage
    } else if (choice === "whiteRook") {
      image.src = whiteRookImage
    } else if (choice === "whiteKnight") {
      image.src = whiteKnightImage
    } else if (choice === "whiteBishop") {
      image.src = whiteBishopImage
    } else if (choice === "whiteKing") {
      image.src = whiteKingImage
    } else if (choice === "whiteQueen") {
      image.src = whiteQueenImage
    } else if (choice === "whitePawn") {
      image.src = whitePawnImage
    }
    image.setAttribute("height", "40px")
    image.setAttribute("width","40px")
    return image
  }
  const checkPawnDiagonal = (colour,location,board,pawn,divBoard) => {
    if (pawn === true) {
      let number = location + 1
      if (location % 8 === 7) {
      } else {
        if (board[number] === "") {
        } else if(board[number].getColour() != colour) {
          divBoard[number].style.backgroundColor = "grey"
        }
      }
      number = location - 1
      if (location % 8 === 0) {
      } else {
        if (board[number] === "") {
        } else if(board[number].getColour() != colour) {
          divBoard[number].style.backgroundColor = "grey"
        }
      }      
    }
  }
  const checkSpaceIsHasPiece = (colour,location,board,pawn,divBoard) => {
    if (board[location] === "") {
      return false
    } 
    if (pawn === true) {
      return true
    }
    if (board[location].getColour() === colour) {
      return true
    }
    return false
  }
  const checkContinousHasSpace = (colour,location,board,divBoard) => {
    if (board[location] === "") {
      return false
    } 
    if (board[location].getColour() === colour) {
      return true
    }
    if (board[location].getColour() != colour) {
      divBoard[location].style.backgroundColor = "grey"
      return true
    }
  }
  /* Moving pieces around */
  const showPawnMoves = (colour,location,board,moveNumber,pieceBoard) => {
    if (colour === "black") {
      moveNumber = location + 8
      if (location >= 8 & location <= 15) {
        for (i=1; i<=2; i++) {
          if (i === 1) {
            checkPawnDiagonal(colour,moveNumber,pieceBoard,true,board)
          } 
          let findOut = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,true,board)
          if (findOut === true) {
            break
          }
          board[moveNumber].style.backgroundColor = "grey"
          moveNumber = moveNumber + 8
        }
      } else {
        checkPawnDiagonal(colour,moveNumber,pieceBoard,true,board)
        let check = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,true,board)
        if (check === true) {
        } else {
          board[moveNumber].style.backgroundColor = "grey"
        }
      }
    } else if (colour === "white") {
      moveNumber = location - 8
      if (location >= 48 & location <= 55) {
        for (i=1; i<=2; i++) {
          if (i === 1) {
            checkPawnDiagonal(colour,moveNumber,pieceBoard,true,board)
          } 
          let check = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,true,board)
          if (check === true) {
            break
          }
          board[moveNumber].style.backgroundColor = "grey"
          moveNumber = moveNumber - 8
        }
      } else {
        checkPawnDiagonal(colour,moveNumber,pieceBoard,true,board)
        let choice = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,true,board)
        if (choice === true) {
        } else {
          board[moveNumber].style.backgroundColor = "grey"
        }
      }
    }
  }
  const checkIfQueenCanMove = (colour,number,board,pieceBoard) => {
    result = checkSpaceIsHasPiece(colour,number,pieceBoard,false,board)
    if (result != true) {
      board[number].style.backgroundColor = "grey"
    }
  }
  const showQueenMoves = (colour,location,board,moveNumber,pieceBoard) => {
    let moveRight = true
    let moveLeft = true
    let moveDown = true
    let moveUp = true
    let result = true
    if (location >= 56 & location <= 63){
      moveDown = false
    }
    if (location <= 7) {
      moveUp = false
    }
    if (location % 8 === 7 ) {
      moveRight = false
    }
    if (location % 8 === 0) {
      moveLeft = false
    }
    if (moveDown === true) {
      moveNumber = location + 8 
      checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      if (moveRight === true) {
        moveNumber = location + 9
        checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      }
      if (moveLeft === true) {
        moveNumber = location + 7 
        checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      }
    }
    if (moveUp === true) {
      moveNumber = location - 8
      checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      if (moveLeft === true) {
        moveNumber = location - 9
        checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      }
      if (moveRight === true) {
        moveNumber = location - 7
        checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
      }
    }
    if (moveRight === true) {
      moveNumber = location + 1
      checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
    }
    if (moveLeft === true) {
      moveNumber = location -1
      checkIfQueenCanMove(colour,moveNumber,board,pieceBoard)
    }
  }
  const move4Directional = (colour,location,board,moveNumber,pieceBoard) => {
    moveNumber = location 
    let result = true
    while (true) {
      moveNumber = moveNumber - 8
      if (moveNumber < 0) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,pieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    while (true) {
      moveNumber = moveNumber + 8
      if (moveNumber > 63) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,pieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    let num8 = (location + 8)
    let fact = num8 % 8
    num8 = num8 - fact
    while (true) {
      moveNumber = moveNumber + 1
      if (moveNumber === num8) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,pieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    num8 = (location - 8)
    fact = num8 % 8
    fact = 7-fact 
    num8 = num8 + fact
    while (true) {
      moveNumber = moveNumber - 1
      if (moveNumber === num8) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,pieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
  }
  const moveDiagonal = (colour,location,board,moveNumber,PieceBoard) => {
    let result = true
    moveNumber = location
    while(true) {
      moveNumber = moveNumber - 9
      if ((moveNumber % 8 === 0) || (moveNumber <0)) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,PieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    while(true) {
      moveNumber = moveNumber + 7 
      if ((moveNumber % 8 === 0) || (moveNumber > 63)) {
        break
      }
      result = checkContinousHasSpace(colour,moveNumber,PieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    while(true) {
      if ((moveNumber % 8 === 7) || (moveNumber < 8)) {
        break
      }
      moveNumber = moveNumber - 7 
      result = checkContinousHasSpace(colour,moveNumber,PieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }
    moveNumber = location
    while(true) {
      if ((moveNumber % 8 === 7) || (moveNumber > 55)) {
        break
      }
      moveNumber = moveNumber + 9 
      result = checkContinousHasSpace(colour,moveNumber,PieceBoard,board)
      if ((result === true)) {
        break
      }
      board[moveNumber].style.backgroundColor = "grey"
    }

  }
  const showKingMoves = (colour,location,board,moveNumber,pieceBoard) => {
    move4Directional(colour,location,board,moveNumber,pieceBoard)
    moveDiagonal(colour,location,board,moveNumber,pieceBoard)
  }
  const showRookMoves = (colour,location,board,moveNumber,pieceBoard) => {
    move4Directional(colour,location,board,moveNumber,pieceBoard)
  }
  const showBishopMoves = (colour,location,board,moveNumber,pieceBoard) => {
    moveDiagonal(colour,location,board,moveNumber,pieceBoard)
  }
  const showKnightMoves = (colour,location,board,moveNumber,pieceBoard) => {
    let result = false
    let moveRight = true
    let moveRight2 = true
    let moveLeft = true
    let moveLeft2 = true
    let moveUp = true
    let moveUp2 = true
    let moveDown = true
    let moveDown2 = true
    if (location % 8 === 6 || location % 8 === 7) {
      moveRight2 = false
      if (location % 8 === 7) {
        moveRight = false
      }
    }
    if (location <= 15) {
      moveUp2 = false
      if (location <= 7) {
        moveUp = false
      }
    }
    if (location >= 48) {
      moveDown2 = false
      if (location >= 56) {
        moveDown = false
      }
    }
    if (location % 8 === 0 || location % 8 === 1) {
      moveLeft2 = false
      if (location % 8 === 0) {
        moveLeft = false
      }
    }
    if (moveUp2 === true & moveLeft === true) {
      moveNumber = location - 17
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveUp2 === true & moveRight === true) {
      moveNumber = location - 15
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveUp === true & moveLeft2 === true) {
      moveNumber = location - 10
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveDown === true & moveLeft2 === true) {
      moveNumber = location + 6
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveDown2 === true & moveLeft === true) {
      moveNumber = location + 15
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveDown2 === true & moveRight === true) {
      moveNumber = location + 17
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveDown === true & moveRight2 === true) {
      moveNumber = location + 10
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
    if (moveUp === true & moveRight2 === true) {
      moveNumber = location - 6
      result = checkSpaceIsHasPiece(colour,moveNumber,pieceBoard,false,board)
      if (result === false) {
        board[moveNumber].style.backgroundColor = "grey"
      }
    }
  }
  const showinAvailableMoves = (piece,colour,location,board,pieceBoard) => {
    let number = 0
    if (piece === "Pawn") {
      showPawnMoves(colour,location,board,number,pieceBoard)
    } else if (piece === "Queen") {
      showQueenMoves(colour,location,board,number,pieceBoard)
    } else if (piece === "King") {
      showKingMoves(colour,location,board,number,pieceBoard)
    } else if (piece === "Rook") {
      showRookMoves(colour,location,board,number,pieceBoard)
    } else if (piece === "Bishop") {
      showBishopMoves(colour,location,board,number,pieceBoard)
    } else if (piece === "Knight") {
      showKnightMoves(colour,location,board,number,pieceBoard) 
    }
  }
  const showAllMoves = (colour,location,board,pieceBoard) => {
    let number = 0
    showPawnMoves(colour,location,board,number,pieceBoard)
    showQueenMoves(colour,location,board,number,pieceBoard)
    showKingMoves(colour,location,board,number,pieceBoard)
    showRookMoves(colour,location,board,number,pieceBoard)
    showBishopMoves(colour,location,board,number,pieceBoard)
    showKnightMoves(colour,location,board,number,pieceBoard) 
  }
  return {
    createImageElement,
    showinAvailableMoves,
    showPawnMoves,
    checkSpaceIsHasPiece,
    checkPawnDiagonal,
    showKingMoves,
    move4Directional,
    moveDiagonal,
    showRookMoves,
    showBishopMoves,
    showKnightMoves,
    showAllMoves,
  }
})()
const gameBoard = (() => {
  /* Inheriting logic class */
  let logic = Object.create(gameLogic)
  /* Initializaing variables */
  let choose = false
  let checkSameSquare = 69
  let changeColour = true
  let turn = 1

  /* Here is the board for the chess game */
  const board = document.querySelector('#container')

  const divLocation = []

  const pieceLocation = [
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
  ]
  /* Resetting background colours */
  const resetColours = () => {
    let number = 0
    divLocation[0].style.backgroundColor = "brown"
    divLocation[1].style.backgroundColor = "white"
    for (i=2;i<=63;i++) {
      if (i>7 & i<16 === true || i>23 & i<32 === true  || i>39 & i<48 === true || i>55 & i<64 === true) {
        number = 1
      } else {
        number = 0
      }
      if (i%2 === number) {
        divLocation[i].style.backgroundColor = "brown"
      } else {
        divLocation[i].style.backgroundColor = "white"
      }
    }
  }
  /* Deciding where on the board images are initially added*/
  const addImage = () => {
    const blackRook = logic.createImageElement("blackRook")
    divLocation[0].appendChild(blackRook)
    const blackRook2 = logic.createImageElement("blackRook")
    divLocation[7].appendChild(blackRook2)    
    let blackRookPiece = piece("Rook",1,"black")
    pieceLocation[0] = blackRookPiece
    pieceLocation[7] = blackRookPiece

    const whiteRook = logic.createImageElement("whiteRook")
    divLocation[63].appendChild(whiteRook)
    const whiteRook2 = logic.createImageElement("whiteRook")
    divLocation[56].appendChild(whiteRook2)
    let whiteRookPiece = piece("Rook",1,"white")
    pieceLocation[56] = whiteRookPiece
    pieceLocation[63] = whiteRookPiece

    const blackKnight = logic.createImageElement("blackKnight")
    divLocation[1].appendChild(blackKnight)
    const blackKnight2 = logic.createImageElement("blackKnight")
    divLocation[6].appendChild(blackKnight2)
    let blackKnightPiece = piece("Knight",1,"black")
    pieceLocation[1] = blackKnightPiece
    pieceLocation[6] = blackKnightPiece

    const whiteKnight = logic.createImageElement("whiteKnight")
    divLocation[62].appendChild(whiteKnight)
    const whiteKnight2 = logic.createImageElement("whiteKnight")
    divLocation[57].appendChild(whiteKnight2)
    let whiteKnightPiece = piece("Knight",1,"white")
    pieceLocation[57] = whiteKnightPiece
    pieceLocation[62] = whiteKnightPiece


    const blackBishop = logic.createImageElement("blackBishop")
    divLocation[2].appendChild(blackBishop)
    const blackBishop2 = logic.createImageElement("blackBishop")
    divLocation[5].appendChild(blackBishop2)
    let blackBishopPiece = piece("Bishop",1,"black")
    pieceLocation[5] = blackBishopPiece
    pieceLocation[2] = blackBishopPiece

    const whiteBishop = logic.createImageElement("whiteBishop")
    divLocation[58].appendChild(whiteBishop)
    const whiteBishop2 = logic.createImageElement("whiteBishop")
    divLocation[61].appendChild(whiteBishop2)
    let whiteBishopPiece = piece("Bishop",1,"white")
    pieceLocation[58] = whiteBishopPiece
    pieceLocation[61] = whiteBishopPiece

    const blackKing = logic.createImageElement("blackKing")
    divLocation[3].appendChild(blackKing)
    let blackKingPiece = piece("King",1,"black")
    pieceLocation[3] = blackKingPiece

    const whiteKing = logic.createImageElement("whiteKing")
    divLocation[60].appendChild(whiteKing)
    let whiteKingPiece = piece("King",1,"white")
    pieceLocation[60] = whiteKingPiece

    const blackQueen = logic.createImageElement("blackQueen")
    divLocation[4].appendChild(blackQueen)
    let blackQueenPiece = piece("Queen",1,"black")
    pieceLocation[4] = blackQueenPiece

    const whiteQueen = logic.createImageElement("whiteQueen")
    divLocation[59].appendChild(whiteQueen)
    let whiteQueenPiece = piece("Queen",1,"white")
    pieceLocation[59] = whiteQueenPiece

    for (i = 8; i<=15;i++) {
      const blackPawn = logic.createImageElement("blackPawn")
      divLocation[i].appendChild(blackPawn)
      let blackPawnPiece = piece("Pawn",1,"black")
      pieceLocation[i] = blackPawnPiece
    }
    for (i=48;i<=55;i++) {
      const whitePawn = logic.createImageElement("whitePawn")
      divLocation[i].appendChild(whitePawn)
      let whitePawnPiece = piece("Pawn",1,"white")
      pieceLocation[i] = whitePawnPiece
    }
  }
  const movePiece = (location,newLocation) => {
    let object = pieceLocation[location]
    pieceLocation[location] = ""
    pieceLocation[newLocation] = object
    divLocation[location].innerHTML = ""
    divLocation[newLocation].innerHTML = ""
    let name = pieceLocation[newLocation].getColour() + pieceLocation[newLocation].getName()
    let image = logic.createImageElement(name)
    divLocation[newLocation].appendChild(image)

  }
  /* What happens when user input is given */
  const addListener = (element,location) => {
    element.addEventListener('click', () => {
      if (checkSameSquare === location){
        /* Checking if user clicks on same square twice*/
        changeColour = false
        resetColours()
        choose = false
        checkSameSquare = 69
       } else {
         /* User clicks on two different squares */
         changeColour = true
        if (choose===false) {
          if (pieceLocation[location] === "") {
            /* A space with no piece is initally clicked */
          } else {
            console.log("Hello")
            if ((turn % 2 === 1 & pieceLocation[location].getColour() === "white") || (turn % 2 === 0 & pieceLocation[location].getColour() === "black")) {
                /* If you click on a piece to move it */
              logic.showinAvailableMoves(pieceLocation[location].getName(),pieceLocation[location].getColour(),location,divLocation,pieceLocation)
              choose = true
              divLocation[location].style.backgroundColor = "blue"
            } 
          }
        } else if (choose === true) {
          /* Checking if second piece is blank */
          if (pieceLocation[location] != "" & pieceLocation[checkSameSquare] != "") {
            /* Checking if two spaces have blank pieces */
            if (pieceLocation[location].getColour() === pieceLocation[checkSameSquare].getColour()) {
              changeColour = false
            }
          } 
          if (changeColour === true) {
            if (divLocation[location].style.backgroundColor === "grey") {
              turn = turn + 1
              /* Clicked on a grey space */
              movePiece(checkSameSquare,location)
              changeColour = false
            }
          }
          choose = false
          resetColours()
        }
       }
       if (changeColour === true) {
         checkSameSquare = location
       } 
    })
  }
  /* All the css of the squares on the board */
  const squareStyle = (element,i) => {
    element.classList.add('square')
    if (i%2 === 1) {
      element.style.backgroundColor = "brown"
    } else if(i%2 === 0) {
      element.style.backgroundColor = "white"
    }
    element.style.display = "flex"
    element.style.justifyContent = "center"
    element.style.alignItems = "center"
    element.style.width = "60px"
    element.style.height = "60px"
  /* Where the div's for the board are generated and where the program starts */
  }
  const generateBoard = () => {

    let number = 0
    let location = 0

    for (i=1; i<=64; i++) {
      location = (i-1)
      number = i
      if (i>8 & i<17 === true || i>24 & i<33 === true || i>40 & i<49 === true || i>56 & i<65 === true) {
        number = (i+1)
      }
      let square = document.createElement('div')
      squareStyle(square,number)
      addListener(square,location)
      board.appendChild(square)
      divLocation.push(square)
    }
    addImage()
  }
  return {
    generateBoard,
    squareStyle,
    addListener,
    addImage,
    resetColours,
    movePiece,
  }
})();

(function () {
  gameBoard.generateBoard()
})()
