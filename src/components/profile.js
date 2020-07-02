import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {

    const redir = () =>{
        props.history.push('/')
    }
    return(
        <div>
           <Link to={{
               pathname: `${props.match.url}/posts`
           }}>Posts</Link>

            {redir()}
        </div>
    )
}

export default Profile;