import styled from 'styled-components'
import backImg from '../../../assets/png/startPageBack.png'
import { Swiper, SwiperSlide } from "swiper/react"


const Container = styled.div`
  height: 600px;
  @media (width < 900px){
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
  .swiper-pagination, .swiper-pagination-clickable, .swiper-pagination-bullets, .swiper-pagination-horizontal{
    >span{
      margin: 0 5px !important;
      padding: 5px !important;
      background-color: #fff !important;
    }
  }
`
Container.Inset = styled.div`
  max-width: 1440px;
  margin: auto;
  background-image: url(${backImg});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  height: 100%;
  gap: 20px;
  .title{
    font-size: 70px;
    font-weight: bold;
    max-width: 380px;
    line-height: 60px;
  }
  .subTitle{
    font-size: 16px;
    max-width: 470px;
  }
  >div{
    display: flex;
    gap: 10px;
  }
  @media (width < 900px){
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    .title{
      text-align: center;
      margin: auto;
      font-size: 35px;
      line-height: 35px;
    }
    .subTitle{
      text-align: center;
      margin: auto;
      font-size: 15px;
      line-height: 18px;
      max-width: 370px;
    }
  }
`
Container.Button = styled.a`
  background-color: ${({back})=> back};
  color: ${({color})=> color};
  border: 0;
  border-radius: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  @media (width < 900px){
    margin: auto;
    display: ${({mobileNone})=> mobileNone ? 'none' : 'block'};
  }
`

Container.Swiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`
Container.SwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`
export default Container