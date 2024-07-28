import { Employee } from '../models/Employee';

export interface TableProps {
  data: Employee[];
}
export function Table({ data }: TableProps) {

    return (
        <>
<h1>Employees</h1>
<table>
 <thead>
  
   <tr>
     <th>Id</th>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Salary</th>
     <th>Status</th>
     <th></th>
     <th></th>
     <th></th>
   </tr>
 </thead>
 <tbody>
   {data.map(employee => (
     <tr>
     <td>{employee.id}</td>
     <td>{employee.firstName}</td>
     <td>{employee.lastName}</td>
     <td>{employee.salary}</td>
     <td>{employee.status}</td>
     <td><button></button></td>
     <td><button></button></td>
     <td><button></button></td>
     </tr>
   )
   )}
 </tbody>
</table>
</>
  ) }