import './App.css';
import Board from './Components/Board.js'
var initial_state = {
  game_status: "zero", // other possible states: "strategising", "player_turn", "animation", "over"
  turn: "light", // other possible: "dark"    // used for strategising and player_turn
  // is_player_drawer_out: "true",  DEPRECATED 
  // // when it's not a player's turn, their drawer is definitely not out. This bool is for the player whose turn it is.
  main_board_pieces: [
    ["light", "king"], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["dark", "bishop"], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]
    // first variable denotes "light" or "dark"
    // pieces: "king", "queen", "knight", "bishop", "rook", "pawn"
  ],
  light_drawer_pieces: [
    "king", "queen", "rook", "rook",
    "bishop", "bishop", "knight", "knight",
    "pawn", "pawn", "pawn", "pawn",
    "pawn", "pawn", "pawn", "pawn" // first two columns for left drawer. second two columns for right drawer. not necessarily enforced but can visualise
  ],
  dark_drawer_pieces: [
    "king", "queen", "rook", "rook",
    "bishop", "bishop", "knight", "knight",
    "pawn", "pawn", "pawn", "pawn",
    "pawn", "pawn", "pawn", "pawn" 
   ]
}

function App() {
  var state = initial_state;
  return (
    <div className="App">
      <Board state = {state}/>
    </div>
  );
}

export default App;
