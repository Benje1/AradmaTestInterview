function TicTacToe(){
    let board = [["-","-","-"],["-","-","-"],["-","-","-"]];
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
            board[indexA, indexB] = symbole;
        }
    }


    console.log(board[0],board[1],board[2])

}