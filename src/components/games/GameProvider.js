import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const GameContext = React.createContext()

const apiKey = '5f6c532c1e91441f5637a7fda58d7d9454bba96d';

/*
 This component establishes what data can be used.
 */
export const GameProvider = (props) => {
    const [games, setGames] = useState([])

    const getGames = () => {
        return fetch(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json`)
            .then(res => res.json())
            .then(setGames)
    }

    useEffect(() => {
      getGames()
    }, [])

    return (
        <GameContext.Provider value={{
            games
        }}>
            {props.children}
        </GameContext.Provider>
    )
}