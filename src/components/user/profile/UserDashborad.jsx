import React, { Fragment, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const UserDashborad = (props) => {
  
  return (
    <Fragment>
    <Card>
        <Card.Header>
            <h3>{props.user.name}</h3>
        </Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                <p>
                    From your account dashboard. you can easily check &amp;
                    view your <a href="#">recent orders</a>,<br />
                    manage your{" "}


                </p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
</Fragment>
  )
}

export default UserDashborad