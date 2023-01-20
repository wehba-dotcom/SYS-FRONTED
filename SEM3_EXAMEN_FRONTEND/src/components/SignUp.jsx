import React, { useState } from "react";

import { Alert, Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";



function SginUp({facade}) {
  // `null` means the user hasn't touched the field yet,
  // so no need to show validation either
  const [user, setUser] = useState({
   login_name: null,
    password: null,
    passwordConfirmation: null,
  });
  const [isSubmittedSignup, setIsSubmittedSignup] = useState(false);
  const [signupError, setSignupError] = useState(null);

  // Universal change handler, looks at the name of the field
  // being changed. Could be `useCallback`ed.
  const handleChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  // Derive errors based on `user`.
  const errors = React.useMemo(() => {
    const errors = {};
    
    if (user.login_name !== null) {
      if (!user.login_name) {
        errors.login_name = "Please enter a valid name";
      }
    }
    if (user.password !== null) {
      if (!user.password) {
        errors.password = "Please enter a valid password";
      } else if (user.password.length < 8) {
        errors.password = "Password must be min 8 characters";
      }
    }
    if (user.passwordConfirmation !== null) {
      if (!user.passwordConfirmation) {
        errors.passwordConfirmation = "Please confirm password";
      } else if (user.passwordConfirmation.length < 8) {
        errors.passwordConfirmation = "Password must be min 8 characters";
      } else if (user.password !== user.passwordConfirmation) {
        errors.passwordConfirmation = "Passwords does not match.";
      }
    }
    return errors;
  }, [user]);

  // If there are no `errors`, the form is valid.
  // Could also be `useMemo`'d, but no real need to.
  const isValid = Object.keys(errors).length === 0;

  const handleSubmitSignup =  (event) => {
    event.preventDefault(); 
      facade.createUser(user.login_name, user.password) 
        setIsSubmittedSignup(true)
  }
  const handleSubmitSignups = async (event) => {
    event.preventDefault();
    if (!isValid) {
      alert("Please correct errors first.");
      return;
    }
    setIsSubmittedSignup(false);
    try {
      let res =facade.createUser(user.login_name, user.password) 
      console.log(res)
      if (res) {
        setIsSubmittedSignup(true);
      }
    } catch (error) {
      if (error.response.message) {
        setSignupError(error.response.data.message);
      }
    }
  
  };




  return (
    <Container fluid>
      <Row>
        <Col />
        <Col className="loginColumn" lg={6} md={6} sm={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="p-2">User Registration</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmitSignups}>
                  {isSubmittedSignup ? <Alert variant="success">Successfully Registered.</Alert> : null}
                  {signupError ? <Alert variant="danger">{signupError}</Alert> : null}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <FloatingLabel controlId="floatingInput" label="login_name" className="mb-3">
                      <Form.Control type="text" value={user.login_name} name="login_name" placeholder="Enter name" onChange={handleChange} />
                      {errors.login_name ? <span className="text-danger float-start">{errors.login_name}</span> : null}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                      {errors.password ? <span className="text-danger float-start">{errors.password}</span> : null}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Confirm password">
                      <Form.Control
                        type="password"
                        value={user.passwordConfirmation}
                        name="passwordConfirmation"
                        onChange={handleChange}
                        placeholder="Confirm password"
                      />
                      {errors.passwordConfirmation ? <span className="text-danger float-start">{errors.passwordConfirmation}</span> : null}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Row className="g-2">
                      <Col md>
                        <a href="/signin" className="float-right">
                          Already have an Account?
                        </a>
                      </Col>
                    </Row>
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" variant="primary" data-cy="submit-registration">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SginUp;