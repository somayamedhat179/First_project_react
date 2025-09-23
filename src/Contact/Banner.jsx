import React from 'react'

function Banner() {
  return (
    <div className="m-5"  >
        <h5 className="badge bg-info w-75 h-50">Let's contact with us .....  </h5>
        <form className= "w-75">
            <label>Enter your Name: </label>
            <br></br>
            <input type="text" name="userName" placeholder='Enter your Name..' className="form form-control"/>
            <br></br>
            <label>Enter your Phone Number: </label>
            <br></br>
            <input type="text" name="phoneNumber" placeholder='Enter your Phone..  'className="form form-control"/>
            <br></br>
            <br></br>
            <input type="submit" value="Let's Contact" className='btn btn-primary'/>
        </form>
    </div>
  )
}

export default Banner