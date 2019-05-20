// import React from 'react'
// import Post from './Post';
// import { createFragmentContainer, graphql } from 'react-relay'
// class ListPage extends React.Component{
//   render(){
//     return(
//       <div>
//         <div>
//           {
//             this.props.User.allPosts.edges.map(({node}) => <Post post={node} />)
//           }
//         </div>
//       </div>
//     )
//   }
// }
// export default createFragmentContainer(
//   ListPage,
//   graphql`
//   fragment ListPage_viewer on ListPage {
//     allPosts{
//       edges{
//         node{
//           ...Post_post
//         }
//       }
//     }
//   }
//   `
// )