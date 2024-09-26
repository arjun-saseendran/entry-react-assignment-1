import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="p-5">
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} xl={3} key={product.key} className="mt-4">
            <Card style={{ background: "#D2E0FB" }}>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title style={{ maxHeight: "20px", overflow: "hidden" }}>
                  {product.title}
                </Card.Title>
                <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                  {product.description}
                </Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="dark" style={{ background: "#102C57" }}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductCard;
