import React from 'react';
import { Link } from 'react-router-dom';


function Footer (){
return(


<div className="footer">
    <Link className="links" to="/facebook"><span>facebook</span></Link>
    <Link className="links" to="/linkedin"><span>linkedin</span></Link>
    <Link className="links" to="/github"><span>github</span></Link>
</div>

)



}
export default Footer;
