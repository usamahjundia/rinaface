import React from "react"
import "./BoardRow.css"
import Tile from "./Tile"

export default function BoardRow({rownum,row,updateTile}){
    return (
        <div className="BoardRow">
            {row.map((val,colnum)=>{
                return <Tile rownum={rownum} colnum={colnum} active={val} updateTile={updateTile} />
            })}
        </div>
    );
}