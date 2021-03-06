import styled from 'styled-components';

export const StyledApp = styled.header`
  display:flex;
  justify-content: space-around;
  align-items:center;
  & h2{
    color: #98EA28;
    font-size:1.8rem;
    font-style:italic;
    text-decoration:none;
  }
  & nav{
    width: 50%;
    text-align:end;
  }
  & button{
    width: 15%;
    margin: 4% 1%;
    padding:10px;
    font-size: 1.2rem;
    border-radius: 10rem;
    border: 1px solid black;
    outline:none;
  }
`;
