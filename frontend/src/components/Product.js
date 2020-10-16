import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product, color }) => {
  return (
    <Card className='my-3 p-3 rounded border-light'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <p style={{ color }}>{product.name}</p>
          </Card.Title>
        </Link>
        <Card.Text as='h5'>${product.price}</Card.Text>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`(${product.numReviews})`} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.defaultProps = {
  color: '#000',
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  color: PropTypes.string,
}

export default Product
