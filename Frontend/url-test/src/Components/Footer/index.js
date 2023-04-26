import "./style.scss";
import React  from 'react';
import logo from './first.png';
const table = () => {
  return <div id="footer_section">
    <div id="footerMainRow">
    <img src= {logo} alt='profile' className='profile'></img>
    </div>
    <div id="preFooter">
    <div class="footerbottomleftside">
      <p class="footersmalltext">© 2023 BrokenLinks. India All Rights Reserved</p>
      <div class="termcondblock">
        <a href="#" class="footerlink">privacy policy</a>
        <a href="#" class="footerlink">Terms And conditions</a>
        </div>
        </div>
    </div>
    
</div>
};

export default table;