import React, { useState } from "react";

const Logout = props => {
  const [logout, logoutNow] = useState(
    // localstorage.clear(),
    // window.location.reload()
  )


  return(
      <div className="logoutNavBar">
          <button className="logoutButton" color="youtube" onClick={() => logoutNow()}>Logout</button>
      </div>
    )
}


export default Logout