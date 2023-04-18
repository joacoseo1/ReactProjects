import "./Card.css";
import React from 'react'

function Card({name,status,img,species,gender}) {
    return (
        <>
            <article>
                <div className="Card">
                    <img src={img} alt={name} />
                    <div className="Card-body">
                        <span><h1>{name}</h1></span>
                        <h3><span className={`status ${status}`}>&#8231;</span>{status}</h3>
                        <h3><span className="titlesH3">Species: </span>{species}</h3>
                        <h3><span className="titlesH3">Gender: </span>{gender}</h3>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card
