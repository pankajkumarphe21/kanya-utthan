import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../dummyData/registrations";
import styles from "./../../styles/approveregistration.module.css";

function ApproveRegistrations() {
  const { i} = useParams();
  const [approve,setApprove]=useState(false)
  var d = data[i];
  console.log(i)
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  return (
    <div className='w-full h-full text-white'>
    <div className={styles.toggle}>
      <button className={`${approve ? "bg-blue-500" : "bg-red-500" } py-2 px-4 w-32 rounded-lg`} onClick={()=>{setApprove(!approve)}}>{approve ? 'Approved': 'Approve'}</button>
    </div>
    <div className={styles.row}>
      <div className={styles.edit}>
        <h3>Name: {d.name}</h3>
        <h4>Age: {d.age}</h4>
        <h4>Sex: {d.sex}</h4>
        <h4>Aadhaar: {d.aadhaar}</h4>
        <h4>PAN Number: {d.pan}</h4>
        <h4>Account Number: {d.bank_details.account_number}</h4>
        <h4>IFSC Code: {d.bank_details.ifsc_code}</h4>
        <h4>Bank Name: {d.bank_details.bank_name}</h4>
        <h4>Income: {d.economic_details.income}</h4>
      </div>
      <div className={styles.daughters}>
        {d.daughters.map((val, i) => {
          return (
            <div key={i} className={styles.daughter}>
              <h3>Name: {val.name}</h3>
              <h4>Age: {val.age}</h4>
              <h4>Sex: {val.sex}</h4>
              <h4>Aadhaar: {val.aadhaar}</h4>
              <h4>Account Number: {val.bank_details.account_number}</h4>
              <h4>IFSC Code: {val.bank_details.ifsc_code}</h4>
              <h4>Bank Name: {val.bank_details.bank_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default ApproveRegistrations;
