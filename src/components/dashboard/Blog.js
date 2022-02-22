import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  return (
    <Card style={{ height: "90%" }} color={props.isOnGoing ? props.color : ""}>
      <CardImg
        alt="Card image cap"
        style={{ height: "160px" }}
        src={props.image}
      />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button color={"info"}>Read More</Button>
      </CardBody>
    </Card>
  );
};

export default Blog;
