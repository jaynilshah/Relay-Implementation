import React from 'react';
class Post extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.post.firstname}</div>
                <div>{this.props.post.lastname}</div>
            </div>
        )
    }
}
export default Post