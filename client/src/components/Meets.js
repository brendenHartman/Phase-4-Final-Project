import Meet from "./Meet"
import MeetForm from "./MeetForm"

function Meets({meets, handleReserve, formikMeet}){
    return (
    <div id="meets">
        <h1 id="meets_header">Meets</h1>
        <h4>Create Your Own Event Using The Form Below!</h4>
        <MeetForm formikMeet={formikMeet}/>
        {meets.map((meet) => <Meet key={meet.id} id={meet.id} handleReserve={handleReserve} meet={meet}/>)}
    </div>
)}

export default Meets