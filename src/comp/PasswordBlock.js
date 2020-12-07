import {IconButton } from "@material-ui/core";
import { Edit,  LockOpen } from "@material-ui/icons";
import React,{useState} from "react";
import "./PasswordBlock.css";
import db from "../firebase";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' 
import { Dropdown,Modal } from 'react-bootstrap';
var CryptoJS = require("crypto-js");

function PasswordBlock({email,password,website,id}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[websiteEdit,setWebsite] = useState("")
  const[emailEdit,setEmail] = useState("")
  const[passwordEdit,setPassword] = useState("")

  //Decryption
  var bytes = CryptoJS.AES.decrypt(email, 'my-secret-key@123');
  var decryptedEmail = bytes.toString(CryptoJS.enc.Utf8);
  
  var bytes2 = CryptoJS.AES.decrypt(website, 'my-secret-key@123');
  var decryptedWebsite = bytes2.toString(CryptoJS.enc.Utf8);

  var bytes1 = CryptoJS.AES.decrypt(password, 'my-secret-key@123');
  var decryptedPassword = bytes1.toString(CryptoJS.enc.Utf8); 
  
  //Storing input value in var
  const websiteInput = e => {
      setWebsite( e.target.value);
      };
  const emailInput = e => {
      setEmail(e.target.value);
  };
  const passwordInput = e => {
      setPassword(e.target.value);
  };

  const pass = () =>{ 
    alert("Password is " + decryptedPassword) ;
    console.log("Password act");
  }
  //Function to delete password block
  const del = () => {
    db.collection("/user/user1/password_block").doc(id).delete();}
  
  //Function to edit password block
  const editPassword = () => {
    var cipherPassword = CryptoJS.AES.encrypt(passwordEdit, 'my-secret-key@123').toString();
    var cipherEmail = CryptoJS.AES.encrypt(emailEdit, 'my-secret-key@123').toString();
    var cipherWebsite = CryptoJS.AES.encrypt(websiteEdit, 'my-secret-key@123').toString(); 
    db.collection("/user/user1/password_block").doc(id).set({
      passwordDB: cipherPassword,
      websiteDB: cipherWebsite, 
      emailDB: cipherEmail} );
      handleClose();
  }

  //Function for Submit Modal
  const delAlert = () =>{
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: (del) 
        },
        {
          label: 'No',
          onClick: ("")
        }
      ]
    })
  }
  return (
    <div>
      <div className="block">
          <div className="innerBlock" >
            <IconButton onClick={pass}><LockOpen /></IconButton>
          </div>
          <div className="bottomBlock">
            <div className="bottomBlock1">
              <span className="text_website">{decryptedWebsite}</span><span className="text_email">{decryptedEmail}</span>
            </div>
            <div className="bottomBlock2" >
              <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <Edit/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                  <Modal show={show} onHide={handleClose}>
                    <div className="overlay">
                    <div className="AddPassword">
                    <div className="headerBG" >
                        <span className="addPassword">Edit Password</span>
                    </div>
                    <span className="website">Website:</span>
                    <input type="text" className="textBox_website" onChange={e => websiteInput(e)} value={websiteEdit} name="websiteEdit" placeholder={decryptedWebsite}></input>
                    <span className="email">E-mail/Username:</span>
                    <input type="email" className="textBox_email" onChange={e => emailInput(e)} value={emailEdit} name="emailEdit" placeholder={decryptedEmail}></input>
                    <span className="password">Password:</span>
                    <input type="password" className="textBox_password" onChange={e => passwordInput(e)} value={passwordEdit} name="passwordEdit" placeholder={decryptedPassword}></input>
                    <button className="cancelBG" onClick={handleClose} >Cancel</button>
                    <button className="saveBG" onClick={editPassword}>Edit</button>
                </div>
                </div>
                  </Modal>
                  <Dropdown.Item onClick={delAlert}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>  
          </div>
        </div>
    </div>
);
}

export default PasswordBlock;
