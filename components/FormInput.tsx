import React from 'react'

const FormInput = ({register, error, label, id, ...inputProps}) => {
  return (
    <div className='mb-5'>
       <input className='form-control' {...register(id)} {...inputProps}  />
        {error && 
          <>
            <span className='inline-block text-left text-red-500 text-xs'>
              {error && error?.message}
            </span>
          </>
         }
    </div>
  )
}

export default FormInput