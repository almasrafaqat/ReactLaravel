import React, { Fragment, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ForgetImage from "../../assets/imgs/page/forgot_password.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    
   

const formSubmit = (e) => {
    e.preventDefault();
    const data = {
        email: email
    }
    if(email == ""){
        toast.error("Please, Enter your email");
    }else{
        axios.post(AppURL.ForgetPasswordPage,data).then(response=>{
            toast.success(response.data.message);
            document.getElementById("formreset").reset();
        })
        .catch(error=>{
            toast.error(error.response.data.message);
        })
    }
}
    

    return (
        <Fragment>
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <Container>
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow">
                                <i className="fi-rs-home mr-5" />
                                Home
                            </a>
                            <span /> Pages <span /> My Account
                        </div>
                    </Container>
                </div>
                <div className="page-content pt-150 pb-150">
                    <Container>
                        <Row>
                            <Col xl={4} lg={6} md={12} className="m-auto">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <img
                                                className="border-radius-15"
                                                src={ForgetImage}
                                                alt=""
                                            />
                                            <h2 className="mb-15 mt-15">Forgot your password?</h2>
                                            <p className="mb-30">
                                                Not to worry, we got you! Let’s get you a new password. Please
                                                enter your email address or your Username.
                                            </p>
                                        </div>
                                        <form onSubmit={formSubmit} id="formreset">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    required=""
                                                    name="email"
                                                    placeholder="Your Registered Email *"
                                                    onChange={(e)=>{setEmail(e.target.value)}}

                                                />
                                            </div>
                                           
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-heading btn-block hover-up"
                                                    name="login"
                                                >
                                                    Reset password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>

            <ToastContainer/>
        </Fragment>
    )
}

export default ForgetPassword