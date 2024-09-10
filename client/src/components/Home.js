import Car from "./Car"
import Spot from "./Spot"

function Home({user, handleRemove, handleLeave, handleColor}){

    return (
    <div key="home_page">
        <div key="topSec">
            <div id="decor"></div>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAC8QAAICAQIEBAUDBQAAAAAAAAABAgMEETEFEiFBE1FhcSIyUoGhFGKRI4KSsdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAADy5xW7S+4HoHlTi9pRfsz0AAAAAAAAAAAAAAAAAAAAA+Saim29EgDaW5W5fFq6240LxJfV2X/AEhcS4g8huuptVLv9RAAkXZ2Tc/itkl5ReiI7be7b+4ABNrZ6HenNyKX8FstPKT1RwAF1icXjNqOTHkf1LYtFJSSaeqezRkSZgZ88WSjN81TfVPt7AaMHmEozgpRacX1TR6AAAAAAAAAAAAAABUcby2ksaD6vrP28i2bSTb7GVvtd107Jbybf2A5gAAAAAAAAAC04Llcs/0030fWHo/IuzJQm65KcfmT1RqqpqyuM47SSaA9gAAAAAAAAAAAAI3EJcmFfJb8jMyaXii1wL9PpM0AAAAAAAAAAAA0XCJc2DXr21X8MzpoOCrTBj6yk/yBPAAAAAAAAAAAAAc74eJVOH1RaMp30e63NeZ7i+P4OS5r5LOqfr3AggAAAAAAAAAAajCr8LFqg9+Xr7lDw7HeRlRT+SL5pGlAAAAAAAAAAAAAABwzMaOTQ65fZ+TO4fUDJ3VTptlXYtJLc8GmzMOvKhpPpJbSW6KHKw7sZ/HHWHaa2AjgAAAAB6hCdk1CEeaTeiXmdMbEuyZaVR6fU+iRfYOFXix1XxWNdZMD7gYixaFHeb6yfmyUAAAAAAAAAAAAAA45ORXj1Oy16Jbeb9gOraS1b0XmQp8UxYWKCnzeco9UinzM63KbWvLX2gtvv5kYg1sJRnHmi009mmfWk001qmZjFy7sV/0pfD3i9mW+PxeieitTqf8AKA638Nxrnq6+V+cXoRpcEre1s0vYsq7a7FrCcZL0ep6KKtcEhr1vnp6JEirhmLU9XBzf7nqTNTzOyEFrOSivVgeoxUUkkkl2QbSWrei7sgZHFqK1pXrZL02/kqcvOuynpN8sPojsQXUOJYsrXX4mn7ns/uS009mZEl4WfbitLVyr7xb/ANAaQHLHvryK1ZU9U/x7nUoAAAAAAAA53WxprlZY9Ix3M3mZM8q1zk3ptGPkiVxnK8W7wYP4K319WVwAAAAAATaesXo/TodY5N8flvtX97OQA6vKyJLR32/5s5NuXWTb92AAAAAAAd8LKni2qcdXF9JR80aWqyNtcbIPWMlqmZMsuDZXh2+BP5Zvp6MC9AAAAACNn3/p8ac09JaaR9ySUnHbua2untFcz9wKvfq92AAAAAAAAAAAAAAAAAAAT0aa6NbMADT4N/6nGhZ32a9SQUvArtLLKntJcy9y6AAAA9jM8Sk5Z92vZ6AARgAAAAAAAAAAAAAAAAAAAAEnhsnHOpae8tPwaYAAAAP/2Q=="  alt="Default User"/>
            <h3>Hello, {user.username}!</h3>
            <h3 id="color">Current Theme: {user.color}</h3>
            <input id='red' type='button' onClick={handleColor}/>
            <input id='orange' type='button' onClick={handleColor}/>
            <input id='yellow' type='button' onClick={handleColor}/>
            <input id='green' type='button' onClick={handleColor}/>
            <input id='teal' type='button' onClick={handleColor}/>
            <input id='blue' type='button' onClick={handleColor}/>
            <input id='purple' type='button' onClick={handleColor}/>
            <input id='pink' type='button' onClick={handleColor}/>
            <input id='gray' type='button' onClick={handleColor}/>
            <input id='black' type='button' onClick={handleColor}/>
        </div>
        <div key="dividerHomeTop"></div>
        <div key="garageSec"> 
            {user.cars.map((car)  => <Car key={car.id} id={car.id} car={car} text='Remove' handleClick={handleRemove}/>)}
        </div>
        <div key="dividerHomeBottom"></div>
        <div key="meetsSec">
            {user.spots.map(spot  => <Spot key={spot.id} id={spot.id} spot={spot} handleClick={handleLeave}/>)}
        </div>
    </div>
    )
}

export default Home