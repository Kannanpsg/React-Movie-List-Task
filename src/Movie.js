import { useState } from "react";
import { Counter } from "./Counter.js";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useHistory } from "react-router-dom";





export function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontweight: "bold",
  };

  const summaryStyles = {
    display: show ? "block" : "none",
  };

  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      
      <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐{rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "show"} description
      </button>
      {show ? <p className="movie-summary">{summary}</p> : ""}
      <CardActions>
      <Counter />
      </CardActions>
      </CardContent>
    </Card>
  );
}
