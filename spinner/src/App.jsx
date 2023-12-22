
import { useState } from 'react';
import './App.css'
import {
  FormControl,
  FormLabel,
  Input,
Button,TableContainer,Table,Thead,Tbody,Th,Tr,Td
} from "@chakra-ui/react";
function App() {
const [entry,setEntry]=useState("")
const [data,setData]=useState([])
const handleClick=()=>{
  setData([...data,entry])
  setEntry("")
}
const handleDelete=(e)=>{
let  newdata= data.filter((el)=>el!=e)
setData(newdata)
}
  return (
    <>
      <div className='nav'>
        <h2>Social</h2>{" "}
        <div className='links'>
          <a href="#">Feature</a> <a href="#">Discover</a>
          <a href="#">Stories</a>
          <a href="#">Community</a>

          <a href="#">Blog</a>
        </div>
        <div className='login_button'>
          <h3>Login</h3>
          <button>SEE DETAIL</button>
        </div>
      </div>
      <div className="main_c">
        <div>
          <FormControl>
            <FormLabel>Entries</FormLabel>
            <Input
              type="email"
              placeholder="entry1,entry2,..."
              onChange={(e) => setEntry(e.target.value)}
              value={entry}
            />
            <Button colorScheme="blue" onClick={handleClick}>
              Button
            </Button>
          </FormControl>

          {data.length > 0 && (
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <Tbody>
                  {data.map((e) => (
                    <Tr key={e}>
                      <Td>
                        {e}
                        <Button onClick={() => handleDelete(e)}>Delete</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </div>

        <div>
          <div id="weel">
            {data.length > 0 &&
              data.map((e) => <div className="inner">{e}</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
