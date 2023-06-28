import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Fields from "./Fields";
import RadioBtn from "./RadioBtn";

const NewForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),
    email: Yup.string().email("invalid email").required("required"),
    city: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "invalid number")
      .max(10, "shoulb me at max 10 digits")
      .min(10, "there must be 10 digits")
      .required("required"),

      picked: Yup.string().required('Please select an option for Age'),
     
      picked2: Yup.string()
      .test('picked2', 'Please select an option for Driving License', function(value) {
        const { picked } = this.parent;
        if (picked === 'One') {
          return value !== undefined && value !== '';
        }
        return true;
      })
      .when('picked', {
        is: 'picked',
        then: Yup.string().notRequired(),
      }),

      // picked2: Yup.string().when("picked",  {
      //   is: 'One',
      //   then: Yup.string().required('Driving license selection is required'),
      //   // if(picked==='One')
      //   // return schema.required('Driving license selection is required')
      //   // else
      //   // return schema;
      // }),

      licence: Yup.string()
  .test('licence', 'Please enter Licence Number', function(value) {
    const { picked2 } = this.parent;
    if (picked2 === 'yes') {
      return value !== undefined && value !== '';
    }
    return true;
  })
  .when('picked2', {
    is: 'picked2',
    then: Yup.string()
      .required('Please enter Licence Number')
      .matches(/^[0-9]+$/, 'Invalid number'),
  }),
     
      // licence: Yup.string().when("picked2", {
      //   is: true, 
      //   then: Yup.string().required("License number is required")
      //   .matches(/^[0-9]+$/, "invalid number"),
      // }),
      // licence: Yup.string().when("picked2", (picked2, schema) => {
      //   if (picked2==='yes') {
      //     return schema.required("License number is required").matches(/^[0-9]+$/, "Invalid number");
      //   } else {
      //     return schema;
      //   }
      // }),
      
      // licence: Yup.string()
      // .matches(/^[0-9]+$/, "invalid number")
      // .required("required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          city: "",
          phone: "",
          picked: "",
          picked2: "",
          licence:'',
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="forms">
            <h2>Customer Information</h2>

            <Fields label="First Name" name="firstName" type="text" />
            <Fields label="Last Name" name="lastName" type="text" />
            <Fields label="Email" name="email" type="email" />
            <Fields label="City" name="city" type="text" />
            <Fields label="Phone No." name="phone"  />

{/* //==================================radio==================================// */}

            <RadioBtn label0 = 'Age'  label1="&gt;=18"  label2="&lt;18" name="picked" value1="One" value2="Two" />
            {errors.picked && touched.picked ? (
              <div className="err">{errors.picked}</div>
            ) : null}
            {/* ====================================conditional - 1================================================= */}
            {
              values.picked === "One" && 
              <RadioBtn label0 = ' Do you have a driving license'  label1="Yes"  label2="No" name="picked2" value1="yes" value2="no" />}  
              {errors.picked2 && touched.picked2 ? (
              <div className="err">{errors.picked2}</div>
            ): null}

            {/* =================================conditional - 2======================================================= */}

            {values.picked2 === "yes" && (
              <Fields label="Licence" name="licence" />
            )}

            {/* ============================submit btn=============================================================== */}
            <button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewForm;


