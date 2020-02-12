import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar =(props)=> {
	
	
		return (
			<div>
				<nav className="navbar bg-primary">
				<h4>
				<i className={props.icon} />{props.title}
				</h4>
				<ul>
				<li>
				<Link to="/">Home </Link>
				</li>
				<li>
				<Link to="/about">About </Link>
				</li>
				</ul>
				</nav>
			</div>
		)
	
}
Navbar.defaultProps= {
		title: "Github Finder",
		icon: "fab fa-github"
	}
	 Navbar.propsTypes ={
		title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
	}
export default Navbar; 