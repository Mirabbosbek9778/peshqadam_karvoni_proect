import styled from 'styled-components'

const Container = styled.div`
  height: 67px;
  background-color: #01444F;
  width: 100%;
  padding: 0 var(--mainPadding);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  
`
Container.Inset = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  >img{
    width: 110px;
    height: 37px;
  }
  @media (width < 900px){
    gap: 10px;
    >img{
      width: 60px;
      height: 20px;
    }
  }
`
Container.Input = styled.div`
  max-width: 390px;
  width: 100%;
  height: 37px;
  position: relative;
  input {
    width: 100%;
    height: 37px;
    padding: 0 40px 0 10px;
    color: white;
    background-color: rgba(185, 185, 185, 0.24);
    border: 0;
  }
  div {
    height: 37px;
    width: 37px;
    position: absolute;
    top: 0;
    right: 0;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    background: #EDEDED 0 0 no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon{
    font-size: 22px;
  }
  
  @media (width < 900px){
    max-width: 390px;
    width: 100%;
    height: 25px;
    position: relative;
    
    input {
      width: 100%;
      height: 100%;
      padding: 0 30px 0 5px;
      color: white;
      background-color: rgba(185, 185, 185, 0.24);
      border: 0;
      position: absolute;
      top: 0;
      
    }
    div {
      height: 25px;
      width: 23px;
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      background: #EDEDED 0 0 no-repeat padding-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon{
      font-size: 16px;
    }
  }
`
Container.OurMessengersSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  p{
    font-weight: bold;
    color: #fff;
    font-size: 12px;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    .line{
      margin: 0 11px;
      height: 30px;
      width: 2px;
      background-color: #fff;
      border-radius: 5px;
    }
  }
  .icon{
    color: #fff;
    font-size: 22px;
    transition: .2s;
    :hover{
      color: red;
    }
  }
  @media (width < 900px){
    display: none;
  }
`
Container.ArizaButton = styled.button`
  padding: 0 30px;
  width: 200px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: 250px;
  transition: .2s;
  b{
    white-space: normal;
  }
  .icon{
    font-size: 20px;
  }
  .line{
    width: 2px;
    height: 23px;
    background-color: #01444F;
  }
  
  @media (width < 900px){
    padding: 0 8px;
    height: 20px;
    gap: 4px;
    font-size: 10px;
    white-space: nowrap;
    .icon{
      font-size: 16px;
    }
    .line{
      height: 16px;
    }
  }
`

export default Container