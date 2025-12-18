import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails ()
{
    const {id} =useParams();
    const [data,setdata]=useState(null)
    useEffect(()=>{
fetch(`http://localhost:5000/api/test/${id}`).then(res=>res.json().then(response=>setdata(response)))
    },[id]);
    if (!data) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>Loading Product Details...</h2>
            </div>
        );
    }
    return(
        <div>

        
       
        <h1>{data.name}</h1>

        </div>

    )
}

export default ProductDetails;