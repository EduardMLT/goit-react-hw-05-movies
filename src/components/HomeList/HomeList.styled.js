import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: block;
  margin-left: 30px;
  
`;

export const Item = styled(Link)`
  display: block;
  padding: 10px, 15px;
  font-family: Roboto sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: green;
`;


