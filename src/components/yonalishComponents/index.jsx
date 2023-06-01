import React, {useEffect} from 'react'
import Container from './style'
import {useNavigate, useParams} from "react-router-dom"
import {data} from "../../mock/yonalishlar"
import {BiExit} from "react-icons/bi"

const YonalishComponents = () => {

    const { id } = useParams()
    const oneData = data.filter((value)=> value.id == id)[0]

    useEffect(()=> {window.scrollTo(0,0)}, [])

    const navigate = useNavigate()

    return(
        <Container>
            <Container.Inset>
                <Container.Button onClick={()=> navigate(-1)}>
                    Ortga
                    <BiExit className={'icon'} />
                </Container.Button>
                <h1>{oneData.title}</h1>
                <p>{oneData.fullDesc}</p>
            </Container.Inset>
        </Container>
    )
}

export default YonalishComponents