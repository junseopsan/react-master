import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`;
const Input = styled.input.attrs({required: true})`
  background-color: tomato;
  width: 100px;
  height:100px;
`;

function App() {
  return (
    <Father as="header">
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      
    </Father>
  )
}

export default App;
