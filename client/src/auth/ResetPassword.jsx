import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaCrown } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { resetPasswordSchema } from "../utility/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";

const ResetPassword = () => {
    const [isReveal, setIsReveal] = useState(false);
    const [serverError,setServerError] = useState("");
    const [successMsg,setSuccessMsg] = useState("");
    const [isClicked,setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {resetToken} = useParams();

    const handleToggle = () => {
        setIsReveal(!isReveal);
      };
    


    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
      } = useForm({resolver:yupResolver(resetPasswordSchema),
        defaultValues:{
          
          password:"",
          confirmPassword:"",
        }
      
      });
    
      console.log(errors);
    
      const onSubmit = async(data) => {
        console.log(data)
        setIsClicked(true)
        try {
          setSuccessMsg("");
          setServerError("")
          const req = await fetch(`http://localhost:5114/api/v1/auth/resetpassword/${resetToken}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
          const res = await req.json();
          console.log(res);
          if(!res.success){
            const errorData = await res;
            setServerError(errorData.message)
            setIsClicked(true)
          }
          if(res.success){
            setSuccessMsg(res.message)
            toast.success(res.message)
            navigate('/')
          }
        } catch (error) {
          console.log(error.message);
          
        }finally{
          setIsClicked(false)
        }
      };
      const btnText = isClicked || loading ? <span class="loader"></span> : "Reset Password";
  
  return (
    <>
     <main className="bg">
        <section className="row">
          <div className="col-lg-6 form">
          <div className="mt-5">
            <h1 className="top text-center">Reset Password</h1>
              <p className="top sm-text text-center">Enter a new password</p>

            </div>
            <div className="px-3 top mt-5">
              <Form onSubmit={handleSubmit(onSubmit)}>
                

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

                {/* confirm password */}
                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type={isReveal ? "text" : "password"} placeholder="Confirm Password" {...register("password", { required: true })} />
                  <p className="text-danger error-text">
                    {errors.password?.message}
                  </p>
                  <p className="text-secondary position-absolute top-0 end-0 p-3 my-5 translate-middle-y" role="button" onClick={handleToggle}>
                    {isReveal ? <FaRegEyeSlash /> : <FaRegEye />}
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
                
                {serverError && <p className="text-danger text-center">{serverError}</p> }
                {successMsg && <p className="text-success text-center">{successMsg}</p> }
              </Form>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <img
              src={Image}
              alt="house-image"
              className="img-fluid rounded-start SignImg "
            />
            <div className="position-absolute top-0 translate-middle- d-flex align-items-center mt-5 ms-5  gap-2">
              <div className="logo position-relative">
                <div className="logo">KV</div>
                <FaCrown className="position-absolute top-0 me-3 translate-middle-y crown " />
              </div>
              <h1 className="logoName mt-3">KingsVilla</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ResetPassword