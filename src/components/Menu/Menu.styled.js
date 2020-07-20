import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(184, 176, 176);
  height: 77vh;
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
  span{
    justify-content: start;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: start;

    }
  }
  .links {
    font-size: 5vmin;
    text-transform: uppercase;
    padding: 2vh 0;
    font-weight: bold;
    
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      
      justify-content: start;
    }
    &:hover {
        color: rgb(233, 212, 25);
      }
    }
    transform: translateX(-100%);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-600%)'};
  `;