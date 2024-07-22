import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/SignUp.css";
import { forgotPasswordSchema } from "../utility/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
      } = useForm({resolver:yupResolver(forgotPasswordSchema),
        defaultValues:{
          email:""
        
        }
      });
      const handleForgotPassword = async(data)=>{
        try {
          const request = await fetch("https://real-estate-j4gr.onrender.com/api/v1/auth/forgotpassword",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          });
          const response = await request.json();
          console.log(response);
          if(!response.success){
            toast.error(response.message)
          };
          if(response.success){
            toast.success(response.data)
          };
        } catch (error) {
          
          console.log(error.message);
        }
      }
      const btnText = isClicked || loading ? <span class="loader"></span> : "Recover Password";
  return (
    <>
    <main className="bg">
        <section className="row">
          <div className="col-lg-6 form">
            <div className="mt-5">
            <h1 className="top text-center">Forgot Password</h1>
              <p className="top sm-text text-center">Enter email address to recover password</p>

            </div>
            <div className="px-3 top py-5">
              
              <Form onSubmit={handleSubmit(handleForgotPassword)} className="">

                 {/* email */}
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" {...register("email", { required: true })} />
                  <p className="text-danger error-text">
                    {errors.email?.message}
                  </p>
                </Form.Group>


                {/* button */}
                <Button
                  type="submit"
                  className="w-100 Btn btn-lg text-white btn-success"
                  disabled={isSubmitting || loading}
                >
                  {btnText}
                </Button>
                

                
              </Form>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <img
              src={Image}
              alt="house-image"
              className="img-fluid rounded-start SignImg "
            />
            <div className="position-absolute top-0 translate-middle- d-flex align-items-center mt-5 ms-5  gap-1">
                <div className="logo">BH</div>
              <h1 className="logoName mt-2">BetaHouse</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ForgotPassword