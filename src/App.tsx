import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "./components/TextField";
import UndrawFlag from "./assets/undraw_flag.svg";
import Flag from "./components/Flag";

import Random_flag from "./helper/random_flag";
import useDebounce from "./hooks/useDebounce";
import Github from "./components/Github";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const [flag, setFlag] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
  };

  const handleReset = () => {
    setFlag(Random_flag(debouncedValue));
  };

  useEffect(() => {
    setFlag(Random_flag(debouncedValue));
  }, [debouncedValue]);

  return (
    <>
      <Center>
        <Header>CTF Flag Generator</Header>
        <TextField value={value} onChange={handleChange} />
        <Flag value={flag} onReset={handleReset} />
        <Img src={UndrawFlag} alt="flag_picture" />
        <Github />
      </Center>
    </>
  );
};

export default App;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
`;

const Img = styled.img`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 20vw;
`;
