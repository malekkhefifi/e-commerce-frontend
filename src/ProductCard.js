import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// ProductCard Component
function ProductCard({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">{product.buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
