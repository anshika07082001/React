import React from 'react'

const TableComponent = (props) => {
  return (
    <div>
        <table>
            <tr>
                <th>ID</th><th>NAME</th><th>AGE</th><th>HAIR COLOR</th><th>GENDER</th>
            </tr>
            {props.urL.length!==0?
            props.urL.map((item)=>{
                return(
                    <tr><td>{item.id}</td><td>{item.firstName}</td><td>{item.age}</td><td>{item.hair.color}</td><td>{item.gender}</td></tr>
                )
            }):
            <p></p>}
        </table>
    </div>
  )
}

export default TableComponent