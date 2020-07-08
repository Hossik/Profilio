import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from './';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    return (
  
    <ThemeProvider theme={theme} >
      <>  
        <div id="head" ref={node} >
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  
    );
  }

export default Header;