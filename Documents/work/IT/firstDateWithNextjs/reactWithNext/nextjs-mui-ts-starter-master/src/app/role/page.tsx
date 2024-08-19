'use client'
import { useState } from "react"

const RolePage = () => {
    const [myName, setMyName] = useState('ihihihi')
    return (
        <>
            this is role page and {myName}
        </>
    )
}

export default RolePage