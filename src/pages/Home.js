import React, { useState, useEffect } from 'react';
import {  Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
// for filtering option
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    return (
        <div>

            <Row className='mt-4'>
                <Col lg={6}>
                    
                <Form.Select onChange={handleCategoryChange} value={category} size="sm">
                    
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                    
                    </Form.Select>
                    
                </Col>
               
            </Row>

            <Row className='mt-4'>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {
                    loading &&
                    <div className='text-center'>
                        <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
                    </div>
                }
                {
                    filteredProducts.length > 0 && filteredProducts.map(i => (
                        <Col lg={3} md={4} sm={6} className='p-5'>
                            <Card className='text-center p-2' id='d' style={{ width: '18rem' }} >
                                <Card.Img
                                    style={{ height: '300px' }}
                                    variant="top" src={i.image} />
                                <Card.Body>
                                    <Card.Title><h3>{i.title.length > 50 ? i.title.slice(0, 30) + ".." : i.title}</h3></Card.Title>
                                    <Card.Text>
                                        <h2>Rs:{i.price}</h2>
                                        <span data-star={i.rating.rate}></span>

                                        <h4>Rating:{i.rating.rate} </h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>

    );
}


export default Home