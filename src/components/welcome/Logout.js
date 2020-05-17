import React from "react";

const Logout = props => {
  sessionStorage.clear();
  window.location.reload();

  return(
      <div className="logoutNavBar">
          <button className="logoutButton" color="youtube" onClick={this.logoutFunction}>Logout</button>
      </div>
    )
}


export default Logout