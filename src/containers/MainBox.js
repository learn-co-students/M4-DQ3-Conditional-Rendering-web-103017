import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			active: 'profile'
		}
	}

	setDetailsToDisplay = (arg) =>{
		if(arg){
			this.setState({active: arg},console.log(this.state.active))
		}
	}

	returnCorrectComponent = () =>{

		switch(this.state.active){
			case "photo":
				return <Photos/>
			case "cocktail":
				return <Cocktails/>
			case "pokemon":
				return <Pokemon/>
			default:
				return <Profile/>
		}
	}

	render (){

		/*

		Replace the code below! Depending on what menu item is selected in the menu,
		I should render either a Profile, Photos, Cocktails, or Pokemon
		component.Think of a way to track which menu item was selected.
		Which component should have state? Which component should have
		methods to control state? Where should these methods be called?

		*/

		let detailsToDisplay = <div>{this.returnCorrectComponent()}</div>

		return (
		<div>
			<MenuBar chageDisplay={this.setDetailsToDisplay}
				active={this.state.active}/>
			{detailsToDisplay}
		</div>
		)
	}

}

export default MainBox
