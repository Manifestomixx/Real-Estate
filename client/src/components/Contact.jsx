import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <main>
        <section>
          <div>
            <h1>Our Contact Information</h1>
            <p>
              Need to talk to someone? Kindly reach out to us via any of our
              communication channels with the details below
            </p>
            <div>
              <IoLocationSharp className="location-icon" />
              <p>20 Lorem ipsum dolor sit amet, Victoria Island, Lagos</p>
              <p>
                <MdEmail /> Email: Hello@gmail.com
              </p>
              <p>
                <FaPhoneVolume /> Call: (234) 900-000-0000
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
