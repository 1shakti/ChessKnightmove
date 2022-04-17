import React,{useState} from 'react';
import Tile from '../../components/Tile/Tile';
import "./ChessBoard.css";

 
 /* // Top
  testSquare(y - 2, x - 1);
  testSquare(y - 2, x + 1);
  // Bottom
  testSquare(y + 2, x - 1);
  testSquare(y + 2, x + 1);
  // Left
  testSquare(y - 1, x - 2);
  testSquare(y + 1, x - 2);
  // Right
  testSquare(y - 1, x + 2);
  testSquare(y + 1, x + 2);
*/

export default function ChessBoard() {

  let knightMove=[[-1,-2],[1,-2],[-1,2],[1,2],[-2,-1],[-2,1],[2,-1],[2,1]];
  const [nextMove,setNextMove]=useState([]);
  const [knight,setKnight]=useState([{name: "Knight",img: "knight_w.png",x:1, y: 2}]);
  function grepElement(e,x,y){
    let arrMove=[];
    if(e.target.classList.contains("chess-piece")){
      arrMove=knightMove.map((value)=>({x:x+value[0],y:y+value[1]}));
     
      setNextMove(arrMove);
     
    }else if(e.target.classList.contains("active")){
      setKnight([{name: "Knight",img: "knight_w.png",x:x, y: y}]);
      setNextMove(arrMove);
    }
  }
  let board = [];
  for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {


      let active=false;
      let piece=[];
      knight.forEach((value) => {
        if (value.x == x && value.y==y) {
          piece=value;
        }
      });

      nextMove.forEach((value)=>{
        if(value.x==x && value.y==y){
          active=true;
        }
      });


      const number = y + x + 2;
      board.push(<Tile key={`${x}${y}`} number={number} piece={piece} active={active} x={x} y={y} grepElement={grepElement}></Tile>);
    }
  }
  return (
    <div className='chessboard'>
      {
        board
      }

    </div>
  )
}
