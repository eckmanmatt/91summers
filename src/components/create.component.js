import React from 'react';
import {useState} from 'react';

const CreatePastry = (props) =>{

    const [addNew, setAddNew] = useState({
      name: '',
      type: '',
      description: '',
    })


    return(
      <>
        <h2 className='display-6 m-5 text-center'>Add a New Entry</h2>

        <form className='d-flex flex-column text-center justify-content-center bg-light m-12'>

          <div className='m-2'>
            <h4>Name:</h4>
            <br/>
            <input type='text' name='name' value={addNew.name}/>
          </div>

          <br/>
          <br/>
          <br/>

          <div className=''>
            <h4>Type:</h4>
            <p><i>Pastry, Dessert, Bread, or Chocolate</i></p>
            <input className='m-3' type='text' name=''/>
          </div>

          <br/>
          <br/>
          <br/>

          <div className='m-2'>
            <h4>Description:</h4>
            <br/>
            <input type='text' name='description'/>
          </div>

          <br/>
          <br/>
          <br/>

          <div className='flex-column m-5'>
            <input type='submit' value='submit' className='btn btn-success'/>
          </div>
        </form>
      </>
    )
  }

export default CreatePastry
