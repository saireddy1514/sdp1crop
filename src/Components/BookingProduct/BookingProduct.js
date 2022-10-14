import React from 'react'
import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './bookingproduct.css'
export default function BookingProduct() {
  const navigate=useNavigate(false)
  var [farmer_name,setFarmername]= useState(null);
  var [farmer_address,setFarmeraddress]= useState(null);
  var [farmer_mail,setfarmermail]=useState(null);
  var [farmer_phoneno,setfarmerphoneno]=useState(null);
  var [godown_name,setgodownname]= useState(null);
  var [godown_address,setgodownaddress]= useState(null);
  var [storage_no,setstorageno]=useState(null);
  var [crop_type,setcroptype]=useState(null);
  var [qua_ntity,setquantity]=useState(null);
  var [amou_nt,setamount]=useState(null);
  function productsignupdata(){
    const registereddata={
        farmername:farmer_name,
        farmeraddress:farmer_address,
        mail:farmer_mail,
        phonenum:farmer_phoneno,
        godownname:godown_name,
        godownaddress:godown_address,
        storageno:storage_no,
        croptype:crop_type,
        quantity:qua_ntity,
        amount:amou_nt
    }
    axios.post("http://localhost:2000/api/productregister",registereddata)
    .then(response=> {
      navigate('/shopping')
    })
    .catch(e=>console.log(e))

  }
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Product Registration</h1>
           <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Name"
            value={farmer_name}
            onChange={(e)=>{setFarmername(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Address"
            value={farmer_address}
            onChange={(e)=>{setFarmeraddress(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Mail"
            value={farmer_mail}
            onChange={(e)=>{setfarmermail(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Phone No"
            value={farmer_phoneno}
            onChange={(e)=>{setfarmerphoneno(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Godown Name"
            value={godown_name}
            onChange={(e)=>{setgodownname(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Godown Address"
            value={godown_address}
            onChange={(e)=>{setgodownaddress(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Storage No"
            value={storage_no}
            onChange={(e)=>{setstorageno(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Crop Name"
            value={crop_type}
            onChange={(e)=>{setcroptype(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Product Quantity"
            value={qua_ntity}
            onChange={(e)=>{setquantity(e.target.value)}}
          />
        </div>
        <div className="second-input">
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Amount per Kg"
            value={amou_nt}
            onChange={(e)=>{setamount(e.target.value)}}
          />
        </div>

        
          <div className="login-button">
         <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          fullWidth
          color="secondary"
          onClick={productsignupdata}
        >
          Register
        </Button>
          </div>
         </div>
       </div>
     </div>
    </div>

  )
}
