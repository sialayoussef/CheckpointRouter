import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovies=({movies,textLive,rate,setMovies,setRate,setTextLive})=>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(textLive.toUpperCase()) && el.rating >= rate)
    return(
        <div>
            <div className='filterAdd'>
                <FilterMovie textLive={textLive} rate={rate} setTextLive={setTextLive} setRate={setRate}/>
                <AddMovie setMovies={setMovies} movies={movies}/>
            </div>

            <div className="listMovies">
                {
                x.length == 0 ? <h1>Not Found</h1> :  x.map((el,i,t)=> <CardMovie el={el}/>)
                }
            </div>
           
        </div>
    )
}

export default ListMovies