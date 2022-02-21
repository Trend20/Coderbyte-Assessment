import React, { Component } from 'react';
import Contacts from './components/Contacts';
import { Form, Button} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      contactList: [],
      name:'',
      tel: ''
    }
  }

  handleNameInputChange = (e) =>{
    this.setState({
      name: e.target.value,
    })
  }

  handleTelInputChange = (e) =>{
    this.setState({
      tel: e.target.value,
    })
  }

  onFormSubmit = (e) =>{
    e.preventDefault();

    const newContact = {
      name: this.state.name,
      tel: this.state.tel
    }

    this.setState(state => ({
      contactList: state.contactList.concat(newContact),
      name: '',
      tel: ''
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>Phone Book Application</h1>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Full Name"
            onChange={this.handleNameInputChange} 
            value={this.state.name} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" 
            placeholder="Phone Number" 
            onChange={this.handleTelInputChange} 
            value={this.state.tel}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
        </Form>

        <Contacts contactList={this.state.contactList} />
      </div>
    );
  }
}

export default App;