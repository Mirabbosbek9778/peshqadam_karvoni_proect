import React from 'react'
import Container from './style'
import {CgPushRight} from "react-icons/cg"
const YangiliklarCom = () => {
    return(
        <Container>
            <p className="mainTitle nocopy">Yangiliklar</p>
            <Container.BlocksSection>
                    <Container.Block>

                        <div className={'backImg'}>

                        </div>

                        <div className={'text'}>
                            <p className="data">20 mart</p>
                            <p className="title">Qoriya qizlarimiz musobaqalashishdi</p>
                            <p className="desc">Kecha, 27 fevral kuni Toshkent Islom institutida institut talaba qizlari…..</p>
                        </div>

                        <div className={'text'}>
                            <button className={'button'}>
                                Batafsil…
                                <CgPushRight className={'buttonIcon'} />
                            </button>
                        </div>
                    </Container.Block>
                    <Container.Block>
                        <div className={'backImg'}>

                        </div>
                        <div className={'text'}>
                            <p className="data">20 mart</p>
                            <p className="title">Qoriya qizlarimiz musobaqalashishdi</p>
                            <p className="desc">Kecha, 27 fevral kuni Toshkent Islom institutida institut talaba qizlari…..</p>
                        </div>
                        <div className={'text'}>
                            <button className={'button'}>
                                Batafsil…
                                <CgPushRight className={'buttonIcon'} />
                            </button>
                        </div>
                    </Container.Block>
                    <Container.Block>
                        <div className={'backImg'}>

                        </div>
                        <div className={'text'}>
                            <p className="data">20 mart</p>
                            <p className="title">Qoriya qizlarimiz musobaqalashishdi</p>
                            <p className="desc">Kecha, 27 fevral kuni Toshkent Islom institutida institut talaba qizlari…..</p>
                        </div>
                        <div className={'text'}>
                            <button className={'button'}>
                                Batafsil…
                                <CgPushRight className={'buttonIcon'} />
                            </button>
                        </div>
                    </Container.Block>
            </Container.BlocksSection>
            <Container.Button>
                <button>Ko’proq</button>
            </Container.Button>
        </Container>
    )
}

export default YangiliklarCom