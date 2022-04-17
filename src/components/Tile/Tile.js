import React from 'react'
import "./Tile.css";
export default function Tile({ children, number, piece,x,y,active,grepElement}) {
  var color = number % 2 == 0 ? "black" : "white";
  var activate= active && "active" 
  
  return (
    <div className={`box ${color} ${activate}`} onMouseUp={(e)=>grepElement(e,x,y)}>
       {piece?.img && <div style={{backgroundImage:`url(./asset/${piece.img})`}} className="chess-piece" {...piece}></div>}
      {children}
      </div>
  )
}
