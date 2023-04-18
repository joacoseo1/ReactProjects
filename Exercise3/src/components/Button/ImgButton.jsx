import React from 'react'

function ImgButton({path,id,alt,funcHover,funcUnHover}) {
    return (
        <>
            <img src={path} id={id} alt={alt} onMouseOver={funcHover} onMouseOut={funcUnHover} />
        </>
    )
}

export default ImgButton
