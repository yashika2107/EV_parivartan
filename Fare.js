import React from 'react'
import {Link} from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react';

export default function Fare() {
  return (
    <div className='flex flex-col w-[35%] p-12 h-[28rem] m-auto mt-11 items-start shadow-md shadow-gray-300'>
      <h1 className='font-bold text-xl m-auto mb-4'>Fare</h1>
      <hr className='w-full'/>
      <div className='flex flex-row mb-4 mt-4 justify-between w-full'>
        <label className=''>Bare fare</label>
        <bold className='font-bold'>₹55</bold>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <label className='mb-4'>Total Time</label>
        <bold className='font-bold' >55mins</bold>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <label className='mb-4'>Rate Time Charge</label>
        <bold className='font-bold' >₹2/min</bold>
      </div>
      
      <h1 className='mb-4 font-bold text-xl m-auto'>Taxes Extra</h1>
      <hr className='w-full'/>

      <div className='flex flex-row  mt-4 justify-between w-full'>
        <label className='mb-4'>Total Fare(approx)</label>
        <bold className='font-bold' >₹150-₹250</bold>
      </div>
      
      <div className='flex flex-row justify-between w-full'>
        <label className='mb-4'>Taxes</label>
        <bold className='font-bold' >₹20</bold>
      </div>
      {/* <Link to='/routes_map'>
          <button className='bg-blue-400 text-white rounded-sm py-1 px-4 mt-2'>Pay</button>
      </Link> */}

      <div className='mt-4 shadow-sm'>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '100.00',
              currencyCode: 'USD',
              countryCode: 'US',
            },
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('load payment data', paymentRequest);
          }}
          buttonColor='blue'
        />
      </div>

    </div>
  )
}
