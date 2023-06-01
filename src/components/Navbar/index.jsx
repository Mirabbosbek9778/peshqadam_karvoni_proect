import Container from './style'
import logo from '../../assets/png/logo.png'
import {useNavigate} from 'react-router-dom'
import {GoSearch} from "react-icons/go"
import {TbBrandInstagram, TbBrandTelegram} from "react-icons/tb"
import {AiOutlineFacebook, AiOutlineYoutube} from "react-icons/ai"
import {FaBook} from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <Container.Inset>

                <img src={logo} alt="" className={'pointer nocopy'} onClick={()=> navigate('/home')} />

                <Container.Input>
                    <input type="text" placeholder={'Qidirish....'} />
                    <div className={'pointer'}>
                        <GoSearch className={'icon'} />
                    </div>
                </Container.Input>
                <Container.OurMessengersSection className={'nocopy'}>
                    <p>Bizning ijtimoiy tarmoqlarimiz</p>
                    <div>
                        <a href={'https://t.me/peshqadam_karvoni'} target={'_blank'} rel="noreferrer"><TbBrandTelegram className={'pointer icon'} /></a>
                        <div className="line"></div>
                        <a href={'https://www.instagram.com/peshqadam_karvoni/?igshid=MDM4ZDc5MmU%3D'} target={'_blank'} rel="noreferrer"><TbBrandInstagram className={'pointer icon'} /></a>
                        <div className="line"></div>
                        <a href={'https://www.facebook.com/PeshqadamKarvoni?mibextid=ZbWKwL'} target={'_blank'} rel="noreferrer"><AiOutlineFacebook className={'pointer icon'} /></a>
                        <div className="line"></div>
                        <a href={'https://youtube.com/@peshqadamkarvoni'} target={'_blank'} rel="noreferrer"><AiOutlineYoutube className={'pointer icon'} size={'26px'} /></a>
                    </div>
                </Container.OurMessengersSection>
                <Container.ArizaButton className={'pointer nocopy'} onClick={()=> navigate('/loyiha')}>
                    <FaBook className={'icon'} />
                    <div className="line"></div>
                    <b>Loyiha bilan tanishish</b>
                </Container.ArizaButton>

            </Container.Inset>
        </Container>
    )
}

export default Navbar