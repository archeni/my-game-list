import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
// export const GameContext = React.createContext()

const apiKey = '5f6c532c1e91441f5637a7fda58d7d9454bba96d';

/*
 This component establishes what data can be used.
 */
// export const GameProvider = (props) => {
  const [games, setGames] = useState([])


  const getGames = (searchTerm) => {
    return fetch(`https://www.giantbomb.com/api/search/?api_key=${apiKey}&format=json&limit=200&query="${searchTerm}"&resources=game`)
      .then(res => res.json())
      .then(info => {
        for (let i = 0; i < info.results.length; i++) {
          games.push(info.results[i])
        }
      })
  }


//   useEffect(() => {
//     getGames()
//   }, [])

//   return (
//     <GameContext.Provider value={{
//       getGames, games
//     }}>
//       {props.children}
//     </GameContext.Provider>
//   )
// }

export default { getGames };
