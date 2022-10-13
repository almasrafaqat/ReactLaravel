import React, { Fragment, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResetImage from "../../assets/imgs/page/reset_password.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppURL from '../../api/AppURL';

const ResetPassword = () => {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");
    const [pageswitch, setPageSwitch] = useState(false);
    const history = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        const data = {
            token: token,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        if (token == "") {
            toast.error("Please, enter token number", {
                position: "top-right"
            });
        }
        else if (email == "") {
            toast.error("Please, enter your email", {
                position: "top-right"
            });
        }
        else if (password == "") {
            toast.error("Please, enter your password", {
                position: "top-right"
            });
        }
        else if (password_confirmation == "") {
            toast.error("Please, enter your confirm password", {
                position: "top-right"
            });
        }
        else if (password !== password_confirmation) {
            toast.error("Opps, confirm password not match", {
                position: "top-right"
            });
        }
        else {
            axios.post(AppURL.ResetPasswordPage, data).then(response => {
                setPageSwitch(true);
            })
                .catch(error => {
                    toast.error(error.response.data.message);
                })
        }
    }

    if (pageswitch === true) {
        return history("/login");
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
                            <Col xl={6} lg={8} md={12} className="m-auto">
                                <Row>
                                    <div className="heading_s1">
                                        <img
                                            className="border-radius-15"
                                            src={ResetImage}
                                            alt=""
                                        />
                                        <h2 className="mb-15 mt-15">Set new password</h2>
                                        <p className="mb-30">
                                            Please create a new password that you don’t use on any other site.
                                        </p>
                                    </div>
                                    <Col lg={6} md={8}>

                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <form onSubmit={formSubmit}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="token"
                                                            placeholder="Enter Token *"
                                                            onChange={(e) => { setToken(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="text"
                                                            placeholder="Enter Your Email *"
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            required=""
                                                            name="password"
                                                            placeholder="Password *"
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            required=""
                                                            name="confirm_password"
                                                            placeholder="Confirm you password *"
                                                            onChange={(e) => { setpassword_confirmation(e.target.value) }}
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
                                    <Col lg={6} className="pl-50">
                                        <h6 className="mb-15">Password must:</h6>
                                        <p>Be between 9 and 64 characters</p>
                                        <p>Include at least tow of the following:</p>
                                        <ol className="list-insider">
                                            <li>An uppercase character</li>
                                            <li>A lowercase character</li>
                                            <li>A number</li>
                                            <li>A special character</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
            <ToastContainer />
        </Fragment>
    )
}

export default ResetPassword