import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

import Buffelo from '../uploads/images/buffelo.jpeg';
import Cow from '../uploads/images/cow.jpg';
import Wheat from '../uploads/images/wheet.jpg'

// Sample product data with individual images
const sampleProducts = [
  { name: 'Buffelo', price: 8000, image: Buffelo },
  { name: 'Cow', price: 15000, image: Cow },
  { name: 'Wheat Seeds', price: 200,  image: Wheat},
];


function Home() {
  return (
    <div>
      <HeroSection />
      <Container>
        <h2 className="my-4">Popular Products</h2>
        <Row>
          {sampleProducts.map((product, index) => (
            <Col key={index} md={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
