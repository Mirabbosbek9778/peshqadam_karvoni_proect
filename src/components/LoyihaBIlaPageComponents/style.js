import styled from 'styled-components'
import backImg from '../../assets/png/startPageBack.png'


const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 20px 0;
  color: #6b6b6b;

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .desc {
    margin: 10px 0 !important;
  }

  .mainTitle {
    font-size: 42px;
    font-weight: 500;
  }

  .mainSubTitle {
    font-weight: bold;
  }

  .bold {
    font-weight: bold;
  }

  .red {
    color: red;
  }

  .aqua {
    color: darkcyan;
  }
  
  .black {
    color: black;
  }
  
  ol, ul{
    margin: 10px 0 0 30px;
  }
  li{
    margin: 25px 0;
  }
  
`;
Container.Inset = styled.div`
  border: 1px solid #333;
  padding: 10px;

  .line{
    height: 20px;
    margin: 15px 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr 2fr 2.5fr;
    .line_block-1{
      background-color: burlywood;
    }
    .line_block-2{
      background-color: aqua;
    }
    .line_block-3{
      background-color: red;
    }
    .line_block-4{
      background-color: dimgray;
    }
  }
  
  
`
Container.StartComponent = styled.div`
  height: 700px;
  background-image: url(${backImg});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`



export default Container