import "./style.scss";
import React  from 'react';
import logo from './first.png';
const table = () => {

  return <div id="footer_section">
    <div id="footerMainRow">
    <div className="container">
      <div className="row">
      <div className="col-lg-4"><img src= {logo} alt='profile' className='profile'></img></div>
      <div className="col-lg-4">
        <p>Contact us</p>
        <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form"
         aria-label="Email Form" data-autopilot-anywhere="0001556802155671_0b4f3c0100784d1da1b8ec60f959a3f3">
          <input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" 
          placeholder="Your e-mail" id="name-2" required="" />
          <input type="submit" value="subscribe"
           data-wait="Please wait..." class="subscribebutton w-button" />

        </form>
      </div>
      <div className="col-lg-4">
        <p>Sid loves hardik</p>
        <p>awwwwwwwwwwwwwwwwwwwwwwwww</p>
        <p>So sweeeeeeeeetttttttt</p>
        </div>
      </div>
    </div>
    <div>
  
    </div>
    <div>
    
    </div>
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