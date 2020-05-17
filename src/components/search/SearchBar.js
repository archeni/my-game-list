import React, { useRef, useState, useEffect } from "react";

// import getGames from '../games/GameProvider';

const SearchBar = (props) => {
    const [tempSearch, setTempSearch] = useState(null)

    const { terms } = useRef()
    
    useEffect (() => {
        console.log('temp search', tempSearch)
    },[tempSearch])
    
    return (
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchTerms">Search:</label>
                <input onKeyUp={ e => setTempSearch(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    autoFocus
                    className="form-control"
                />
            </div>
            <div className="searchResults">
            <h3>Game Search</h3>
            <div className="games">
                <button onClick={() => {
                //   getGames(searchTerms.value)
                //   .then((res) => {
                //       console.log(res);
                //   })
                  // const gameName = games.find(g => g.name === games.locationId)
                  // const gameID = games.find(g => g.id === games.locationId)
                  // const gamePicture = games.find(g => g.image.original_url === games.locationId)
                  // const customer = customers.find(c => c.id === games.customerId)
                //   console.log('hi')
                  // toggle()
              }}>Enter</button>
            </div>
            </div>
        </fieldset>

    )
}

export default SearchBar;

