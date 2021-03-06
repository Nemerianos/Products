import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import myContext from '../context/ContextProvider';
import { ClipLoader } from 'react-spinners';

import  ProductAbout  from './ProductAbout';
import './Products.css'



export default class Products extends Component {

  render() {
    return (
    <myContext.Consumer>
      {(value) => (
        <Container>
            <Row className='Body'>
                {value.state.isLoading ? (
                  <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={260}
                        color={'#8b8b8b'}
                        loading={value.state.isLoading}
                    />
                  </div> 
                ) : (
                  value.state.products.map((products, i) => (
                    <Col xs={12} sm={12} md={12} key={i} className='DisplayedProduct' >
                        <ProductAbout 
                          name={products.name} 
                          image={products.image} 
                          oldPrice={products.oldPrice} 
                          price={products.price} 
                          options={products.options}
                          key={i}
                          productID={products.id}
                        /> 
                    </Col>
                  ))
                )} 
            </Row>
        </Container>
        )}
    </myContext.Consumer>
    )
  }
}
