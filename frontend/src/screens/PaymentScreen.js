import React, { useState } from 'react'
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
  FormCheck
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Checkout from '../components/Checkout'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod({ paymentMethod }))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <Checkout step1 step2 step3 />
      <h2>Payment Method</h2>
      <Form onSubmit={submitHandler}>
       <FormGroup>
           <FormLabel as='legend'>
Select Method
           </FormLabel>
       </FormGroup>
       
       <Col>
       <FormCheck type='radio' label='PayPal or Credit Card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e)=> setPaymentMethod(e.target.value)}></FormCheck>
       <FormCheck type='radio' label='Stripe' id='Stripe' name='paymentMethod' value='Stripe' onChange={(e)=> setPaymentMethod(e.target.value)}></FormCheck>
       </Col>
        
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
