import {useState} from "react";
import Profile from "./components/profile.jsx";
import Comp1 from "./components/comp1.jsx";
import Api from "./components/api.jsx"
function App() {
  const [count, setCount] = useState(0)
    alert("ur done lil bro");
    navigator.vibrate && navigator.vibrate(200);
  return(
      <>


          {/*<Profile  name = {"Aravind"} email = {"AravindBudaraju@gmail.com"} age ={12}/>*/}
          {/*<Profile name = {"lol"} email = {"AravindBudaraju@gmail.com"} age ={12}/>*/}
          {/*<Profile name = {"lol"} email = {"AravindBudaraju@gmail.com"} age ={12}/>*/}
          {/*<Profile name = {"lol"} email = {"AravindBudaraju@gmail.com"} age ={12}/>*/}
          {/*<Comp1 >*/}
          {/*    <Profile name = {"Aravind"} email = {"AravindBudaraju@gmail.com"} age ={12}/>*/}
          {/*</Comp1>*/}
          <Api a = {"fuck u"}/>


      </>

  )


}

export default App
