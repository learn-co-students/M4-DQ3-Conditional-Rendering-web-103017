import React from 'react'

const MenuBar = (props) => {

      /*

      The 'a' tags below are the menu items. Think about the way a menu
      should work. When you click a menu item, the button typically becomes
      'active' to indicate that it is currently selected. How could we achieve
      this programatically? What other behavior do we expect when we click
      on a menu item? Do we need state in this component, and if not, how can
      this component be made aware of what is currently the active menu item?

      */

		let clickHandler = (event) => {
			props.chageDisplay(event.target.id)
		}

	return (
      <div onClick={clickHandler}className="ui four item menu">
            <a className={props.active === "profile" ? "item active" : "item" } id="profile">
            	<i className="user large icon"/>
            </a>

            <a className={props.active === "photo" ? "item active" : "item" } id="photo">
            	<i className="photo large icon"/>
            </a>

            <a className={props.active === "cocktail" ? "item active" : "item" } id="cocktail">
            	<i className="cocktail large icon"/>
            </a>

            <a className={props.active === "poke" ? "item active" : "item" } id="pokemon">
            	<i className=" themeisle large icon"/>
            </a>
      </div>
      )

}

export default MenuBar
