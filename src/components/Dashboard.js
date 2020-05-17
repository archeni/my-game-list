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

    // HIGHER ORDER FUNCTION. IT RETURNS OTHER FUNCTION (i.e. COMPONENTS)
    // const showLocations = () => (
    //     <LocationProvider>
    //         <LocationList />
    //     </LocationProvider>
    // )
    
    // const showCustomers = () => (
    //     <CustomerProvider>
    //         <CustomerList />
    //     </CustomerProvider>
    // )

    // const showEmployees = () => (
    //     <EmployeeProvider>
    //         <LocationProvider>
    //             <EmployeeList />
    //         </LocationProvider>
    //     </EmployeeProvider>
    // )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    // useEffect(() => {
    //     if (activeList === "customers") {
    //         setComponents(showCustomers)
    //     }
    //     else if (activeList === "locations") {
    //         setComponents(showLocations)
    //     }
    //     else if (activeList === "employees") {
    //         setComponents(showEmployees)
    //     }
    // }, [activeList])

    return (
            <div className="mainContainer">
                <h1>My Game List</h1>
            <div className="dataContainer">
              <div>
                <Logout/>
              </div>
              <div className="searchContainer">
                {/* <AnimalProvider> */}
                    <CustomerProvider>
                        {/* <GameProvider> */}
                            <SearchBar setTerms={setTerms} />
                            {/* <SearchResults searchTerms={searchTerms} /> */}
                        {/* </GameProvider> */}
                    </CustomerProvider>
                {/* </AnimalProvider> */}
            </div>
                <small>Where you can show your game love.</small>
                <div className="listContainer">
                    <div className="links">
                        {/* <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                        <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}