import React from 'react';

var X = 64; // percentage of screen size for board width
var Y = 80; // percentage of screen size for board height

var dark_boxes = () => {
    var all_black_boxes = [];
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (((i-j)%2) !== 0) {
                all_black_boxes.push([i, j])
            }
        }
    }
    return (
        <div>
            {all_black_boxes.map((coords, ind)=> {
                const style = {
                    left: `${(100-X)/2+(coords[0]*X)/8}%`,
                    top: `${(100-Y)/2 + (coords[1]*Y)/8}vh`
                }
                return (
                    <div className="dark-box" key={i} style={style}></div>
                )
            })}
        </div>
    );
}

export default dark_boxes;