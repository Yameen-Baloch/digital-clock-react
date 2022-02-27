import React, { useState } from "react";

const App = () =>{

  let time = new Date().toLocaleTimeString();

  const [Ctime, setTime] = useState(time);

  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(UpdateTime, 1000)
  return <h1>{Ctime}</h1>
}

export default App;