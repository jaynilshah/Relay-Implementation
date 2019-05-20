import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
const Fors = ()=>{
    return (
        <div id="form">
          <Segment inverted>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' name="firstname" placeholder='First name' />
                <Form.Input fluid label='Last name' name="lastname" placeholder='Last name' />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button color="blue" type='submit'>Submit</Button>
            </Form>
          </Segment>
          </div>
        )
}

export default Fors