import React from "react";
const List = () => {
    const Data = require ("./data.json")
    return (
        <> <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
            </tr>
        <tbody>
        {Data.map ((item,index)=> {
            console.log(item,index);
            return <>
            
                
                <tr>
                    <td>{item.id}</td>

                    <td>{item.name}</td>
                
                    <td>{item.username}</td>
    
                    <td>{item.email}</td>
                </tr>
            
           

            </>
        })

        }
         </tbody>
            </table>
        </>
    )
}
export default List;