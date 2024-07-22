import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <main className="pt-5">
        <section className="container py-5">
          <div className="mx-lg-5 px-4 py-5">
            <h1 className="pt-5 ">Our Contact Information</h1>
            <p>
              Do you need a new house? Kindly reach out to us via any of our
              communication channels with the details below
            </p>
            <div>
              
              <p> <FaLocationDot  className="text-success"/> 95 Tinubu Estate, Lekki, Lagos</p>
              <p>
                <MdEmail  className="text-success"/> Email: support@rentbetahouse.com
              </p>
              <p>
                <FaPhoneVolume className="text-success" /> Call: (234) 675 893 5675
              </p>
            </div>
          </div>
          <div>
            <Form>
              {/* name */}
              <div className="d-flex gap-3 justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              </div>

              {/* email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3}  placeholder="Your Message"/>
              </Form.Group>
              <button className="btn btn-success btn-lg">Send Message</button>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
