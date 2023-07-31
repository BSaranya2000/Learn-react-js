import React, { useEffect, useState } from "react";
import axios from "axios";
const List2 = () => {
    const [data,setdata] = useState([])
    const Api = async () => {
    await axios
        .get ("https://jsonplaceholder.typicode.com/users")
        .then ((res) => {
            console.log(res, "res");
            setdata (res.data);
        })
        .catch ((err) => {
            console.log(err, "err");
        } )
    }
    useEffect (() => {Api ()
     
        }, [])
        return (
            <> <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            <tbody>
            {data.map ((item,index)=> {
                console.log(item,index);
                return (<>
                
                    
                    <tr>
                        <td>{item.id}</td>
    
                        <td>{item.name}</td>
                    
                        <td>{item.username}</td>
        
                        <td>{item.email}</td>
                    </tr>
                
               
    
                </>
                )
            })
    
            }
             </tbody>
                </table>
                </>
    )
        }

export default List2;
