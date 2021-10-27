import { useState } from "react";
import React from 'react';
import {Button,Modal} from 'react-bootstrap'
import { editTask } from "../JS/actions/task";
import { useDispatch } from 'react-redux'


function Edit({el}) {
    const [show, setShow] = useState(false);
    const [newEdite, setNewEdite] = useState(el.description)
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editTask(el.id, newEdite));
        setNewEdite("");
        setShow(false)};
    
  
    return (
      <>
        
        <button style={{margin:'5px'}} onClick={handleShow} >Edite</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type="text"  onChange={(e)=>setNewEdite(e.target.value)}  value={newEdite}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Edit;