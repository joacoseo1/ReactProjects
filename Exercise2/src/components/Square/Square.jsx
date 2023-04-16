import './Square.css'

function Square({clases, content, handle, id}){

    return (
        <button onClick={() => handle(parseInt(id))} id={id} className={clases}>{content[id]}</button>
    )
}

export default Square;