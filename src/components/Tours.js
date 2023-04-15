import Card from "./Card";

// we have to import removeTour
function Tours({tours , removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Jp</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) =>{
                        // prop named removeTour is also sent to Card
                        return <Card key={tour.id} {...tour} removeTour={removeTour} ></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours; 