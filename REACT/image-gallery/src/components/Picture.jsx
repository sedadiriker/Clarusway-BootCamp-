import data from "../helper/data"

function Picture() {
    return (
        <>
            {
                data.map((photo, index) =>
                    <div  key={index}>
                    <div className="photo">
                        <img src={photo.src.large} alt="resim" />
                    </div>
                    <p className="photographer" key={index}>{photo.photographer}</p>
                    </div>
                )
            }
        </>
    )
}

export default Picture

