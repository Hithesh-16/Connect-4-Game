import React from "react";
import './Game.css';
class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:1,
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]],
            winner: ""
            
        }
    }
    render(){

        return(
            <div>
              <div>
              <div id="update">

              </div>
              </div>
                 
                <div id="result">
                </div>
                <table id="grid">
                    <tbody>
                <tr><td></td><td></td><td ></td><td ></td><td ></td><td></td><td></td></tr>
                <tr><td ></td><td ></td><td ></td><td ></td><td ></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
                </table>
            </div>
        );
    }

    checkWinner = (b) =>{
       let w = (this.checkVertical(b) || this.checkDiagonalRight(b) || this.checkDiagonalLeft(b) || this.checkHorizontal(b))
        if(w === 1){
            document.getElementById("result").innerHTML = "Yeah!! "+this.props.player1+" is the Winner"
            document.getElementById("update").style.display = "none"
        }
        else if(w === 2){
            document.getElementById("result").innerHTML = "Yeah!! "+this.props.player2+" is the Winner"
            document.getElementById("update").style.display = "none"
        }
      }
    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 7; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r - 1][c] &&
                  board[r][c] === board[r - 2][c] &&
                  board[r][c] === board[r - 3][c]) {
                return board[r][c];    
              }
            }
          }
        }
    }

    checkHorizontal(board) {
        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r][c + 1] && 
                  board[r][c] === board[r][c + 2] &&
                  board[r][c] === board[r][c + 3]) {
                return board[r][c];
              }
            }
          }
        }
      }
      
      checkDiagonalRight(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r - 1][c + 1] &&
                  board[r][c] === board[r - 2][c + 2] &&
                  board[r][c] === board[r - 3][c + 3]) {
                return board[r][c];
              }
            }
          }
        }
      }
      
      checkDiagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r - 1][c - 1] &&
                  board[r][c] === board[r - 2][c - 2] &&
                  board[r][c] === board[r - 3][c - 3]) {
                return board[r][c];
              }
            }
          }
        }
      }
    componentDidMount()
    {
        const grid= document.getElementById("grid");
        const cells = grid.getElementsByTagName("td");
        for(let i=0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                var col = i%7
                var row = Math.floor(i/7)
                if(cells[i].style.backgroundColor !== this.props.color2 && cells[i].style.backgroundColor !== this.props.color1){
                    if(this.state.player === 1){
              
                      
                      cells[i].style.backgroundColor=this.props.color1;
                      var b = this.state.board
                      b[row][col] = 1
                      this.setState({board: b})
                      this.checkWinner(b)
                      if(this.checkWinner(b)===2 ||this.checkWinner(b)===1 ){
                        document.getElementById("update").style.display = "none"
                      }
                      else{
                        this.setState({player:2});
                        document.getElementById("update").innerHTML = this.props.player2+"'s Turn"
                      }
                      
                    }
                    else if(this.state.player===2){
                      
                        cells[i].style.backgroundColor=this.props.color2;
                        b = this.state.board
                        b[row][col] = 2
                        this.setState({board: b})
                        this.checkWinner(b)
                        if(this.checkWinner(b)===2 ||this.checkWinner(b)===1 ){
                          document.getElementById("update").style.display = "none"
                        }
                        else{
                          this.setState({player:1});
                          document.getElementById("update").innerHTML = this.props.player1+"'s Turn"
                        }
                }
              }
            });
        }
    }


}
export default Game;
