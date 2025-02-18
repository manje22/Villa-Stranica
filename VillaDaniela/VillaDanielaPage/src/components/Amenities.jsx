import AmenityItem from "./AmenityItem";
function Amenities(){
    const amenities = ["prvi", "drugi", "treci"];
    return(
        <div>
            <h1>Amenities we offer at our villa</h1>
            <h2 className="subHeading">All are included at no additional cost with booking</h2>
            <div>
                {amenities.map(el => (
                    <AmenityItem key={el} caption={el}></AmenityItem>
                ))
                }
            </div>
        </div>
    )
}

export default Amenities