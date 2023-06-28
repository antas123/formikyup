import React from 'react'
import { ErrorMessage, useField } from 'formik'

const Fields = (props) => {

    const [field, meta] = useField(props);
  return (
    <>
    <div className="fields">
         <label className="labels" htmlFor="firstName">
                {props.label}
         </label>
         <input
                // type="text"
                // // name="firstName"
                // onChange={handleChange}
                // value={values.firstName}
                {...field} 
                className={
                  meta.error && meta.touched && meta.error
                    && "err-input"    
                }
              />
    </div>
    <ErrorMessage component='div' name={field.name} className='err' />
    </>
  )
}

export default Fields