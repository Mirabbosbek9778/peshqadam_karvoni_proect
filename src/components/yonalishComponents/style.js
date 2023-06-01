import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 30px 0 0 0;
`

Container.Inset = styled.div`
  width: 100%;
  min-height: 500px;
  border-radius: 25px;
  background-color: rgba(232, 232, 232, 0.46);
  padding: 30px;
  p{
    max-width: 700px;
  }
`

Container.Button = styled.button`
  border: 0;
  padding: 10px 30px;
  font-size: 26px;
  background-color:  rgb(1, 68, 79);
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  .icon{
    color: #fff;
    font-size: 30px;
  }
`


export default Container