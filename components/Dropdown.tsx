import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Currency } from '../api/types';

export interface DropdownOption {
  value: string | number;
  displayName: string;
}

const Select = styled.select`
  border: 1px solid #4c4d4c;
  border-radius: 0.188em;
  color: #4c4d4c;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  transition: all 0.3s ease;
  padding: 0.6em 1.8em 0.5em 0.8em;
  line-height: 1.5em;
  background-color: white;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='grey'/></g></svg>");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin: 0 1rem;
  box-sizing: border-box;
  appearance: none;
  &:hover {
    color: #07aae6;
  }
  &:hover,
  &:focus {
    border-color: #07aae6;
  }
  > option {
    color: #4c4d4c;
    font-weight: 300;
  }
`;

interface OwnProps {
  options: Array<DropdownOption>;
  onOptionChange: (value: any) => void;
}

type Props = OwnProps;

const Dropdown = ({ onOptionChange, options }: Props) => {
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(e.currentTarget.value as Currency);
  };

  return (
    <Select onChange={onDropdownChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.displayName}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
