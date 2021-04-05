import React from 'react'


const Piece = (props) => {
    var image = <></>
    if (props.image != null)
        image = <div className="piece-image" style={{backgroundImage: `url(./Assets/${props.image}.svg)`}}></div>;
    return (
        <div className={props.className}>
            {image}
        </div>
    )
}

export default Piece
