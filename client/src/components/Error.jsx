import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/404.svg"

const Error = () => {
  return (
    <>
      <main className="container p-3">
        <section className="d-flex justify-content-evenly mt-5">
            <div>
<img src={image} alt=""  className="img-fluid error"/>
            </div>
        <div className="mt-4 text-center p-5">

        <h2>Oops..Error 404 !!!</h2>
        <p>Please go to main page</p>
        <Link to="/">Home</Link>
        </div>
        </section>
      </main>
    </>
  );
};

export default Error;