import React from 'react'
import Piece from './Piece'

const getOppositeColor = (color) => {
    if (color === "light")
        return "dark";
    else if(color === "dark")
        return "light";
    else return "RED-wtf-are-you-doing";
}

const getPieceComponent = (piece_name, piece_color, className, id/*just to populate key*/)=>{
    if (piece_name === "") {
        return <Piece className={className} key={id}/>;
    }
    var image_name = piece_name + "-" + piece_color[0]; // piece_color is "light" or "dark". piece_color[0] is "l" or "d"
    return <Piece className={className} image = {image_name} key={id}/>;
}

const getMainBoard = (main_board_pieces)=>{
    // TODO:: take turn into account and flip the state according to that
    // TODO: don't render other player's state when strategising
    return (
        <>
            {main_board_pieces.map((data, id) => {
                var tile_color = ((id+Math.floor(id/8))%2) ? "dark" : "light";
                var piece_name = data[1];
                var piece_color = data[0];
                return getPieceComponent(piece_name, piece_color, "main-piece-box " + tile_color, id);
            })}
        </>
    );
}

const getSideDrawer = (state, drawer_position/*"top" or "bottom"*/) => { // returns an array of divs
    var drawer_pieces/*color*/  = null; // if it's light's turn you'll get light on the bottom and dark on top. and vice versa. 
    if (
        (state.turn === "light" && drawer_position === "bottom") ||
        (state.turn === "dark" && drawer_position === "top") 
    ) {
        drawer_pieces = state.light_drawer_pieces;
    } else {
        drawer_pieces = state.dark_drawer_pieces;
    }
    return (
        drawer_pieces.map(
            (piece_name, id)=>{
                var piece_color = (drawer_position==="bottom") ? state.turn : getOppositeColor(state.turn);
                return getPieceComponent(piece_name, piece_color, "side-piece-box", id);
        })
    );
}


const side_piece_box =  <div className="side-piece-box"></div>;
const eight_side_piece_boxes = <>{side_piece_box}{side_piece_box}{side_piece_box}{side_piece_box}{side_piece_box}{side_piece_box}{side_piece_box}{side_piece_box}</>;

const Board = ({state}) => {
    return (
        <>
            <div className="side-drawer"> 
                <div className="semi-side-drawer" id="dark-side-drawer">{getSideDrawer(state, "top").slice(0, 8)}</div>
                <div className="semi-side-drawer" id="light-side-drawer">{getSideDrawer(state, "bottom").slice(0, 8)}</div>        
            </div>
            <div  className="main-board">{getMainBoard(state.main_board_pieces)}</div>
            <div className="side-drawer"> 
                <div className="semi-side-drawer" id="dark-side-drawer">{getSideDrawer(state, "top").slice(8, 16)}</div>
                <div className="semi-side-drawer" id="light-side-drawer">{getSideDrawer(state, "bottom").slice(8, 16)}</div>        
            </div>
        </>
    )
}

export default Board
