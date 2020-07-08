import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(184, 176, 176);
  height: 97vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0% 45% 45% 0%;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  @media only screen and (max-width:1025px ) and (min-width:1020px )  {
    height: 80vh;  
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
        color: rgb(233, 212, 25);
      }
    }
    transform: translateX(-100%);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-600%)'};
  `;