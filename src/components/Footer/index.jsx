import React from 'react'
import Container from './style'
import img from '../../assets/png/big_logo.png'
import {HiOutlinePhone} from "react-icons/hi"
import {SiTelegram} from "react-icons/si"
import {RiInstagramFill} from "react-icons/ri"
import {FaFacebook} from "react-icons/fa"
import {ImLocation} from "react-icons/im"
import {BsYoutube} from "react-icons/bs"


const Footer = () => {


    return (
        <Container>
            <Container.Inset>

                <Container.Top>
                    <Container.Left>
                        <Container.TopSecitons>

                            <div className={'iconArea'}>
                                <ImLocation className={'icon pointer'}/>
                            </div>
                            <div>
                                <h3>Manzil</h3>
                                <p><b>Karimov St, Tashkent, Uzbekistan</b></p>
                            </div>

                        </Container.TopSecitons>

                        <Container.TopSecitons>
                            <div className={'iconArea'}>
                                <HiOutlinePhone className={'icon pointer'}/>
                            </div>
                            <div>
                                <h3>Telefon</h3>
                                <p><b>+998 91-774-62-62</b></p>
                            </div>
                        </Container.TopSecitons>
                    </Container.Left>

                    <Container.Right>
                        <Container.Messengers>
                            <a href={'https://t.me/peshqadam_karvoni'} target={'_blank'}>
                                <SiTelegram className={'pointer icon'} size={'60px'}/>
                            </a>
                            <a href={'https://www.instagram.com/peshqadam_karvoni/?igshid=MDM4ZDc5MmU%3D'}
                               target={'_blank'}>
                                <RiInstagramFill className={'pointer icon'} size={'70px'}/>
                                <span></span>
                            </a>
                            <a href={'https://www.facebook.com/PeshqadamKarvoni?mibextid=ZbWKwL'} target={'_blank'}>
                                <FaFacebook className={'pointer icon'} size={'60px'}/>
                            </a>
                            <a href={'https://youtube.com/@peshqadamkarvoni'} target={'_blank'}>
                                <BsYoutube className={'pointer icon'} size={'70px'}/>
                            </a>
                        </Container.Messengers>
                        <Container.Map>
                            <a href={'https://www.google.com/maps/place/41°22\'54.6%22N+69°13\'33.7%22E/@41.382493,69.2216449,16z/data=!4m4!3m3!8m2!3d41.381841!4d69.226033'} target={'_blank'}>
                                <div>

                                </div>
                            </a>
                        </Container.Map>
                    </Container.Right>
                </Container.Top>

                <Container.Bottom>
                    <img src={img} alt="logo"/>
                </Container.Bottom>
            </Container.Inset>
        </Container>
    );
}

export default Footer
