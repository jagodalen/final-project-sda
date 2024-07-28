import './App.css'
import { Employee } from './models/Employee';
import { Table } from './components/Table'

function App() {

  const mockData: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      salary: 5000,
      status: 'on leave'
    },
    {
      id: 2,
      firstName: 'Marta',
      lastName: 'Doe',
      salary: 5000,
      status: 'on leave'
    },
    {
      id: 3,
      firstName: 'Ola',
      lastName: 'Doe',
      salary: 5000,
      status: 'on leave'
    },
  ]
  
  return (
    <>
  <Table data={mockData}></Table>
    </>
  )
}

export default App
