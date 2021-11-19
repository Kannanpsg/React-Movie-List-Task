import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

function Counter()
{
  const[like, setLike] = useState(0);
  const[disLike, setDisLike] = useState(0);
 

 
 
 return(
<div className = "counter-container">
<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<button className="Likes-Dislikes" onClick={() => setLike( like+1 )}>
👍{like}
</button>
<button className="Like-dislikes"
onClick={() => setDisLike( disLike+1 )}>
👎{disLike}
</button>
</div>
  );
}
export {Counter};