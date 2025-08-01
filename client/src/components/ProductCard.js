import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css'; // Make sure to import your CSS file

function ProductCard({ product }) {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} ₹</Card.Text>
        <Button className="pashu-button">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
