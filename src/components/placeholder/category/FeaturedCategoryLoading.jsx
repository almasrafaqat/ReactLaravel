import React, { Fragment } from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const FeaturedCategoryLoading = ({ count }) => {

    return (
        <Fragment>

            <main className="main">
                <section className="popular-categories section-padding">
                    <Container>
                        <Row>

                            <div className="section-title">
                                <div className="title">
                                    <h3><Skeleton width={250} height={30} /></h3>
                                    <ListGroup horizontal className="list-inline nav nav-tabs links" >

                                        <ListGroup.Item>
                                            <Skeleton width={100} height={20} />
                                        </ListGroup.Item>
                                        &nbsp;&nbsp;
                                        <ListGroup.Item>
                                            <Skeleton width={100} height={20} />
                                        </ListGroup.Item>


                                    </ListGroup>

                                </div>

                                <span>
                                    <Skeleton width={50} height={50} circle={true} />
                                </span>


                            </div>
                            <Col lg={3} sm={3} xs={12}>


                                <Skeleton height={150} />



                            </Col>
                            <Col lg={3} sm={3} xs={12}>


                                <Skeleton height={150} />


                            </Col>
                            <Col lg={3} sm={3} xs={12}>


                                <Skeleton height={150} />


                            </Col>
                            <Col lg={3} sm={3} xs={12}>


                                <Skeleton height={150} />


                            </Col>


                        </Row>
                    </Container>
                </section>
            </main>

        </Fragment>
    )
}

export default FeaturedCategoryLoading