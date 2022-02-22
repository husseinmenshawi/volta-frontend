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

const Login = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <div className="contentAreaLogin">
          <Container className="p-5" fluid>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h6" className="border-bottom p-4 mb-0">
                    Login To Your Account
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
                      <div class="">
                        <Link
                          to="/dashboard"
                          class="btn btn-secondary"
                          style={{ marginRight: "10px" }}
                          state={{ isSuccessfulLogin: true }}
                        >
                          Login
                        </Link>
                        <Link to="/register" class="btn btn-primary">
                          Register
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

export default Login;
