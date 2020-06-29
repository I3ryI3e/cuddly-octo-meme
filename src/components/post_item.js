import React from 'react';

const PostItem = (props) => {
    return(
        <div>
            {props.match.params.id} - ID number
        </div>
    )
}

export default PostItem;