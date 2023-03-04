import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from 'react-google-button'

const Login = () => {
  return (
    <div>
        <div className='p-4 box'>
               <h2 className='mb-4'>Firebase Auth Login</h2>
               <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type="email" placeholder='email add'
                </Form.Group>
               </Form>
        </div>

    </div>
  )
}

export default Login