import styled from "styled-components";

const FormField = styled.div`
  margin-bottom: 1.4rem;
  &:last-child {
    margin-bottom: 0;
  }

  label {
    color: var(--dark-blue-color);
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 400;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.375rem;
  }

  input,
  textarea {
    font-family: sans-serif;
    font-size: 1rem;
    padding: 0.75em 1em;
    box-sizing: border-box;
    width: 100%;
  }

  textarea {
    height: 140px;
    resize: none;
  }
`;

export default FormField;
