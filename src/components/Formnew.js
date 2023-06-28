import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./styles.css"

const Formnew = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      city:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      city: Yup.string().max(20, 'Must not be empty').required('required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='forms'>

    <h2>Customer Information</h2>

    <div className='fields'>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className={formik.touched.firstName && formik.errors.firstName ? 'err-input' : ''}
      />
       </div>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className='err'>{formik.errors.firstName}</div>
      ) : null}
     

     <div className='fields'>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        className={formik.touched.lastName && formik.errors.lastName ? 'err-input' : ''}
      />
       </div>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className='err'>{formik.errors.lastName}</div>
      ) : null}
     

     <div className='fields'>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? 'err-input' : ''}
      />
       </div>
      {formik.touched.email && formik.errors.email ? (
        <div className='err'>{formik.errors.email}</div>
      ) : null}
     

      <div className='fields'>
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="city"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
        className={formik.touched.city && formik.errors.city ? 'err-input' : ''}
      />
      </div>
      {formik.touched.city && formik.errors.city ? (
        <div className='err'>{formik.errors.city}</div>
      ) : null}
      

      <button className='button' type="submit" style={{marginTop:"20px"}}>Submit</button>
    </form>
  );
};
export default Formnew;