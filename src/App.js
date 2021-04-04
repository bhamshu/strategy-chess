import './App.css';
import DarkBoxes from './DarkBoxes'

var initial_state = {
  game_status: "zero", // other possible states: "strategising", "player_turn", "animation", "over"
  turn: "white", // other possible: "black"    // used for strategising and player_turn
  is_player_drawer_out: "true", 
  // when it's not a player's turn, their drawer is definitely not out. This bool is for the player whose turn it is.
  pieces: [
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    // first variable denotes "white" or "black"
    // pieces: "king", "queen", "knight", "bishop", "rook", "pawn"
  ],
  white_drawer_pieces: [
    ["king", "queen", "rook", "rook"],
    ["bishop", "bishop", "knight", "knight"],
    ["pawn", "pawn", "pawn", "pawn"],
    ["pawn", "pawn", "pawn", "pawn"] // first two columns for left drawer. second two columns for right drawer.
  ],
  black_drawer_pieces: [
    ["king", "queen", "rook", "rook"],
    ["bishop", "bishop", "knight", "knight"],
    ["pawn", "pawn", "pawn", "pawn"],
    ["pawn", "pawn", "pawn", "pawn"] 
  ]
}

function App() {
  var state = initial_state;
  return (
    <div className="App">
      <header className="App-header">
        <div className="game-board"></div>
        
        <DarkBoxes/>
      </header>
    </div>
  );
}

export default App;
