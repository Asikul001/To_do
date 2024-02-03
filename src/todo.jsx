import React from "react";
function todo(val)
{
    return(
        <React.Fragment>
        <div style={{display:'flex',margin:'5px'}} className='d1'>
        <button className='z2' onClick={()=>{val.button(val.id)}} ></button>
        <li style={{paddingTop:'5px',paddingLeft:'10px'}}>{val.text}</li>
        </div>
        </React.Fragment>
    )
}
export default todo;