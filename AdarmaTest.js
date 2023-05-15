function TicTacToe(){
    let board = [["-","-","-"],["-","-","-"],["-","-","-"]];

    let winner = "-";
    let winningCount = 0;
  
    let cricle = "O";
    let cross = "X";

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
      }
    }
    
    function winningCondition(){
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 2; j++){
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
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 2; j++){
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
      for(let i = 0; i < 2; i++){
        if(board[i][i] === board[i+1][i+1] && board[i][i] !== "-"){
          winningCount += 1;
          if(winningCount === 2){
            winner = board[i][j];
            break;
          }
        }
      }
      winningCount = 0
      for(let i = 0; i< 2; i++){
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

    function declareWinner(){
      console.log("Winner is " + winner)
    }

    // makeAMove(0,0, cricle)
    // makeAMove(0,1, cricle)
    // makeAMove(0,2, cricle)
    // winningCondition()
    // if(winner !== "-"){
    //   declareWinner()
    // }
    // for(let i =0; i <= 2; i++){
    //   console.log(board[i])
    // }
    // clearBoard()
    // makeAMove(0,0, cricle)
    // makeAMove(1,0, cricle)
    // makeAMove(2,0, cricle)
    // winningCondition()
    // if(winner !== "-"){
    //   declareWinner()
    // }
    // for(let i =0; i <= 2; i++){
    //   console.log(board[i])
    // }
    // clearBoard()
    // makeAMove(0,0, cricle)
    // makeAMove(1,1, cricle)
    // makeAMove(2,2, cricle)
    // winningCondition()
    // if(winner !== "-"){
    //   declareWinner()
    // }
    // for(let i =0; i <= 2; i++){
    //   console.log(board[i])
    // }
    // clearBoard()
    // makeAMove(0,0, cross)
    // makeAMove(1,1, cricle)
    // makeAMove(2,2, cross)
    // makeAMove(0,1, cricle)
    // makeAMove(2,1, cross)
    // makeAMove(2,0, cricle)
    // makeAMove(0,2, cross)
    // makeAMove(1,2, cricle)
    // makeAMove(1,0, cross)
    // winningCondition()
    // if(winner !== "-"){
    //   declareWinner()
    // }
    // for(let i =0; i <= 2; i++){
    //   console.log(board[i])
    // }
    // clearBoard()
    
    makeAMove(0,0, cross)
    makeAMove(0,2, cricle)
    makeAMove(2,2, cross)
    makeAMove(1,1, cricle)
    makeAMove(2,0, cross)
    makeAMove(0,1, cricle)
    makeAMove(2,1, cross)
    winningCondition()
    if(winner !== "-"){
      declareWinner()
    }
    for(let i =0; i <= 2; i++){
      console.log(board[i])
    }
    clearBoard()

}


TicTacToe()