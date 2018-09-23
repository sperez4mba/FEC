import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class JugadoresList extends Component {
	constructor() {

		super();
		//Initialize the state in the constructor
		this.state = {
			jugadores: [],
		}
	}
	/*componentDidMount() is a lifecycle method
	* that gets called after the component is rendered
	*/
	componentDidMount() {
		/* fetch API in action */
		fetch('/api/jugadores')
			.then(response => {
				return response.json()
			})
			.then(jugadores => {
				//Fetched product is stored in the state
				this.setState({ jugadores })
			});
	}

	renderJugadores() {
		return this.state.jugadores.map(jugador => {
			return (
				/* When using list you need to specify a key
				* attribute that is unique for each list item
				*/
				<div key={jugador.id} className='jugadorCard'>
					<div className='jugadorCardName'>
						{ jugador.nombre }
					</div>
					<div className='jugadorCardAvatar'>
						<img src={ "svg/" + jugador.avatar_id + ".png" } />
					</div>
				</div>
			);
		})
	}

	render() {
		/* Some css code has been removed for brevity */
		return (
			<div>
				{ this.renderJugadores() }
			</div>
		);
	}
}

export default JugadoresList;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
 * */

if (document.getElementById('root')) {
	ReactDOM.render(<JugadoresList />,
			document.getElementById('root'));
}
