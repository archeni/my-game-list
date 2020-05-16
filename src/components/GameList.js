import React, { useState } from "react"
import Dashboard from "./Dashboard"
import Auth from "./welcome/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("game_reviewer") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}