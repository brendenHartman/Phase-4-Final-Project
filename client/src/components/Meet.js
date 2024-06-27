function Meet({meet,handleBuy}){
    return (
        <div>
            <h1>{meet.name}</h1>
            <h2>{meet.type}</h2>
            <p>Starts: {meet.start}, Ends: {meet.end}</p>
            <input className="tickButton" onClick={handleBuy}></input>
            <input className="tickButton" onClick={handleBuy}></input>
            <input className="tickButton" onClick={handleBuy}></input>
        </div>
    )
}

export default Meet