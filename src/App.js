import React from 'react';
import './App.css';
import { Card, Icon, Image, TableBody } from 'semantic-ui-react'
import Fors from './Form'
// import ListPage from './ListPage'
// import Post from './Post';
import { QueryRenderer} from 'react-relay'
import environment from './Environment'
const graphql = require('babel-plugin-relay/macro');
const AppQuery = graphql `
  query AppQuery {
    get {
      id
      firstname
      lastname
    }
  }
`

class App extends React.Component{
  render(){
    return(
      <QueryRenderer
      environment = {environment}
      query = {AppQuery}
      render = {({error,props})=>{
        if(error){
          return <div>{error.message}</div>;
        } else if(props){
          return (
            <>
            <Fors></Fors>
            <List arr={props.get}></List>
            </>
            
            
          )
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}
const List = (props)=>(
  props.arr.map((data)=>{
    return (
      <CardExampleCard key = {data.id} firstname={data.firstname} lastname={data.lastname}></CardExampleCard>
    );
  })
);
var tru = true;
const CardExampleCard = (props) => (
  <Card color="blue" raised={tru} centered={tru}>
    {/* <Image src={avatar} wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>{props.firstname}</Card.Header>
      <Card.Header>{props.lastname}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2019</span>
      </Card.Meta>
      
    </Card.Content>
   
  </Card>
)

export default App;
