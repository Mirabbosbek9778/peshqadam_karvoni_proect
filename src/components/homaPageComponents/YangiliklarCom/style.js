import styled from 'styled-components'
import img1 from '../../../assets/png/img_1.png'


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
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`
Container.Block = styled.div`
  height: 400px;
  width: 300px;
  box-shadow: 0 20px 20px #7682B72E;
  border-radius: 5px;
  transition: .4s; 
  display: grid;
  grid-template-rows: 200px 1fr 1fr;
  .icon{
    fill: #01444F;
    stroke: #01444F;
  }
  .backImg{
    background-image: url(${img1});
  }
  .text{
    padding: 0 20px;
  }
  .data{
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0 0 0;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
    margin: 0 0 10px 0;
  }
  .desc{
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
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
`
Container.Button = styled.div`
  > button {
    padding: 12px 35px;
    color: #fff;
    border-radius: 10px;
    border: 0;
    font-size: 25px;
    font-weight: bold;
    background-color: #01444F;
    cursor: pointer;
  }
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container