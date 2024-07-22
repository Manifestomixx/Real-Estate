import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { regFormSchema } from "../utility/ValidationSchema.js";
import toast from "react-hot-toast";

const SignUp = () => {
  const [isReveal, setIsReveal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(regFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: "",
    },
  });

  console.log(errors);

  // Watch password field for changes
  const password = watch("password", "");

  const onSubmit = async (data) => {
    console.log(data)
    setIsClicked(true)

    try {
      const response = await fetch("https://real-estate-j4gr.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API response:", result); 

      if (!result.success) {
        toast.error(result.message || "Registration failed. Please try again.");
        console.error("Server error:", result.message); 
      } else {
        toast.success(result.message || "Registration successful!");
        navigate('/');
      }
    } catch (error) {
      console.error("Network error:", error); 
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsClicked(false);
    }
  };

  const handleToggle = () => {
    setIsReveal((prev) => !prev);
  };

  const btnText = isClicked ? "Loading..." : "Sign Up";

  return (
    <>
      <main className="bg">
        <section className="row">
          <div className="col-lg-6 form">
            <div className="px-3 top">
              <h1 className='top'>
                Join our community of home seekers and explore the possibilities that await.
              </h1>
              <p className="sm-text">
                Let's get started by filling out the information below
              </p>

              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="d-flex gap-3 justify-content-between">
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      {...register("firstName", { required: "First name is required" })}
                    />
                    <p className="text-danger error-text">
                      {errors.firstName?.message}
                    </p>
                  </Form.Group>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    <p className="text-danger error-text">
                      {errors.lastName?.message}
                    </p>
                  </Form.Group>
                </div>

                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                  <p className="text-danger error-text">
                    {errors.email?.message}
                  </p>
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={isReveal ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                  />
                  <p
                    className="text-secondary position-absolute top-0 end-0 p-3 my-5 translate-middle-y"
                    role="button"
                    onClick={handleToggle}
                  >
                    {isReveal ? <FaRegEyeSlash /> : <FaRegEye />}
                  </p>
                  <p className="text-danger error-text">
                    {errors.password?.message}
                  </p>
                </Form.Group>

                {/* confirm password */}
                <Form.Group className="mb-3 position-relative" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type={isReveal ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: "Please confirm your password" })}
                  />
                  <p
                    className="text-secondary position-absolute top-0 end-0 p-3 my-5 translate-middle-y"
                    role="button"
                    onClick={handleToggle}
                  >
                    {isReveal ? <FaRegEyeSlash /> : <FaRegEye />}
                  </p>
                  <p className="text-danger error-text">
                    {errors.confirmPassword?.message}
                  </p>
                </Form.Group>

                {/* checkbox */}
                <Form.Group className="mb-2 d-flex gap-2" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    {...register("checkbox", { required: "You must agree to the terms" })}
                  />
                  <p className="check-text">
                    I agree to <span className="text-success">Terms of Service</span> and{" "}
                    <span className="text-success">Privacy Policies</span>
                  </p>
                </Form.Group>
                <p className="text-danger error-text">
                  {errors.checkbox?.message}
                </p>

                {/* button */}
                <Button
                  type="submit"
                  className="w-100 Btn btn-lg text-white btn-success"
                  disabled={isSubmitting}
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
                  to="/"
                  className="text-decoration-none text-success"
                >
                  Sign in
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <img
              src={Image}
              alt="house-image"
              className="img-fluid rounded-start SignImg"
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

export default SignUp;
