import {useEffect, useState} from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { borderRadius } from "@mui/system";



export default function App() {
 console.log("Hi");




/* For Using Api
useEffect(() => {
fetch("https://6166c4df13aa1d00170a6708.mockapi.io/movies")
.then((data) => data.json())
.then((mvs) => setMovies(mvs));
}, []);

*/








 const INITIAL_MOVIES = [
{name:"Narnia",
poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDZfHuwu1bpLKr5CfC-_sN3OpYLsF_EQIyw&usqp=CAU",
rating: 8.6,
summary: `Nice Movie`,
},
{
  name:"bahubali",
poster:"https://im.rediff.com/movies/2015/jul/10bahubali.jpg?w=670&h=900",
rating: 8.6,
summary: `Nice Movie`,
},
{
name:"2.0",
poster:"https://i.ytimg.com/vi/_qOl_7qfPOM/maxresdefault.jpg",
rating: 8.6,
summary: `Nice Movie`,
},
{
name:"Free Guy",
poster:"https://lumiere-a.akamaihd.net/v1/images/hb_20cs_freeguy_mobile_21435_4db552ec.jpeg",
rating: 8.6,
summary: `Nice Movie`,
},
{name:"Avengers",
poster:"https://image.api.playstation.com/vulcan/img/cfn/11307mfB_C9XcqTOrc2UYKVwNS-Im4Ncsv0WDC50BU-j1hyUXTfzKxgxKSMz_mbBtVoQmuvDLHzPclp__egUa2LmmHoD6uEO.png",
rating: 8.6,
summary: `Nice Movie`,
},
{
name:"Iron Man",
poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4432/674432-v",
rating: 8.6,
summary: `Nice Movie`,
},
{
name:"Ratatouille",
poster:"https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
rating: 8.6,
summary: `Nice Movie`,
}
];








const [movies, setMovies] = useState(INITIAL_MOVIES);
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])










return(<div className ="App">
   <nav>
    <Link to="/"><Button variant="contained">Home</Button></Link> 
<Link to="/movies"><Button variant="contained">Movies</Button></Link> 
<Link to="/add-movies"><Button variant="contained">Add Movies</Button></Link> 
<Link to="/tic-tac-toe"><Button variant="contained">Game</Button></Link> 
<Link to="/color-game"><Button variant="contained">Color Game</Button></Link> 
</nav>
<Switch>
  <Route path="/movies">
    <MovieList movies = {movies}  />
    </Route>
  <Route path="/add-movies">
    <AddMovie movies = {movies} setMovies = {setMovies}/>
    </Route>

    <Route path="/tic-tac-toe">
    <TicTacToe/>
    </Route>

  <Route path="color-game">
 <AddColor />
  </Route>
  <Route path="/"><p>Welcome to my page!!!</p>  <img src="data:image/png;base64,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" alt="Trulli" class="center"></img></Route>
  </Switch>

</div>
);
}

function AddMovie({movies, setMovies})
{  
const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");

const addMovie = () => {
  const newMovie = {
    name,
    poster,
    rating,
    summary,};
    console.log(newMovie);
setMovies([...movies, newMovie]);
  };

return(
    <div className="add-movie-form">
      <TextField 
      value={name}
      onChange={(event) => setName(event.target.value)} 
      label="Name"
      variant="standard" />
      <TextField 
      value={poster}
      onChange={(event) => setPoster(event.target.value)} 
      label="poster"
      variant="standard" />
      <TextField 
      value={rating}
      onChange={(event) => setRating(event.target.value)} 
      label="rating"
      variant="standard" />
      <TextField 
      value={rating}
      onChange={(event) => setSummary(event.target.value)} 
      label="summary"
      variant="standard" />
<Button onClick={addMovie} variant="outlined">
  Add movie
</Button>


  </div>
);
}



function AddColor() { 
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor : color};
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
return(
  <div>
<div className="add-color-form">
<TextField 
      value={color}
      onChange={(event) => setColor(event.target.value)}
      style={styles} 
      label="Enter a color"
      variant="standard" />

      <Button onClick={() => setColors([...colors, color])}
      variant="outlined">
        Add color
      </Button>
      </div>
 {colors.map((clr, index) => (
  <ColorBox key={index} color={clr}/>
 ))}
    </div>
);
}

function ColorBox({ color })
{
  const styles = {
  backgroundColor: color, 
  height: "25px", 
  width:"250px",
  marginTop: "10px",
  };
  return <div style={styles}></div>;
}




function TicTacToe()
{
  
  const[board, setBoard] = useState([
null,
null,
null,
null,
null,
null,
null,
null,
null,

  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
const lines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,60],
];

for(let i=0; i<lines.length; i++)
{
  const [a,b,c] = lines[i];
  if (board[a] === null && board[a] === board[b] && board[b] === board[c])
  {
    console.log("winner is", board[a]);
    return board[a];
  
  }
}
return null;
};

const winner = decideWinner(board);

const handleClick = (index) => {

  if (winner===null&& !board[index])
  {
    const boardCopy = [...board];
    boardCopy[index] = isXTurn ? "X" : "0";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
  }
};

return(
<div className ="full-game">
  <div className="board">
{board.map((val, index) => (
  <GameBox val = {val} onPlayerClick={()=> handleClick(index)} />
))}

</div>
{winner ? <h2>Winner is: {winner}</h2>: ""}
  </div>
);
}







function GameBox({ onPlayerClick, val})
{
const styles = { color: val === "X" ? "green" : "red" };
return(
  <div style = {styles} onClick={onPlayerClick} className="game-box">

{val}
</div>
);
}














