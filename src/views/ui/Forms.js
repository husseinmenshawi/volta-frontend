import {
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

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            {/* <i className="bi bi-bell me-2"> </i> */}
            List Project
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Some Title"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Location</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Some location"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Location Type</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Home</option>
                  <option>Land</option>
                  <option>Institution</option>
                  <option>Others</option>
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}
              <FormGroup>
                <Label for="exampleText">Project Description</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Image</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>.JPEG/.JPG/.PNG</FormText>
              </FormGroup>
              {/* <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup> */}
              {/* <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}
              <Button className="btn-success">Submit For Approval</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
