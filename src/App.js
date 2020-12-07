import React,{useState,useEffect} from "react";
import "./App.css";
import PasswordBlock from "./comp/PasswordBlock";
import Header from "./comp/Header";
import Add from "./comp/Add";
import db from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [password_block,setBlock] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsub = db.collection('/user/user1/password_block').onSnapshot((snapshot) =>
      setBlock(snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data(),
      }))
    )
    );
    return () =>{unsub();}
  }, []);

  return (  
    <div className="app">
        <div className="app__body">
          <Header />
          <div className="appSubBody" >
          {password_block.map(block=>(
            <PasswordBlock key={block.id} id={block.id} email={block.data.emailDB} password={block.data.passwordDB} website={block.data.websiteDB} />
          ))}
          </div>
          <Add/>
          {/* {add new password} */}
        </div>  
    </div>
  );
  
}

export default App;


