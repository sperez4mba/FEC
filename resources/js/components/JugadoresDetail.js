import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class JugadoresDetail extends Component {
	constructor() {

		super();
		//Initialize the state in the constructor
		this.state = {
			jugador: {},
		}
	}
	/*componentDidMount() is a lifecycle method
	* that gets called after the component is rendered
	*/
	componentDidMount() {
		/* fetch API in action */
		fetch('/api/jugadores/1')
			.then(response => {
				return response.json()
			})
			.then(jugador => {
				this.setState({ jugador })
			})
	}

	renderJugadores() {
		return (
			/* When using list you need to specify a key
			* attribute that is unique for each list item
			*/
			<div className='jugadorCard'>
				<div className='jugadorCardName'>
					{ this.state.jugador.nombre }
				</div>
				<div className='jugadorCardAvatar'>
					<img src={ "http://localhost:8000/svg/34.png" } />
				</div>
			</div>
		)
	}

	render() {
		/* Some css code has been removed for brevity */
		return (
			<div>
				{ this.renderJugadores() }
			</div>
		)
	}
}

export default JugadoresDetail

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
 * */

if (document.getElementById('root')) {
	ReactDOM.render(<JugadoresDetail />,
			document.getElementById('root'));
}
