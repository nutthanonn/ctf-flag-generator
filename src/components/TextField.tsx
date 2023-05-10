import React from "react";
import styled from "styled-components";

interface ITextField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextField> = (props) => {
  const { value, onChange } = props;

  return (
    <>
      <FormGroup className="form__group field">
        <FormField
          type="input"
          className="form__field"
          placeholder="flag{}"
          name="flag"
          id="custom_flag"
          required
          onChange={onChange}
          value={value}
        />
        <FormLabel htmlFor="name" className="form__label">
          Flag
        </FormLabel>
      </FormGroup>
    </>
  );
};

export default TextField;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #38ef7d;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`;
