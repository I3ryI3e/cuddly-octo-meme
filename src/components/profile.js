import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {
    return(
        <div>
           <Link to={{
               pathname: `${props.match.url}/posts`
           }}>Posts</Link>
        </div>
    )
}

export default Profile;