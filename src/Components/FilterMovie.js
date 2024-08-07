import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const FilterMovie=({setTextLive,setRate,textLive,rate})=>{
    const handleReset=()=>{
        setTextLive('')
        setRate(0)
    }
    return(
        <div className='filterMovie'>
            <input value={textLive} type="text" onChange={(e)=>setTextLive(e.target.value)}/>
            <Rating value={rate}  name="simple-controlled" onChange={(e)=>setRate(e.target.value)}/>
            <Button onClick={handleReset} variant="outline-secondary">Reset</Button>
        </div>
    )
}

export default FilterMovie