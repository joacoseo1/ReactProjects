import "./Button.css";
import React from 'react'

function Button({goOrBack,func,children}) {
    return (
        <div className={`btnContainer${goOrBack}`}>
            <button onClick={func} className={goOrBack}>{children}</button>
        </div>
    )
}

export default Button
