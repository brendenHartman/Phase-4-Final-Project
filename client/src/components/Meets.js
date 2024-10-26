import Meet from "./Meet"
import MeetForm from "./MeetForm"

function Meets({meets, handleReserve, user, formikMeet}){
    return (
    <div id="meets">
        <h1 id="meetsTitle" style={{background: user.color}}>Meet Hub</h1>
        <h4>Create Your Own Event Using The Form Below!</h4>
        <MeetForm formikMeet={formikMeet}/>
        <div id="dividerMeet" style={{background: user.color}}></div>
        <h1 id="meetsTitleBottom" style={{background: user.color}}>Meets:</h1>
        <div id="meetsGrid">
            {meets.map((meet) => <Meet key={meet.id} id={meet.id} handleReserve={handleReserve} meet={meet}/>)}
        </div>
    </div>
)}

export default Meets