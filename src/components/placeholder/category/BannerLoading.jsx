import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Col, Container, Row } from 'react-bootstrap';

const BannerLoading = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={4} sm={6} xs={12}>
                        <div style={{ margin: 10 }}>
                            <Skeleton height={250} />
                        </div>

                    </Col>
                    <Col lg={4} sm={6} xs={12}>
                        <div style={{ margin: 10 }}>
                            <Skeleton height={250} />
                        </div>

                    </Col>
                    <Col lg={4} sm={6} xs={12}>
                        <div style={{ margin: 10 }}>
                            <Skeleton height={250} />
                        </div>

                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default BannerLoading