import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Info = () => {
    const [data, setData] = useState([])
    async function FetchData() {
        let response = await axios.get('http://127.0.0.1:8000/users/getOne/SandyGaddi')
        console.log(response.data.data)
        setData(response.data.data)
        //    setData({"data":response.data});
    }
    useEffect(() => {
        console.log("Hello")
        FetchData();
    }
        , []);
    return (
        <>
        {data.map((item)=>{
            return(
                <>
                <h2>Name - {item.name}</h2>
                <h2>Username - {item.username}</h2>
                <h2>Email ID - {item.email}</h2>
                <h2>Age - {item.age}</h2>
                </>
            )
        })}
        </>

    );
};

export default Info;