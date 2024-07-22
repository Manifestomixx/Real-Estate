import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaCrown } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInSchema } from "../utility/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

const SignIn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsReveal(!isReveal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const handleSignIn = async (data) => {
    console.log(data);
    setIsClicked(true);

    try {
      const request = await fetch("https://real-estate-j4gr.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      console.log(response);

      if (!response.success) {
        toast.error(response.message || "Login failed. Please try again.");
      } else {
        toast.success(response.message || "Login successful!");

        // Show success toast and delay navigation
        localStorage.setItem("clientToken", response.user.token);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/Hero");
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsClicked(false);
    }
  };

  const btnText = isClicked || loading ? <span className="loader"></span> : "Sign In";

  return (
    <>
      <main className="bg">
        <section className="row">
          <div className="col-lg-6 form">
            <div className="px-3 top">
              <h1 className="top">Welcome Back to BetaHouse!</h1>
              <p className="top sm-text">Let's get started by filling out the information below</p>

              <Form onSubmit={handleSubmit(handleSignIn)}>
                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" {...register("email", { required: true })} />
                  <p className="text-danger error-text">
                    {errors.email?.message}
                  </p>
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type={isReveal ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} />
                  <p className="text-danger error-text">
                    {errors.password?.message}
                  </p>
                  <p className="text-secondary position-absolute top-0 end-0 p-3 my-5 translate-middle-y" role="button" onClick={handleToggle}>
                    {isReveal ? <FaRegEyeSlash /> : <FaRegEye />}
                  </p>
                </Form.Group>

                <div className="d-md-flex justify-content-between">
                  {/* checkbox */}
                  <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" {...register("checkbox", { required: true })}/>
                    <p className="text-danger error-text">
                    {errors.password?.message}
                  </p>
                    <p className="check-text">
                      I agree to <span className="text-success">Terms of Service</span> and{" "}
                      <span className="text-success">Privacy Policies</span>
                    </p>
                  </Form.Group>
                  <Link to="forgotpassword" className="text-decoration-none text-danger">
                    <p className="check-text">Forgot Password</p>
                  </Link>
                </div>

                {/* button */}
                <Button
                  type="submit"
                  className="w-100 Btn btn-lg text-white btn-success"
                  disabled={isSubmitting || loading}
                >
                  {btnText}
                </Button>
                <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                  <span className="lineL"></span> Or
                  <span className="lineR"></span>
                </div>

                {/* button 2 */}
                <button className="btn w-100 border-dark btn-lg mt-3 d-flex gap-2 justify-content-center align-items-center">
                  <FcGoogle />
                  Continue with Google
                </button>
              </Form>
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link
                  to="/SignUp"
                  className="text-decoration-none text-success"
                >
                  Sign up
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <img
              src={Image}
              alt="house-image"
              className="img-fluid rounded-start SignImg "
            />
            <div className="position-absolute top-0 translate-middle- d-flex align-items-center mt-5 ms-5 gap-1">
                <div className="logo">BH</div>
              <h1 className="logoName mt-3">BetaHouse</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
