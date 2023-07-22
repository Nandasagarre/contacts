// Opening page, API call, Computing the averages of the temparatures, humidity, pressures...

import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Item from './item';
function Welcome() {

    const [Response, setResponse] = useState({});

    useEffect(() => {
        const url = 'https://noteworthywellinformedlocations--settipalle-nand.repl.co/';
        axios.post(url)
          .then(response => {
            //console.log(response.data);
            setResponse(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    const handleSubmit = function (e) {
      e.preventDefault();
      const form = e.target;
      const formJson = new FormData(form);
      const formData = Object.fromEntries(formJson.entries());
      console.log('search', formData);
      const createUrl = 'https://noteworthywellinformedlocations--settipalle-nand.repl.co/search';
        axios.post(createUrl, { formData })
          .then(response => {
            console.log('srsr',response.data)
            //alert('created the contact');
            //window.location.reload(true);
          })
          .catch(error => {
            console.error('eeror in searching:', error);
          });
    }

    const handleCreateNew = function (e){
      e.preventDefault();
      const form = e.target;
      const formJson = new FormData(form);
      const formData = Object.fromEntries(formJson.entries());

        let data = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            numbers: [formData.numb1, formData.numb2, formData.numb3]
        }
        const createUrl = 'https://noteworthywellinformedlocations--settipalle-nand.repl.co/create';
        axios.post(createUrl, { data })
          .then(response => {
            console.log(response.data)
            alert('created the contact');
            window.location.reload(true);
          })
          .catch(error => {
            console.error('Error creating contact:', error);
          });
      };
    return (
        <div>
            <div>
<div className="modal fade" id="add" tabIndex="-1" aria-labelledby="add" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create New Contact</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleCreateNew}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">First Name:</label>
            <input name='first_name'  type="text" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Last Name:</label>
            <input name='last_name' type="text" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input required name='email' type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number1:</label>
            <input required name="numb1" type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number2:</label>
            <input name="numb2" type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number3:</label>
            <input name="numb3" type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="modal-footer">
        <button type="submit" className="btn btn-primary">+Create</button>
      </div>
          </form>
      </div>

    </div>
  </div>
</div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light NavColor">
                <div className="container-fluid">
                    <a className="navbar-brand">MyContc</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link active" data-bs-toggle="modal" data-bs-target="#add" data-bs-whatever="@add"><i className="fa-solid fa-plus"></i>Add New</p>
                            </li>
                        </ul>
                        <form className="d-flex" id="search"
                            onSubmit={handleSubmit}>
                            <input min={4} className="form-control me-2" type="text" name="search" placeholder="Search contacts"
                                aria-label="Search"/>
                            <button className="btn btn-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {Response.contacts && Response.contacts.map(contact => (
                <div>
                    <Item key={contact._id} firstname={contact.first_name} lastname={contact.last_name} id={contact._id} email={contact.email} numbers={contact.numbers}/>
                </div>
        
      ))}
         </div>
    )
}

export default Welcome;
