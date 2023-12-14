import { Container, Row, Col } from "react-bootstrap";

export default function OrderExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md={{span: 3, order: 2}}>
          <h1>Table of Contents</h1>
        </Col>
        <Col xs='12' md={{span: 9, order: 1}}>
          <h1>Article</h1>
          <p>This is the main content. It will show up either below or left of the table of contents section.</p>
        </Col>
      </Row>
    </Container>
  );
}
