import React from 'react'
import {inputFormElements} from './formElement'
const Form = () => {
    return (
        <>
            
            <form className='container'>
            <h1>Form Fillup</h1>
                {
                    inputFormElements.map(input=>  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">{input.label}</label>
                    <input {...input}/>
                    
                </div>)
                }
               
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </>
    )
}
export default Form