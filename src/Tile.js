import React from "react"
import "./Tile.css"

export default function Tile({rownum,colnum,active,updateTile}){
    
    function handleUpdateTile(e){
        updateTile(rownum,colnum);
    }

    return (
        <div onClick={handleUpdateTile} className={`Tile ${active ? "active" : "nonactive"}`}>

        </div>
    );
}