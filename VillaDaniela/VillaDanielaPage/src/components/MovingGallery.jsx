import MovingGalleryItem from "./MovingGalleryItem";

function MovingGallery(){
    const content = [];
    return(
        <div>
            <span>Click on the image to open the gallery</span>
            {content.map(el=>(
                <MovingGalleryItem></MovingGalleryItem>
            ))}
        </div>

    )
}

export default MovingGallery