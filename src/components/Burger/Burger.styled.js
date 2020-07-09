import styled from 'styled-components';
export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (max-width: 767px) {
    width: 2rem;
    height: 2rem;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 4rem;
    height: 0.50rem;
    background: ${({ theme, open }) => open ? theme.close : theme.open};
    border-radius: 20px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    @media (max-width: 767px) {
      width: 2rem;
      height: 0.25rem;
    }
  }
`;