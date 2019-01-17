import React  from 'react';
import {Link} from 'react-router-dom';


const Pirate = (props) => {

  const {firstName, lastName, age, ship, id} = props.pirate;

  return (
    <div className="component">
    <p className="name">
      <Link to= {"/pirates/" + id} className= "name">
      {firstName} {lastName}
     </Link>
    </p>
    <p> {age}</p>
    <p> {ship.name}</p>
    </div>
  )
}

export default Pirate;
