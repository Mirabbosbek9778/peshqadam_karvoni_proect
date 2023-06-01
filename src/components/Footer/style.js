import styled from 'styled-components'
import mapImg from '../../assets/png/map.png'

const Container = styled.div`
  margin: 200px 0 0 0;
  background-color: #01444F;
  height: 420px;
  @media (width < 900px){
    margin: 100px 0 0 0;
    height: 700px;
  }
`
Container.Inset = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
  margin: auto;

`

Container.Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Container.Right = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  @media (width < 900px){
    gap: 20px;
  }
`

Container.Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (width < 900px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
Container.TopSecitons = styled.div`
  display: grid;
  grid-template-columns: 70px 6fr;
  gap: 15px;
  width: 400px;
  @media (width < 500px){
    width: 280px;
  }
  .iconArea{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon{
    color: #fff;
    transition: .4s;
    font-size: 50px !important;
    :hover{
      color: red;
    }
  }
  color: #fff;
  max-width: 350px;
  margin: auto;
`

Container.Messengers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  .icon{
    color: #fff;
    transition: .4s;
    :hover{
      color: red;
    }
  }
  @media (width < 430px){
    gap: 3%;
  }
  
`


Container.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`
Container.Map = styled.div`
  a{
    width: 100%;
    height: 100%;
  }
  div{
    width: 100%;
    height: 100%;
    background-image: url(${mapImg});
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: center;
    border-radius: 10px;
  }
`

export default Container