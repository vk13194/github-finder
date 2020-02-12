import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import {Link} from 'react-router-dom';
export class User extends React.Component {
	componentDidMount(){
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}
	static propTypes ={
		loading: PropTypes.bool,
		user:PropTypes.object.isRequired,
		getUser:PropTypes.func.isRequired,
		getUserRepos:PropTypes.func.isRequired,
		repos:PropTypes.array.isRequired,
	}
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			company,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable 
		} = this.props.user;
		const {loading}= this.props;
		if(loading) return <Spinner />;  
		return (

			<Fragment>
				<Link to="/" className="btn btn-light">Back </Link>
				Hireable:{' '}
				{
					hireable? <i className="fas fa-check text-success"/>:
					<i className="fas fa-times-circle text-danger "/>
				}
				<div className="card grid-2">
				<div className="all-center"> 
				<img src={avatar_url} className="round-img" alt="" 
				style={{width:"200px"}}/>
				<h4>{name} </h4>
				<p>Location:{location} </p>

				</div >
				<div>
				{bio && (<Fragment> 
					<h3> Bio</h3>
					<p> {bio}</p>
					</Fragment>)}
					<a href={html_url} className="btn btn-dark my-1">visit Githubprofile </a>
					<ul>
					<li> 
					{login && <Fragment> 
						<strong> Username:</strong>{login}
						</Fragment>}
					</li>
					<li> 
					{company && <Fragment> 
						<strong> Company:</strong>{company}
						</Fragment>}
					</li>
					<li> 
					{blog && <Fragment> 
						<strong> Blog:</strong>{blog}
						</Fragment>}
					</li>
					</ul>
				</div>
				</div>

				<div className="card ">
				<div className='row'>
				<div className="col">
				<div className="badge badge-primary"> Followers:{followers}</div>
				</div>
				<div className="col">
				<div className="badge badge-success"> Following:{following}</div>
				</div>
				<div className="col">
				<div className="badge badge-danger"> Public Repos:{public_repos}</div>
				</div>
				<div className="badge badge-dark"> Public Gists:{public_gists}</div>
				<div className="col">
				</div>
				</div>
				</div>
				<Repos repos={this.props.repos} />
			</Fragment>
		)
	}
}

export default User;