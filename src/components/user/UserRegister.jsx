import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderImage } from '../ImagesImports';
import AppURL from '../../api/AppURL';


const UserRegister = (props) => {
    let history = useNavigate();

    useEffect(() => {
        digitOnClick();
        // window.scroll(0,0);
        if (localStorage.getItem("token")) {
            return history("/profile");

    }

    }, []);



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");
    const [digit, setDigit] = useState("");
    const [gendigit, GenerateDigit] = useState("");
    const [pageswitch, setPageSwitch] = useState(false);


    const digitOnClick = () => {
        const val = Math.floor(1000 + Math.random() * 9000);
        GenerateDigit(val)
    }




    // if (localStorage.getItem('token')) {
    //     return <Navigate to="/" replace={true} />
    // }

    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        }

        if (name == "") {
            toast.error("Please, enter your name", {
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
        else if (digit === "") {
            toast.error("Please, enter security code", {
                position: "top-right"
            });
        }
        else if (digit !== gendigit) {
            toast.error("Opps, secruity code not match", {
                position: "top-right"
            });
        }
        else {
            axios.post(AppURL.RegisterPage, data).then(response => {

                toast.success(response.data.message, {
                    position: "top-right"
                });
                setPageSwitch(true);
                localStorage.setItem('token', response.data.token);
                props.setUser(response.data.user);
            })
                .catch(error => {
                    toast.error(error.response.data.message);
                })
        }

    } //formSubmit

    if (pageswitch === true) {
        return history("/");
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
                <div className="page-content pt-30 pb-150">
                    <Container>
                        <Row>
                            <Col xl={8} lg={10} md={12} className="m-auto">
                                <Row>
                                    <Col lg={6} md={8}>
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Create an Account</h1>
                                                    <p className="mb-30">
                                                        Already have an account?{" "}
                                                        <NavLink to="/login">Login</NavLink>
                                                    </p>
                                                </div>
                                                <form onSubmit={formSubmit}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="name"
                                                            placeholder="Full Name"
                                                            onChange={(e) => { setName(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            placeholder="Email"
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Confirm password"
                                                            onChange={(e) => { setpassword_confirmation(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="login_footer form-group">
                                                        <div className="chek-form">
                                                            <input
                                                                type="text"
                                                                required=""
                                                                name="digit"
                                                                placeholder="Security code *"
                                                                onChange={(e) => { setDigit(parseInt(e.target.value)) }}
                                                            />
                                                        </div>
                                                        <span className="security-code">
                                                            <b className="text-hot">{gendigit}</b>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <img style={{ cursor: 'pointer' }} src={HeaderImage.IconCamparison} onClick={digitOnClick} />
                                                        </span>
                                                    </div>


                                                    <div className="form-group mb-30">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-fill-out btn-block hover-up font-weight-bold"
                                                            name="login"
                                                        >
                                                            Submit &amp; Register
                                                        </button>
                                                    </div>
                                                    <p className="font-xs text-muted">
                                                        <strong>Note:</strong>Your personal data will be used to
                                                        support your experience throughout this website, to manage
                                                        access to your account, and for other purposes described
                                                        in our privacy policy
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="pr-30 d-none d-lg-block">
                                        <div className="card-login mt-115">
                                            <a href="#" className="social-login facebook-login">
                                                <img src="assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                                                <span>Continue with Facebook</span>
                                            </a>
                                            <a href="#" className="social-login google-login">
                                                <img src="assets/imgs/theme/icons/logo-google.svg" alt="" />
                                                <span>Continue with Google</span>
                                            </a>
                                            <a href="#" className="social-login apple-login">
                                                <img src="assets/imgs/theme/icons/logo-apple.svg" alt="" />
                                                <span>Continue with Apple</span>
                                            </a>
                                        </div>
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

export default UserRegister