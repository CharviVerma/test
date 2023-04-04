import "./style.scss";
import React  from 'react';
const checkUrl = () => {
    
  return <div>
  <div id="middle">
    <div id="check_url"></div>
        <h2>CHECK YOUR WEBLINK HERE</h2>
        <p>This tool helps you identify broken links in your webpage.</p>
        <div><span class="toolstext">Domain Name</span></div>
    <div class="enter">
    <input tabindex="1" type="text" value="    enter url" 
    class="host_name" name="hostName" id="hostName" autofocus="" autocorrect="off" autocapitalize="none"></input>
    <input tabindex="1" type="text" value="  time" 
    class="time" name="hostName" id="hostName" autofocus="" autocorrect="off" autocapitalize="none"></input>
    </div>
    <button class="Signup btn btn-success"><a class="nav-link text-white p-0"  href="#">Go</a></button>
    </div>
</div>
};

export default checkUrl;


