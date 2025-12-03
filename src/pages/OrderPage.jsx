import React from 'react'
import OrderForm from '../components/OrderForm'
import Footer from '../components/Footer'

function OrderPage() {
  return (
    <div>
      <OrderForm/>
      <div className='bg-black py-5'>
        <Footer/>
      </div>
    </div>
  )
}

export default OrderPage
