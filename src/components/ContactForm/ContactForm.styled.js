import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormField = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Input = styled(Field)`
  padding: 5px 10px;
  width: 200px;
  font-size: 20px;
  background-color: rgba(26, 127, 141, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  color: rgb(238, 234, 234);
`;

export const FormLabel = styled.label`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  gap: 30px;
`;
export const LabelWrap = styled.div`
display: flex;
align-items: end;
gap: 5px`
export const FormButton = styled.button`
display: flex;
gap: 20px;
align-items:center;
justify-content:center;
  cursor: pointer;
  padding: 15px 30px;
  min-width: 100px;
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  border: none;
  border-radius: 10px;
  background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 50px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
  }
`;
