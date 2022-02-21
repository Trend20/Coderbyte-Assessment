import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Contacts extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark" className='mt-3'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Tel</th>
        </tr>
        </thead>
        <tbody>
        {
            this.props.contactList.map(contact =>(
              <tr>
                <td>{contact.name}</td>
                <td>{contact.tel}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default Contacts;