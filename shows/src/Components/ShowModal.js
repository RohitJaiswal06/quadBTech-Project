// ShowModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ShowModal = ({ showName, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Book Ticket Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          width: '300px',
          margin: 'auto',
          padding: '20px',
          height: '300px',
        }
      }}
    >
      <h2>Book Ticket for:  {showName}</h2>
      <form style={{textAlign:"center",padding:"10%"}}>
        <div style={{marginBottom:"10%"}}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div style={{marginBottom:"10%"}}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <button style={{marginRight:"10%"}} onClick={onClose}>Close</button>
        <button type="button" onClick={(e)=>{
            e.preventDefault();
        }}>Book Now</button>
      </form>
    </Modal>
  );
};

export default ShowModal;
