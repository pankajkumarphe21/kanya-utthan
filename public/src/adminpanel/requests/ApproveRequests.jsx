import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {requests} from './../../dummyData/requests'

function ApproveRequests() {
  const {i}=useParams();
  const data=requests[i].marriage;
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  return (
    <div className='text-zinc-300 p-10'>
        <p className='p-1'>Name: {data.father_applicant.name}</p>
        <p className='p-1'>Age: {data.father_applicant.age}</p>
        <p className='p-1'>Aadhaar Number: {data.father_applicant.aadhaar}</p>
        <p className='p-1'>Bank Name: {data.father_applicant.bank_details.bank_name}</p>
        <p className='p-1'>Account Number: {data.father_applicant.bank_details.account_number}</p>
        <p className='p-1'>IFSC Code: {data.father_applicant.bank_details.ifsc_code}</p>
        <div className='flex justify-around mt-9'>
          <div>
            <h1 className='mb-1'>Husband's Details</h1>
            <p className='mb-1'>Name: {data.father_applicant.husband_details.name}</p>
            <p className='mb-1'>Age: {data.father_applicant.husband_details.age}</p>
          </div>
          <div>
            <h1 className='mb-1'>Daughter's Details</h1>
            <p className='mb-1'>Name: {data.daughter.name}</p>
            <p className='mb-1'>Age: {data.daughter.age}</p>
          </div>
        </div>
    </div>
  )
}

export default ApproveRequests