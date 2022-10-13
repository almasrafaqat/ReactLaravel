import React, { Fragment } from 'react'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import UserDashborad from './profile/UserDashborad';
import UserOrders from './profile/UserOrders';
import UserTrackOrders from './profile/UserTrackOrders';
import UserAddress from './profile/UserAddress';
import UserAccountDetails from './profile/UserAccountDetails';


const Profile = (props) => {
    const user = props.user;
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
                            <span> My Account</span>
                        </div>
                    </Container>
                </div>
                <div className="page-content pt-50 pb-150">

                    <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
                        <Row>
                            <Col lg={10} className="m-auto">
                                <Row>
                                    <Col md={3}>
                                        <div className="dashboard-menu">
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="dashboard">
                                                        <i className="fi-rs-settings-sliders mr-10" />
                                                        Dashboard
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="orders">
                                                        <i className="fi-rs-shopping-bag mr-10" />
                                                        Orders
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="track-orders">
                                                        <i className="fi-rs-shopping-cart-check mr-10" />
                                                        Track Your Order
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="address">
                                                        <i className="fi-rs-marker mr-10" />
                                                        My Address
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="account-detail">
                                                        <i className="fi-rs-user mr-10" />
                                                        Account details
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="">
                                                        <i className="fi-rs-sign-out mr-10" />
                                                        Logout
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                    <Col md={9}>
                                        <Tab.Content className='account dashboard-content pl-50'>
                                            <Tab.Pane eventKey="dashboard">
                                                <UserDashborad user={user}/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="orders">
                                               <UserOrders/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="track-orders">
                                               <UserTrackOrders/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="address">
                                                <UserAddress/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account-detail">
                                                <UserAccountDetails/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </main>

        </Fragment>
    )
}

export default Profile