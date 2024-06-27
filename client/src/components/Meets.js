import Meet from "./Meet"
import NavBar from "./NavBar"

const {meets, handleMeet} = useOutletContext()

function Meets(){
    <div>
        <NavBar/>
        <h1>Meets</h1>
        {meets.map((meet) => <Meet meet={meet} handleBuy={handleMeet}/>)}
    </div>
}

export default Meets