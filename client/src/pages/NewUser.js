import React from 'react'
import {Formik, Form, Field, ErrorMessage } from "formik";

const NewUser = () => {
  return (
    <div>
        <div> <h1>Add New User</h1></div>
            <Formik >
                <Form>
                    <label>Name : </label>
                    <Field
                    id="InputNewUser"
                    name="nametext"
                    placeholder="Ex:name" 
                    />

                    <label>Email : </label>
                    <Field
                    id="InputNewUser"
                    name="emailtext"
                    placeholder="Ex:name@gmail.com" 
                    />

                    <label>User Name : </label>
                    <Field
                    id="InputNewUser"
                    name="userNametext"
                    placeholder="Ex:name123" 
                    />

                    <label>Password : </label>
                    <Field
                    id="InputNewUser"
                    name="passwordtext"
                    placeholder="Ex:abcd@123" 
                    />

                    <button type='Add'>Add User</button>
                </Form>
            </Formik>
        <div className='NewUserPage'> </div>
    </div>
  )
}

export default NewUser