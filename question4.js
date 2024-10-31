
function checkDashs (board){
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
    ) {
      return `${board[0][0]} won`;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ""
    ) {
      return `${board[0][2]} won`;
    }
  }
  
  function checkColumns(board){
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        return `${board[0][i]} won`;
      }
    }
  }
  
  function checkRows(board){
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ""
      ) {
        return `${board[i][0]} won`;
      }
    }
  }
  
  function checkWinner(board) {
  
    return  checkDashs(board) || checkRows(board) || checkColumns(board) || "nobody won"
    
  
  }
  
  const ticTacToeBoard = [
    ["O", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  
  console.log(checkWinner(ticTacToeBoard));
  