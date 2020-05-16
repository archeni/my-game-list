import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Game = ({game, customer}) => (
    <section className="game">
        <div className="game__name">{game.name}</div>
        <div className="game__picture">{game.name}</div>
        <div className="game__owner">Customer Name: {customer.name}</div>
    </section>
)