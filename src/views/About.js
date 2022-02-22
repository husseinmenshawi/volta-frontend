import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Volta - Endless energy for a sustainable future
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h4 className="mt-4">About</h4>
                <h5 className=" mb-4">
                  Everything we do, we believe in keeping the future as bright
                  as we hoped it will be when we were growing up. Volta platform
                  was founded to provide everyone who shares this vision the
                  opportunity to make the right choice of contributing to a
                  better future, all while being monetarily rewarded
                </h5>
              </Col>
            </Row>
            <Row justify-content>
              <Col lg="8">
                <h4 className="mt-4">How it works</h4>
                <h5 className=" mb-4">
                  We are releasing Sun Harvesters, an NFT collection that uses
                  the most environment-friendly blockchain technology,
                  proof-of-stake, to fund solar power projects in the most
                  economically viable parts of the world. Users register on the
                  platform then choose from a pool of projects to invest in.
                  After picking a favorite project, the user purchases an NFT
                  associated with the project. Each NFT piece is a proof of
                  ownership of a certain amount of panels/area in the project,
                  whereas all the real-time (and estimated) data such as energy
                  production, CO2 emissions prevented, and monthly returns will
                  be recorded on the blockchain, and the yields will then be
                  directly distributed weekly/monthly into the holders’ crypto
                  wallets as our stable Volta Coin (other popular options should
                  also be provided).
                </h5>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
