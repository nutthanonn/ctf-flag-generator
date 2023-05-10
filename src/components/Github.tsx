import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/github.png";

const Github: React.FC = () => {
  return (
    <>
      <Icon src={GithubIcon} alt="github" />
    </>
  );
};

export default Github;

const Icon = styled.img`
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
`;
