import Amenities from "./Amenities"
import MovingGallery from "./MovingGallery"
import { useNavigate } from "react-router-dom"
function MainPage(){
    return(
        <div>
            <header>
                <div>
                    <p>Villa Daniela</p>
                </div>
                <div>
                    <p>Kako doći</p>
                </div>
                <div>
                    <p>Kontakt</p>
                </div>
            </header>
            <div>
                <div>
                    <h1>Villa Daniela</h1>
                    <h3>Book now for your perfect vacation</h3>
                </div>
                <div>
                    <h1>Relaxing stay</h1>
                    <p>Set within 400 metres of Maslinica Beach and 500 metres of Punta Beach, Apartmani Mariela provides rooms with air conditioning and a private bathroom in Maslinica.
                        With sea views, this accommodation offers a balcony and a swimming pool. <br></br>
                        There is a sun terrace and guests can make use of free WiFi, free private parking and an electric vehicle charging station.
                    </p>
                    <p>
                        The units come with tiled floors and feature a fully equipped kitchen with a microwave, a dining area, a flat-screen TV with satellite channels, and a private bathroom with walk-in shower and a hair dryer.
                        A toaster, a fridge and stovetop are also offered, as well as a coffee machine and a kettle. At the apartment complex, units come with bed linen and towels.
                    </p>
                    <p>
                        Guests can take advantage of the warm weather with the property's barbecue facilities.
                    </p>
                    <p>
                        The area is popular for cycling and hiking, and bike hire is available at this 3-star apartment.
                        With an outdoor fireplace and a picnic area, this apartment offers ample opportunities to wind down.
                    </p>
                </div>
                <MovingGallery></MovingGallery>
                <Amenities></Amenities>
            </div>
            <footer>
                <h1>Kontakt info</h1>
                <div >tel: +385 098 968 3709</div>
                <div>e-mail: apartmanimariela@gmail.com</div>
                <br></br>
                <div>address: Ulica domovinskog rata 74E</div>
            </footer>
        </div>
    )
}

export default MainPage