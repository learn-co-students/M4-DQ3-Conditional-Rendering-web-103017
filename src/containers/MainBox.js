import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	constructor() {
		super();

		this.state = {
			active: 'profile'
		}
	}

	handleChange = (event) => {
		console.log(event);
		this.setState({
			active: event.target.id,
		})
	}

	render (){
		console.log(this.state);
		/*

		Replace the code below! Depending on what menu item is selected in the menu,
		I should render either a Profile, Photos, Cocktails, or Pokemon
		component.Think of a way to track which menu item was selected.
		Which component should have state? Which component should have
		methods to control state? Where should these methods be called?

		*/
		let detailsToDisplay = <div>Hi, I'm a div!</div>

		if (this.state.active === 'profile') {
			detailsToDisplay = <Profile />
		}
		else if (this.state.active === 'photo') {
			detailsToDisplay = <Photos />
		}
		else if (this.state.active === 'cocktail') {
			detailsToDisplay = <Cocktails />
		}
		else if (this.state.active === 'pokemon') {
			detailsToDisplay = <Pokemon />
		}


		return (
		<div>
			<MenuBar
				activateButton={this.handleChange}
				active={this.state.active}
			/>
			{detailsToDisplay}
		</div>
		)
	}

}

export default MainBox
