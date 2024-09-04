import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='mt-16'>
        <div className="fullscreen-container shadow m-auto shadow-gray-300">
        <div className="login-container rounded-sm">
            <h1 className="header  text-xl font-semibold">Contact us</h1>
            <form className="form">
                <div className="input-group mb-4">
                    <label for="username" className='text-left'>Name</label>
                    <input type="text" id="username" name="username" className='pl-0 pt-2 pb-2' placeholder="Name"/>
                </div>

                <div className="input-group mb-4">
                <label for="username" className='text-left' >Email</label>
                <input type="text" id="username" name="username" className='pl-0 pt-2 pb-2' placeholder="Email"/>
                </div>

                <div className="input-group mb-4">
                <label for="password" className='text-left'>Phone number</label>
                <input type="password" id="password" name="password" className='pl-0 pt-2 pb-2' placeholder="Phone number"/>
                </div>

                <div className="input-group mb-4">
                <label for="password" className='text-left mb-4'>Message</label>
                <textarea className='pl-0 pt-2 pb-2 border border-gray-300 rounded-sm h-40' placeholder="Enter your message"></textarea>
                </div>

                <button className='bg-blue-400 text-white rounded-sm py-1 px-4 mt-2'>Send message</button>
            </form>
        </div>
  </div>
    </div>
  )
}
