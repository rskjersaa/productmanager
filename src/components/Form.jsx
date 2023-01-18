import {useState} from 'react'

const Form = (props) => {
    return (
        <div className= "col-6 mx-auto">
        <h1>Product Manager</h1>
            <form>
            <label className = "form-label">Name:</label>
            <input type="text" className="form-control"/>
            <label className = "form-label">Price:</label>
            <input type="number" className="form-control"/>
            <label className = "form-label">Description:</label>
            <input type="text" className="form-control"/>
            <button className = "btn btn-info p-3">Submit</button>
            

            </form>
        </div>
        
    )

}

export default Form