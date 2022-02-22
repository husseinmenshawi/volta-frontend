import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Register = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <div className="contentAreaLogin">
          <Container className="p-5" fluid>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h6" className="border-bottom p-4 mb-0">
                    Register Your Account
                  </CardTitle>
                  <CardBody>
                    <Form className="p-3">
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="test@gmail.com"
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Location</Label>
                        <Input
                          id="locaion"
                          name="locaion"
                          type="text"
                          placeholder="Surman"
                        />
                      </FormGroup>
                      <div class="">
                        <Link
                          to="/dashboard"
                          class="btn btn-secondary"
                          style={{ marginRight: "10px" }}
                        >
                          Register
                        </Link>
                        <Link to="/login" class="btn btn-primary">
                          I Already have an account
                        </Link>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Register;
