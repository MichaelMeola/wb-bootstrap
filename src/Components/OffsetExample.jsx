import { Container, Row, Col } from "react-bootstrap";

export default function OffsetExample() {
  return (
    <Container fluid>

      <Row>
        <Col className="no-border" xs={{span: 5, offset: 7}}>
          <img src="../../img/Unknown.jpeg" />
        </Col>
      </Row>

      <Row>
        <Col className="no-border" xs='12'>
          <h1>Offset</h1>
        </Col>
      </Row>

    </Container>
  );
}
