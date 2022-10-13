import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { HeaderImage, LoginImages } from '../ImagesImports';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [digit, setDigit] = useState("");
    const [gendigit, GenerateDigit] = useState(10);
    const [pageswitch, setPageSwitch] = useState(false);


    const history = useNavigate();

    useEffect(() => {
        digitOnClick();
        window.scroll(0, 0);
    }, [])


    const digitOnClick = () => {
        const val = Math.floor(1000 + Math.random() * 9000);
        GenerateDigit(val)
    }



    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        }

        if (email === "") {

            toast.error("Please, write your email", {
                position: "top-right"
            });
        }
        else if (password === "") {
            toast.error("Please, write your password", {
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
            axios.post(AppURL.LoginPage, data).then(response => {


                setPageSwitch(true);

                localStorage.setItem('token', response.data.token);
                props.setUser(response.data.user);

            })
                .catch(error => {

                    toast.error(error.response.data.message);
                })
        }


    } /**Form Submit */

 

    // if (pageswitch === true) {
    //     return history("/profile");
    // }
    if (localStorage.getItem("token")) {
        return history("/profile");
    }


    return (

        <Fragment>
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <Container>
                        <div className="breadcrumb">
                            <NavLink to="/" rel="nofollow">
                                <i className="fi-rs-home mr-5" />
                                Home
                            </NavLink>
                            <span /> Pages <span /> My Account
                        </div>
                    </Container>
                </div>
                <div className="page-content pt-40 pb-150">
                    <Container>
                        <Row>
                            <Col xl={8} lg={10} md={12} className="m-auto">
                                <Row>
                                    <Col lg={6} className="pr-30 d-none d-lg-block">
                                        <img
                                            className="border-radius-15"
                                            src={LoginImages.loginImage}
                                            alt=""
                                        />
                                    </Col>
                                    <Col lg={6} md={8}>
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Login</h1>
                                                    <p className="mb-30">
                                                        Don't have an account?{" "}
                                                        <NavLink to="/register">Create here</NavLink>
                                                    </p>
                                                </div>
                                                <form onSubmit={formSubmit}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                            placeholder="Username or Email *"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                            placeholder="Your password *"
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
                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="checkbox"
                                                                    id="exampleCheckbox1"
                                                                    defaultValue=""
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="exampleCheckbox1"
                                                                >
                                                                    <span>Remember me</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <NavLink className="text-muted" to="/forget/password">
                                                            Forgot password?
                                                        </NavLink>
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-heading btn-block hover-up"
                                                            name="login"
                                                        >
                                                            Log in
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
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

export default UserLogin