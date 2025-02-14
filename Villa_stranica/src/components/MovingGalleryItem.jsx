function MovingGalleryItem(props){
    return(
        <div>
            <div>{props.numberText}/{props.countText}</div>
            <img>{props.img}</img>
        </div>
    )
}

export default MovingGalleryItem