import React from 'react';
import Pirate from './Pirate.js';


const PirateList = (props) => {


	console.log(props.pirates);

	const pirates = props.pirates.map((pirate) => {
		return(
			<li key={pirate.id} className="component-item">
				<Pirate pirate={pirate}/>
			</li>
		)
	})


	return (
		<ul className= "component-list">

			{pirates}

	 </ul>

	)
}
 export default PirateList;
