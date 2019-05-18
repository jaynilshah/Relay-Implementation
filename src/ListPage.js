import React from 'react'
import Post from './Post';
const mockPostData = [
  {
    node:{
      id:"1",
      firstname: "Star",
      lastname : "Star"
    }
  },
  {
    node:{
      id: "2",
      firstname : "alpha",
      lastname : "beta"
    }
  }
]
class ListPage extends React.Component{
  render(){
    return(
      <div>
        <div>
          {mockPostData.map(({node})=>
            <Post key={node.id} post={node}></Post>
          )}
        </div>
      </div>
    )
  }
}
export default ListPage