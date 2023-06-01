import styled from 'styled-components'


const Container = styled.div`
  padding: 56px var(--mainPadding);
  .mainTitle{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #01444F;
    margin: 0 0 30px 0;
  }
`

Container.BlocksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .section{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1000px;
    margin: auto;
  }
`
Container.Block = styled.div`
  width: 300px;
  box-shadow: 0 20px 20px #7682B72E;
  border-radius: 5px;
  transition: .4s; 
  padding: 30px 35px;
  .icon{
    fill: #01444F;
    stroke: #01444F;
  }
  .title{
    color: #01444F;
    font-size: 24px;
    font-weight: bold;
    max-width: 160px;
    text-align: start;
  }
  .desc{
    color: #01444F;
    font-size: 16px;
  }
  .button{
    border-radius: 3px;
    cursor: pointer;
    border: 0;
    padding: 5px 10px;
    color: #fff;
    background-color: #01444F;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 10px 0 0 0;
    transition: .3s;
    :hover{
      transition: .3s;
      .buttonIcon{
        transition: .3s;
        margin: 0 0 0 10px;
      }
    }
  }
  .buttonIcon{
    color: #fff;
    font-size: 22px;
  }
  :hover{
    background-color: #01444F;
    cursor: pointer;
    .icon{
      fill: #fff;
      stroke: #fff;
    }
    .title{
      color: #fff;
    }
    .desc{
      color: #fff;
    }
    .button{
      background-color: #fff;
      color: #01444F;
    }
    .buttonIcon{
      color: #01444F;
    }
  }
  
`

export default Container