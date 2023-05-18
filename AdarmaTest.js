const readline = require('readline')

function TicTacToe(){

  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let currentPlayer = "X"

    let board = [["-","-","-"],["-","-","-"],["-","-","-"]];

    let winner = "-";
    let winningCount = 0;
  
    let cricle = "O";
    let cross = "X";

    let boardLength = board.length

    function changePlayer(){
      if(currentPlayer === "X"){
        currentPlayer = "O"
      } else {
        currentPlayer = "X"
      }
    }

    function spaceCheck(indexA, indexB){
        if(board[indexA][indexB] === "-"){
            return true;
        } else {
            return false;
        }
    }

    function makeAMove(indexA, indexB, symbole){
      if(spaceCheck(indexA,indexB)){
        board[indexA][indexB] = symbole;
        return true
      } else {
        return false
      }
    }
    
    function winningCondition(){
      for(let i = 0; i < boardLength; i++){
        winningCount = 0
        for(let j = 0; j < boardLength-1; j++){
          if(board[i][j] === board[i][j+1] && board[i][j] !== "-"){
            winningCount += 1;
            if(winningCount === 2){
              winner = board[i][j];
              break;
            }
          }
        }
      }
      winningCount = 0
      for(let i = 0; i < boardLength; i++){
        winningCount = 0
        for(let j = 0; j < boardLength-1; j++){
          if(board[j][i] === board[j+1][i] && board[j][i] !== "-"){
            winningCount += 1;
            if(winningCount === 2){
              winner = board[j][i];
              break;
            }
          }
        }
      }
      winningCount = 0
      for(let i = 0; i < boardLength - 1; i++){
        if(board[i][i] === board[i+1][i+1] && board[i][i] !== "-"){
          winningCount += 1;
          if(winningCount === 2){
            winner = board[i][j];
            break;
          }
        }
      }
      winningCount = 0
      for(let i = 0; i< boardLength -1; i++){
        let index = board.length - i - 1;
        if(board[index][i] === board[index - 1][i]){
          winningCount += 1;
          if(winningCount === 2){
            winner = board[index][i];
            break;
          }
        }
      }
      winningCount = 0
    }

    function clearBoard(){
      board = [["-","-","-"],["-","-","-"],["-","-","-"]]
    }

    function displayBoard(){
      for(let i = 0; i < board.length; i++){
        console.log(board[i])
      }
    }

    function declareWinner(){
      console.log("Winner is " + winner)
    }

    function playerInput(){
      r1.question("Enter row placement (0-2): ", function(row){
        r1.question("Enter column placement (0-2): ", function(column){
          const moveMade = makeAMove(parseInt(row), parseInt(column), currentPlayer)
          if(moveMade){

            winningCondition()
            displayBoard()
            
            if(winner !== "-"){
              declareWinner()
              r1.close()
            } else {
              changePlayer()
              playerInput()
            }
          } else {
            console.log("Invalid move. Please select an empty space.");
          playerInput(); // Ask the same player for input again
          }
        })
      })
    }

    // winningCondition()
    // if(winner !== "-"){
    //   declareWinner()
    // }
    // for(let i =0; i <= 2; i++){
    //   console.log(board[i])
    // }
    playerInput()
    clearBoard()

}


TicTacToe()