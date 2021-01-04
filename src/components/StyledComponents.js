import { Form, Field } from "formik";
import styled from "styled-components";

//Font Imports//s
<style>
@import url('https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap');
</style>



//SignUp Form Exports//
export const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  margin: auto;
  background-color: #e5ffe5;
  color: #000;
`;

export const Heading = styled.h1`
  font-family: 'Euphoria Script', cursive;
  color: #8ca9fc;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  padding-top: 4rem;
`;

export const Label = styled.label`
margin: 0rem auto;
margin-left: 8rem;
height: 1rem;
border: none;
font-size: 1.5rem;
color: #000;
&::placeholder {
  color: #000;
}
`;


export const Input = styled(Field)`
  margin: 1rem auto;
  width: 70%;
  height: 2rem;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #FFF;
  color: #000;
  &::placeholder {
    color: #000;
  }
`;

export const Button = styled.button`
  height: 4.5rem;
  margin: 3rem 25rem 6rem 8rem;
  padding: 0rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.75rem;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: #8ca9fc;
  color: #e5ffe5;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #8ca9fc;
    color: #e5ffe5;
  }
`;

export const Error = styled.p`
  width: 70%;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  color: #721c24;
  border-radius: 0.5rem;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 0px 10px; 
  margin: -16px auto 0rem;
  z-index: 3;
`;

//Edit Plants Exports//

export const Body = styled.div`
  opacity: 0.9;
  background-color: #708090;
  width: 100%;
  height: 100%;
`;

export const PlantForm = styled(Form)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin: 100px auto 50px;
  border: 1px solid #778899;
  border-radius: 10px;
  text-align: left;
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5ffe5;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background-color: #e5ffe5;
  }
`;

export const FieldInput = styled(Field)`
  margin-top: 32px;
  padding: 0.8rem;
  width: 90%;
  display: block;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

