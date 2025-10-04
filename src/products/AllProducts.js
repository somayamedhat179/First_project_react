import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

import { apiValue } from "../Data/AllData";

function AllPrivacy() {

  const [search, setSearch] = useState("");
  const data = useContext(apiValue) ;


  const getSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <input onChange={getSearch} className="form-control pl-3" placeholder="Search"></input>
          </div>
          {data.map((element) => {
            return search === "" ? (
              <div className="col-md-4 text-center mb-4">
                <img src={element.images[0]} className="w-100"></img>
                <h5>{element.title}</h5>
                <h5>{element.category}</h5>
                <h5>{element.brand}</h5>
                <h5>{element.rating} of 5</h5>
                <h5>{element.price}$</h5>
                <h5>{element.id}</h5>
                <Link to={`/singleProduct/${element.id}`} className="btn btn-dark" >Details</Link> 
              </div>
            ) : element.id == search ? (
              <div className="col-md-4 text-center mb-4">
                <img src={element.images[0]} className="w-100"></img>
                <h5>{element.title}</h5>
                <h5>{element.category}</h5>
                <h5>{element.brand}</h5>
                <h5>{element.rating} of 5</h5>
                <h5>{element.price}$</h5>
                <h5>{element.id}</h5>
                <Link to={`/singleProduct/${element.id}`} className="btn btn-dark" >Details</Link> 
              </div>
            ) : element.title.toLowerCase().includes(search.toLowerCase())? (
              <div className="col-md-4 text-center mb-4">
                <img src={element.images[0]} className="w-100"></img>
                <h5>{element.title}</h5>
                <h5>{element.category}</h5>
                <h5>{element.brand}</h5>
                <h5>{element.rating} of 5</h5>
                <h5>{element.price}$</h5>
                <h5>{element.id}</h5>
                <Link to={`/singleProduct/${element.id}`} className="btn btn-dark" >Details</Link> 
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllPrivacy;
