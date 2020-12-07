import React,{useState} from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { ArrowDropDownOutlined} from "@material-ui/icons";
import db from "../firebase";

function Header() {
  var us;
  db.collection('user').doc('user1').get().then(function(doc){
    const setUser = doc.data();
    us = setUser.master_emailDB;
    console.log(setUser.master_emailDB)
  });
  console.log(us);
  


  return (
    <div className="header">
      <div className="header_left">
        <span>Password Manager</span>
            {/* <div className="search_container">
                <SearchOutlined/>
                <input placeholder="Search" type="text"/>
            </div> */}
        <div className="header_right">
          <Avatar />
            <span>{us}</span>
          <IconButton><ArrowDropDownOutlined /></IconButton>
        </div>
      </div>
        
    </div>
  );
}

export default Header;
