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

import HeaderHome from "./HeaderHome";
import heroImage from "../assets/images/hero-image.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <HeaderHome />
      <div className="pageWrapper">
        <div>
          <div style={{ position: "relative" }}>
            <div className="head-image">
              <img
                src={heroImage}
                style={{
                  maxWidth: "100%",
                  opacity: 0.6,
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "36%",
                bottom: "55%",
                // width: "0vh",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontWeight: "300",
                  textShadow: "0px 1px white",
                  color: "white",
                }}
              >
                Welcome to <b style={{ fontWeight: "bold" }}>Volta</b>
              </h1>
              <h3
                style={{
                  fontWeight: "400",
                  textShadow: "1px 1px black",
                  color: "white",
                }}
              >
                Endless energy for a sustainable future{" "}
              </h3>
            </div>
          </div>
        </div>
        <Container className="p-5">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            <Col style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "200" }}>
                About <b>Us</b>
              </h3>
              <div style={{ textAlign: "start" }}>
                Everything we do, we believe in keeping the future as bright as
                we hoped it will be when we were growing up. Volta platform was
                founded to provide everyone who shares this vision the
                opportunity to make the right choice of contributing to a better
                future, all while being monetarily rewarded
              </div>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "200" }}>
                How It
                <b> Works</b>
              </h3>
              <div style={{ textAlign: "start" }}>
                We are releasing Sun Harvesters, an NFT collection that uses the
                most environment-friendly blockchain technology, proof-of-stake,
                to fund solar power projects in the most economically viable
                parts of the world. Users register on the platform then choose
                from a pool of projects to invest in. After picking a favorite
                project, the user purchases an NFT associated with the project.
                Each NFT piece is a proof of ownership of a certain amount of
                panels/area in the project, whereas all the real-time (and
                estimated) data such as energy production, CO2 emissions
                prevented, and monthly returns will be recorded on the
                blockchain, and the yields will then be directly distributed
                weekly/monthly into the holders’ crypto wallets as our stable
                Volta Coin (other popular options should also be provided).
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
