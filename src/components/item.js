import React from 'react';
import axios from 'axios';


const Item = ({ firstname, lastname, id,  email, numbers}) => {

    const handleDelete = (contact_id) => {
        const deleteUrl = 'https://noteworthywellinformedlocations--settipalle-nand.repl.co/delcontact';
        axios.post(deleteUrl, { contact_id })
          .then(response => {
            alert('Deleted the contact',response.data);
            window.location.reload(true);
          })
          .catch(error => {
            console.error('Error deleting contact:', error);
          });
      };

      const handleSave = function (e){
        e.preventDefault();
        const form = e.target;
        const formJson = new FormData(form);
        const formData = Object.fromEntries(formJson.entries());
        let save = {
            id: id,
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            numbers: [formData.numb1, formData.numb2, formData.numb3]
        }

        console.log("debug",save)
        const editUrl = 'https://noteworthywellinformedlocations--settipalle-nand.repl.co/edit';
        axios.post(editUrl, { save })
          .then(response => {
            console.log(response.data)
            alert('Updated the contact');
            window.location.reload(true);
          })
          .catch(error => {
            console.error('Error creating contact:', error);
          });
      };

  return (
<>
<div className="modal fade" id={`x${firstname}`} tabIndex="-1" aria-labelledby="add" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit it</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">First Name:</label>
            <input name='first_name' type="text" className="form-control" defaultValue={firstname}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Last Name:</label>
            <input name='last_name' type="text" className="form-control" defaultValue={lastname}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input required name='email'  type="text" className="form-control" defaultValue={email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number1:</label>
            <input required name="numb1" type="text" className="form-control" defaultValue={numbers[0]}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number2:</label>
            <input name="numb2" type="text" className="form-control" defaultValue={numbers[1]}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Number3:</label>
            <input name="numb3"  type="text" className="form-control" defaultValue={numbers[2]}/>
          </div>
          <div className="modal-footer">
        <button type="submit" className="btn btn-primary">Save?</button>
      </div>
          </form>
      </div>

    </div>
  </div>
</div>



    <div className="d-flex contact-item mb-3">
  <div className="p-2 bd-highlight">First Name: {firstname} <br/> Last Name: {lastname} <br/> Email: {email} <br/> Numbers: {numbers.filter(num => num !== null).join(", ")}</div>
   <div className="ms-auto p-2">
   <div data-bs-toggle="modal" data-bs-target={`#x${firstname}`}  data-bs-whatever="@edit"><i className="fa-solid fa-pen-to-square"></i></div>
  <div className="mt-3" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i></div>
   </div>

</div>
        
</>

  );
};

export default Item;