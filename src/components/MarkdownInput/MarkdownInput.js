import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  height: 60vh;
  resize: none;
  font-size: 16px;
  font-family: arial;
  outline: none;
`;

const MarkdownInput = ({ onInputChange }) => (
  <TextArea rows="25" onChange={onInputChange} />
);

export default MarkdownInput;
