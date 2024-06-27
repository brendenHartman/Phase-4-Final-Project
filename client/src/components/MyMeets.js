import Meet from "./Meet"

function MyMeets({myMeets}){
    return (
        <div>
            <h1>My Meets</h1>
            {myMeets.map((meet) => <Meet  meet={meet}/>)}
        </div>
    )
}

export default MyMeets