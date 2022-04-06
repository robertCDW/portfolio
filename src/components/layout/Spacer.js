import React from "react";

const Spacer = ({ height, width}) => {
    return <div style={{
        height: height ? `${height}rem` : '0rem',
        width: width ? `${width}rem` : '0rem',
        visibility: 'hidden'
    }}>space</div>
}

export default Spacer
