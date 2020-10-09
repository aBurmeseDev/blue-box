import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product, color }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong style={{ color }}>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.defaultProps = {
  color: '#0000ff',
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  color: PropTypes.string,
}

export default Product
