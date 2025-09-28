import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

function AllPrivacy() {
  const [text, setText] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => {
        return result.json();
      })
      .then((JSON) => {
        setText(JSON.products);
      });
  }, []);

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
          {text.map((element) => {
            return search === "" ? (
              <div className="col-md-4 text-center mb-4">
                <img src={element.images[0]} className="w-100"></img>
                <h5>{element.title}</h5>
                <h5>{element.category}</h5>
                <h5>{element.brand}</h5>
                <h5>{element.rating} of 5</h5>
                <h5>{element.price}$</h5>
                <h5>{element.id}</h5>
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
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllPrivacy;
