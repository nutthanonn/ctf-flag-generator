import React, { useState } from "react";
import styled from "styled-components";
import Copy from "../assets/copy.svg";
import Check from "../assets/check.svg";
import Rotate from "../assets/rotate-right.svg";

interface IFlag {
  value: string;
  onReset: () => void;
}

const Flag: React.FC<IFlag> = (props) => {
  const { value, onReset } = props;
  const [copyState, setCopyState] = useState<boolean>(false);

  const handleClick = () => {
    window.navigator.clipboard.writeText(`flag{${value}}`);

    setCopyState(true);

    setTimeout(() => {
      setCopyState(false);
    }, 1000);
  };

  return (
    <>
      <Box>
        <Header>flag&#123;{value}&#125;</Header>
        <Img
          src={copyState ? Check : Copy}
          alt="copy-icons"
          onClick={handleClick}
        />
        <Img src={Rotate} alt="reset-flag" onClick={onReset} />
      </Box>
    </>
  );
};

export default Flag;

const Box = styled.div`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
`;

const Header = styled.h5`
  font-size: 3rem;
  text-align: center;
  color: #a0d8b3;
  font-family: "Courier New", Courier, monospace;
  font-weight: 300;
`;

const Img = styled.img`
  filter: invert(98%) sepia(97%) saturate(452%) hue-rotate(62deg)
    brightness(91%) contrast(85%);
  width: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  transition: all 0.2s ease;
`;
