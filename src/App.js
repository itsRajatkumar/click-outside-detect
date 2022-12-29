import { useRef,useState } from "react";
import OutsideClickDetect from "./components/click-outside-detect";

function App() {
  const [click, setClick] = useState(false)
  const div1Ref = useRef();
  const changeColor = ()=>{
    setClick(true)
    setTimeout(() => {
      setClick(false)
    }, 3000);
  }

  OutsideClickDetect(div1Ref,changeColor)
  return (
    <div style={{height:"100vh",width:"100vw", display:"flex",justifyContent:"space-between", alignItem:"center"}}>
      <div ref={div1Ref} style={{height:"100vh",width:"40vw", display:"flex",justifyContent:"space-between", alignItem:"center"}}>
        click here
      </div>
      <div style={{height:"100vh",width:"40vw", display:"flex",justifyContent:"space-between", alignItem:"center"}}>
        Div 2
        {click && <h1>Click out side</h1>}
      </div>
    </div>
  );
}

export default App;
