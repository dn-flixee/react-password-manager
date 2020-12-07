
import { AddCircle } from '@material-ui/icons'
import React,{useState} from 'react';
import "./Add.css";
import db from "../firebase";
import {Modal} from 'react-bootstrap';
var CryptoJS = require("crypto-js");

function Add(){
        const[website,setWebsite] = useState("")
        const[email,setEmail] = useState("")
        const[password,setPassword] = useState("")
    
        const websiteInput = e => {
            setWebsite( e.target.value);
            };
        const emailInput = e => {
            setEmail(e.target.value);
        };
        const passwordInput = e => {
            setPassword(e.target.value);
        };
        var cipherPassword = CryptoJS.AES.encrypt(password, 'my-secret-key@123').toString();
        var cipherEmail = CryptoJS.AES.encrypt(email, 'my-secret-key@123').toString();
        var cipherWebsite = CryptoJS.AES.encrypt(website, 'my-secret-key@123').toString();

        const savePassword = () =>{
            console.log(website,email,password)
            db.collection("/user/user1/password_block").add({
                passwordDB: cipherPassword,
                websiteDB: cipherWebsite, 
                emailDB: cipherEmail} );
                handleClose();
                setWebsite("");
                setPassword("");
                setEmail("");
            }

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
    return (
            <div>
                <div onClick={handleShow} className="add">
                    <AddCircle/>    
                </div>
                <Modal show={show} onHide={handleClose}>
                <div className="overlay">
                <div className="AddPassword">
                    <div className="headerBG" >
                        <span className="addPassword">Add Password</span>
                    </div>
                    <span className="website">Website:</span>
                    <input type="text" className="textBox_website" onChange={e => websiteInput(e)} value={website} name="website"></input>
                    <span className="email">E-mail/Username:</span>
                    <input type="email" className="textBox_email" onChange={e => emailInput(e)} value={email} name="email"></input>
                    <span className="password">Password:</span>
                    <input type="password" className="textBox_password" onChange={e => passwordInput(e)} value={password} name="password"></input>
                    <button className="cancelBG" onClick={handleClose} >Cancel</button>
                    <button className="saveBG" onClick={savePassword}>Save</button>
                </div>
                </div>
                </Modal>
            </div> 
    )
}
export default Add;
