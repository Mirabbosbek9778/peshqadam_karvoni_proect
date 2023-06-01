import React from 'react'
import StartCom from "../../components/homaPageComponents/StartCom"
import YonalishlarCom from "../../components/homaPageComponents/YonalishlarCom"
import YangiliklarCom from "../../components/homaPageComponents/YangiliklarCom"

const HomePage = () => {
    return(
        <div>
            <StartCom />
            <YonalishlarCom />
            <YangiliklarCom />
        </div>
    )
}

export default HomePage