import React from 'react';
import {Link} from 'react-router-dom';
const UserItem =(props) =>{
	

		const { login,avatar_url}= props.user;
		return (
			<div>
			<div className="card text-center" style={{width: "18rem"}}>   
          <img src={avatar_url}  className="card-img-top" alt="..." />
          <h4>{login}</h4>
          <Link to={`/user/${login}` } className="btn btn-dark btn-sm my-1">More </Link>
            </div>
		    </div>
			
		)  
	
}

export default UserItem;