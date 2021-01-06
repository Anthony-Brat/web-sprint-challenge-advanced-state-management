import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addSmurf, postNewSmurf } from "../actions/index"
import styled from "styled-components";
import axios from "axios";



const NewSmurf = (props) => {


    const handleChanges = (values) => {
        axios.post("http://localhost:3333/smurfs", values)
        .then((res) =>console.log(res))
        .catch((err)=> console.log(err.message))
    }
    return(
        <Formik initialValues={{name: "", age: "", height: "", id: 0}}
        onSubmit ={(values, { resetForm }) =>{
            handleChanges(values);
            resetForm();
 }}>
     <Form>
         <FormContainer>
         <Field name="name" placeholder="name" />
         <Field name="age" placeholder="age" />
         <Field name="height" placeholder="height" />
         <button type="submit">Add Smurf</button>
         </FormContainer>
     </Form>
        </Formik>
    )
}

export const FormContainer = styled.div`
button {
    width: fit-content;
    background-color: dodgerblue;
    font-size: .75rem;
    padding: 0.5rem 2.5rem;
    border-radius: 0.6rem;
    border: 2px solid #242829;
    font-family: "Bebas Neue", cursive;
    color: #f5f5f5;  
  }
 
  
  
  
`;
export default connect(null, { postNewSmurf })(NewSmurf);