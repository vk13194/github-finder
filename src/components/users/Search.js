import React from 'react'
import PropTypes from 'prop-types'
export class Search extends React.Component {
	 state={
	 	text:""
	 }
    onChange= (e)=>{
           this.setState({text:e.target.value});
           //[e.target.name]:e.target.value
    }
    static propTypes={
    	searchUsers:PropTypes.func.isRequired,
    	clearUsers:PropTypes.func.isRequired,
    	showClear:PropTypes.bool.isRequired,
    	setAlert:PropTypes.func.isRequired
    }
    onSubmit=(e) =>{
    	e.preventDefault();
    	if(this.state.text===''){
    		this.props.setAlert('please enter something', 'danger');
    	}else {
    	this.props.searchUsers(this.state.text);
    	this.setState({text:''})
    }
    }

	render() {
		const {showClear, clearUsers}=this.props;
		return (
			<div>
				<form className="form"  onSubmit={this.onSubmit}> 
				<input type="text" name="text" 
				placeholder="Serch User....." className="form-control" 
				value={this.state.text} onChange={this.onChange}/>
				<input type="submit" value="Search" className="btn btn-dark btn-block"/>

				</form>
				{showClear &&
					<button className="btn btn-light btn-block" 
					onClick={clearUsers}>
				Clear</button>}
				
			</div>
		)
	}
}

export default Search;