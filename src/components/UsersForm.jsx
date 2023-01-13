import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import userD from '../assets/images/user.png'
import emailD from  '../assets/images/mail.png'
import cakeD from  '../assets/images/birthday-cake.png'
import lockD from  '../assets/images/lock.png'

const UsersForm = ({getUsers, selectedUSer, selectUser}) => {

    const [viewPass, setViewPass] = useState("")

    const {handleSubmit, register, reset} = useForm()

    const emptyUser = {first_name: "", last_name: "", birthday: "", email: "", password:""}

    const submit = (data) => {
        if (selectedUSer) {
            axios.put(`https://users-crud.academlo.tech/users/${selectedUSer.id}/`, data)
            .then(() => {alert("User updated successfully!")
                        getUsers()
                        selectUser(null)})
        } else {
        axios.post('https://users-crud.academlo.tech/users/', data)
        .then(() => {alert("User created successfully!")
                    getUsers()
                    reset(emptyUser)})}
    }

    useEffect(() => {
        if ( selectedUSer) {reset(selectedUSer)
        } else {
            reset(emptyUser)
        }
    }, [selectedUSer])

    return (
        <div>
            <h1>Sign up</h1>
            <br />
        <form action="" onSubmit={handleSubmit(submit)} className='sign-up-card'>
            <div className='sign-inputs double-input'>
                <label htmlFor="first-name">
                    <img src={userD} alt="" />
                </label>
                <input  type="text" 
                        placeholder='First Name'
                        id='first-name'
                        required
                        {...register("first_name")}/>
                <span> </span>
                <input  type="text" 
                        placeholder='Last Name'
                        id='last-name'
                        required
                        {...register("last_name")}/> 
            </div>
            <div className='sign-inputs'>
                <label htmlFor="birthday">
                    <img src={cakeD} alt="" />
                </label>
                <input  type="date" 
                        id='birthday'
                        required
                        {...register("birthday")}/>
            </div>
            <div className='sign-inputs'>
                <label htmlFor="email">
                    <img src={emailD} alt="" />
                </label>
                <input  type="text" 
                        placeholder='E-mail'
                        id='email'
                        required
                        {...register("email")}/>
            </div>
            <div className='sign-inputs'>
                <label htmlFor="password">  
                    <img src={lockD} alt="" />
                </label>
                <input  type={viewPass ? "text" : "password"} 
                        placeholder='Password'
                        id='password'
                        required
                        {...register("password")}/>
                <button onClick={() => setViewPass(!viewPass)}>0.0</button>
            </div>
            <button className='sub-button'>Submit</button>
        </form>
        </div>
    );
};

export default UsersForm;