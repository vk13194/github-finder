import React from 'react';
import PropTypes from 'prop-types'

class Navbar extends React.Component {
	static defaultProps= {
		title: "Github Finder",
		icon: "fab fa-github"
	}
	static propsTypes ={
		title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
	}
	render() {
		return (
			<div>
				<nav className="navbar bg-primary">
				<h4>
				<i className={this.props.icon} />{this.props.title}
				</h4>
				</nav>
			</div>
		)
	}
}

export default Navbar 