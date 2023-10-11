import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: block;
  margin-left: 30px;
  
`;

export const Item = styled.li`
  display: block;
  padding: 10px, 15px;
  font-family: Roboto sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: rgb(106 162 144);
`;

export const TitleSpan = styled.span`
  color: rgb(106 162 144);

  &:hover,
  :focus {
    color: #8bdfc3;
  }
`;


