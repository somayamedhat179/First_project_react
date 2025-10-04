import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const AllSingleProduct = () => {
  const { id } = useParams();
  const [Text, setText] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => result.json())
      .then((element) => setText(element.products));
  }, []);

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <div className="container my-5">
        <div className="row justify-content-center">
          {Text.map((element) => {
            return element.id == id ? (
              <div className="col-md-8" key={element.id}>
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img
                        src={element.images[0]}
                        className="img-fluid h-100"
                        alt={element.title}
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                      <h3 className="fw-bold mb-3">{element.title}</h3>
                      <p className="text-muted mb-2">
                        <strong>Category:</strong> {element.category}
                      </p>
                      <p className="text-muted mb-2">
                        <strong>Brand:</strong> {element.brand}
                      </p>
                      <p className="text-warning mb-2">⭐ {element.rating} / 5</p>
                      <h4 className="text-success fw-bold mb-3">${element.price}</h4>
                      <p className="text-secondary">
                        <small>ID: {element.id}</small>
                      </p>
                      <Link to="/products" className="btn btn-primary mt-3 w-100 rounded-3">
                        Back to Products Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllSingleProduct;
