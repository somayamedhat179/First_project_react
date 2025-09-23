import React from 'react'

// conditi ? true : false ;
function Cart({ allData }) {
 // عشان اكتب كود jsx ==> return(<div></div>) 
  return(
    <div className="m-5" style={{border:"2px solid #31bde0ff",padding:"20px",boxShadow:"0 0 5px 5px rgba(140, 175, 238, 0.8)"}}>
      {allData.map((item) => {
        return item.id >= 3 ?(
          <div>
            <h2>My Name is {item.firstName} {item.lastName} </h2>
            <h5>My favorite color is {item.color} </h5>
            <h6>My id {item.id} </h6>
            <hr style={{background:"#31bde0ff",height:"2px",boxShadow:"0 0 5px 5px rgba(140, 175, 238, 0.8)"}}></hr>
          </div>
        ): item.id == 1 ? (
    <div>
      <h2>ID for this person  equal to 1 </h2>
      <hr style={{background:"#31bde0ff",height:"2px",boxShadow:"0 0 5px 5px rgba(140, 175, 238, 0.8)"}}></hr>
    </div>
  ) : (
    <div>
      <h2>Not in Range</h2>
      <hr style={{background:"#31bde0ff",height:"2px",boxShadow:"0 0 5px 5px rgba(140, 175, 238, 0.8)"}}></hr>
    </div>
  );

      })}
    </div>
  ) 
}

export default Cart
