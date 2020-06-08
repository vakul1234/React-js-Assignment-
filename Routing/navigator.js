import React from 'react';
import {Link} from 'react-router-dom';
const Navigator = () =>{
    return(
        <div>
        <table className="jumbotron" style={{'fontFamily':'New Times Roman','width':'490px','height':'90px'}}>
          <tr>
            <th colspan="3" style={{'fontFamily':'arial',color:'black'}}>I am Navigator Help you to Navigate</th>
          </tr>
          <tr>
            <td><Link to="/" style={{'textDecoration':'none'}}>Home</Link></td>
            <td><Link to="/aboutus" style={{'textDecoration':'none'}}>About Us</Link></td>
            <td><Link to="/contactus" style={{'textDecoration':'none'}}>Contact Us</Link></td>
          </tr>
        </table>
        </div>
    )
}

export default Navigator;