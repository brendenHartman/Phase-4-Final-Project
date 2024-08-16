import Meet from "./Meet"

function Meets({meets, user}){
    <div>
        <h1>Meets</h1>
        {meets.map((meet) => <Meet meet={meet}/>)}
    </div>
}

export default Meets