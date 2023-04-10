import "./style.scss";
import React  from 'react';
const table = () => {
    
  return <div id="theDiv">
    <div class="Results">
    <p class="heading">Last 10 Test Results</p>
    <div class="tableHeader"></div>
    <div>
    <table class="table table-light ">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
</div>
};

export default table;