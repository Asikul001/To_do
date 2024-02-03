import React, { useState } from "react";
import "./index.css";
import ToDo from './todo';
function App() {
  const [current, update] = useState('');
  const [arrdata, list] = useState([]);
  const d1 = new Date();
  let date = d1.toLocaleDateString();
  const time = d1.toLocaleTimeString();


  const click = (event) => {
    const data = event.target.value;
    update(data);
  }
  
  function addlist(event) {
    event.preventDefault();
    if (current === '') {
      alert('Plz Enter Data');
    }
    else {
      list((event)=>
      {
        return [current,...event]
      });
      update("");
    }

  }

  function press(val)
  {
     const put = arrdata.filter((find,get)=>get!==val);
     list(put);
  }
  return (
    <React.Fragment>
      <div id="a1" className="c1" style={{ border: '2px solid white' }}>
        <div className="a2">
          <h1>TO DO APP</h1>
        </div>
        <div style={{ height: '50px', backgroundColor: '#7E6363', marginTop: '0px' }}>
          < h4 style={{ margin: '0px', padding: '10px' }}>
            <span className="a3">Date : {date} </span>
            <span className="a3">Date : {time}</span>
          </h4>
        </div>
        <div style={{ height: '50px', backgroundColor: '#503C3C', marginTop: '0px' }}>
          <form onSubmit={addlist}>
            <span style={{ paddingLeft: '10px', paddingTop: '20px' }}>
              <input name='Input' placeholder="Add a Item" className="a4" value={current} onChange={click} />
            </span>
            <span><button className="z1" type="submit">Click</button></span>
          </form>
        </div>
        <div id='select'>
           <ul>
            {arrdata.map((val,index)=>
            {
              return(
               <ToDo text={val}
                id={index}
                name={index}
                button={press}
               />
              )
            })}
           </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default App;