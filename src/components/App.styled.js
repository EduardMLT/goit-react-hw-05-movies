import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 8px 0;
  margin-bottom: 16px;
  
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #8bdfc3;
  }

  &:hover,
  :focus {
    background-color: #6aa290;
  }
`;


// export const LinkGoBack = ({ location }) => {
//   return (
//     <StyledLink to={location.state?.from}>
//       <img src={goBack} alt="go back" />
//     </StyledLink>
//   );
// };