  
import React, { useRef } from "react"

export const SearchBar = ({ setTerms }) => {

    const { terms } = useRef()

    return (
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchTerms">Search:</label>
                <input onKeyUp={ e => setTerms(e.target.value) }
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
                  // const gameName = games.find(g => g.name === games.locationId)
                  // const gameID = games.find(g => g.id === games.locationId)
                  // const gamePicture = games.find(g => g.image.original_url === games.locationId)
                  // const customer = customers.find(c => c.id === games.customerId)
                  console.log('hi')
                  // toggle()
              }}>Enter</button>
            </div>
            </div>
        </fieldset>

    )
}
