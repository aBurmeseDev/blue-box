import React, { useState } from 'react'
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Checkout from '../components/Checkout'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <Checkout step1 step2 />
      <h2>Shipping</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address'>
          <FormLabel>Address</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='city'>
          <FormLabel>City</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='postalCode'>
          <FormLabel>PostalCode</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter postalCode'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='country'>
          <FormLabel>Country</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
