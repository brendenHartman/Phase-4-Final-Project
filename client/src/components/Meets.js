import Meet from "./Meet"

function Meets({meets, user, handleReserve}){
    return (
    <div id="meets">
        <h1 id="meets_header">Meets</h1>
        {meets.map((meet) => <Meet id={meet.id} handleReserve={handleReserve} meet={meet}/>)}
    </div>
)}

export default Meets