import React from 'react';

const Modal = ({ show, onHide, contact }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onHide}>&times;</span>
        <h3>Contact Details</h3>
        <p>ID: {contact.id}</p>
        <p>Name: {contact.name}</p>
        <p>Numbers:</p>
        <ul>
          {contact.numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
