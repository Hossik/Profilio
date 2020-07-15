import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} >
      <Link  to="/aboutMe" >
        <img id="man" alt="hossik" src="../assets/hossik.jpeg"  />{"  "}
        <span >About me</span>
      </Link>
      <Link  to="/tools">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </Link>
        <Link  to="/contacts">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;