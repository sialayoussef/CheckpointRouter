import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardMovie=({el})=>{
    const [readMore, setReadMore] = useState(false);
    return(
     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title style={{textDecoration :"none", color :"black", fontWeight:'bold'}} as={Link} to={`/MovieDetails/${el.id}`}>{el.title}</Card.Title>
        <Card.Text>
        {readMore ? el.description: `${el.description.substring(0, 40)}...`}
        <button className={readMore ? "buttMoreRED" : "buttMoreGREEN"} onClick={()=> setReadMore(!readMore)}>{readMore ? "Show less" : "Show more"}</button>
          <br/>
          <Rating value={el.rating} name="read-only" readOnly />
        </Card.Text>
      </Card.Body>
    </Card>

    )
}

export default CardMovie