import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from './';
import React, { useState } from 'react';
function Header() {
    const [open, setOpen] = useState(false);
    return (
  
    <ThemeProvider theme={theme} >
      <>  
        <div id="head">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  
    );
  }
  














export default Header;