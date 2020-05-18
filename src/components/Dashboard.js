import React, { useState, useEffect } from "react"
import { CustomerProvider } from "./customer/CustomerProvider"
import { GameProvider } from "./games/GameProvider"
// import CustomerList from "./customer/CustomerList"
import  SearchBar  from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./GameList.css"
import Logout from "./welcome/Logout"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()


    return (
          <div className="mainContainer">
            <header className='navbar'>
                <h1>My Game List</h1>
                <small>Where you can show your game love.</small>
              <nav>
                <Logout/>
              </nav>
            </header>
            <div className="dataContainer">
              <div className="searchContainer">
                    <CustomerProvider>
                        {/* <GameProvider> */}
                            <SearchBar setTerms={setTerms} />
                            {/* <SearchResults searchTerms={searchTerms} /> */}
                        {/* </GameProvider> */}
                    </CustomerProvider>
              </div>
            </div>
                <div className="listContainer">
                    <div className="links">
                        {/* <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                      <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div> */}
                    </div>
                </div>
          </div>
            
    )
}