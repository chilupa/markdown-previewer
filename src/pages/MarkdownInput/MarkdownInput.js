import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 16px;
  font-family: Arial;
`;

const MarkdownInput = ({ onInputChange }) => {
  return <TextArea rows="25" onChange={onInputChange} />;
};

export default MarkdownInput;
