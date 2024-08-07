import { useParams } from "react-router-dom"

const MovieDetails=({movies})=>{
    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id == id)
    return(
        <div>
            <h1>{found.title}</h1>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default MovieDetails