import { Name } from "./Name"

const Cat = ({name,img,color="black", isBlueEyed}) => {
    const eye = isBlueEyed ? 'Yes' : 'No'
    return(
        <div>
            <Name name= {name}/>
            <p>Blue Eyed : {eye}</p>
            <img src={img} alt="cat-img" height="300px"/>
            <p>Color : {color}</p>
            <hr />
        </div>
    )

}

export {Cat}



