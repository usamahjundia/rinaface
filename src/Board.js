import React, {useState} from "react"
import "./Board.css"
import BoardRow from "./BoardRow"

function initEmptyBoard(){
    let matrix = [];
    for(let i=0;i<18;i++){
        matrix[i] = (new Array(32)).fill(false);
    }
    return matrix;
}

let happyFace = {
    3 : [7,8,23,24],
    4 : [9,10,21,22],
    5 : [11,20],
    6 : [9,10,21,22],
    7 : [7,8,23,24],
    9 : [7,9,22,24],
    10 : [12,13,14,15,16,17,18,19],
    11 : [12,19],
    12 : [13,18],
    13 : [14,17],
    14 : [15,16]
}

function initFace(face){
    let emptyMatrix = initEmptyBoard();
    for(let i = 0;i<18;i++){
        if (face[i] === undefined) continue;
        for(let j of face[i]){
            emptyMatrix[i][j] = true;
        }
    }
    return emptyMatrix;
}

export default function Board(){
    const [tile, setTile] = useState(initFace(happyFace));

    function updateTile(row,col){
        let tileCopy = [];
        for(let i=0;i<18;i++){
            tileCopy[i] = tile[i].slice();
        }
        tileCopy[row][col] = !tileCopy[row][col];
        setTile(tileCopy);
    }

    return (
        <div className="Board">
            <div className="Board-tiles">
            {tile.map((row,rowid)=>{
                return <BoardRow rownum={rowid} row={row} updateTile={updateTile} />
            })}
            </div>
        </div>
    );

}