import PropTypes from "prop-types";
import { useState } from "react";
function Curse(props){
    const [purchased, setpurchased] = useState(false);
    function BuyCourse( discount){
        console.log(props.name,"purchased with",discount,"% discount");
        setpurchased(true);
        console.log(purchased);
    }
    return(
    <div className="card">
        <img src={props.image} alt={props.name}></img>
        <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={(event)=>{BuyCourse(30);}}>Buy now</button>
        <button onClick={()=>props.delete(props.id)}>delete</button>
        <p>{purchased?"already purchased":"Get It Now"}</p>
        </div>
    </div>
    );
}
Curse.PropTypes={
    image:PropTypes.string,
    name:PropTypes.string,
    price:PropTypes.int
}
export default Curse