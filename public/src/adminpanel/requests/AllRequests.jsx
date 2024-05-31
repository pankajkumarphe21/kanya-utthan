import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { requests } from '../../dummyData/requests';

function AllRequests() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  return (
    <div className='text-zinc-300 flex-col'>
      <h1 className='mb-6 text-2xl text-orange-400'>All Requests</h1>
        {
          requests.map((val,i)=>{
            return (
              <div className='border-2 border-red-200 mb-6' key={i}>
                <p className='mb-1 mt-1'>Father's Name: {val.marriage.father_applicant.name}</p>
                <p className='mb-1'>Age: {val.marriage.father_applicant.age}</p>
                <p className='mb-1'>Bank Name: {val.marriage.father_applicant.bank_details.bank_name}</p>
                <p className='mb-1'>Account Number: {val.marriage.father_applicant.bank_details.account_number}</p>
                <p className='mb-1'>IFSC Code: {val.marriage.father_applicant.bank_details.ifsc_code}</p>
                <div className='flex justify-around mt-6 '>
                  <div className='border-2 border-red-400 mb-4 p-3'>
                  <p className='mb-1'>Daughter's Name: {val.marriage.daughter.name}</p>
                <p className='mb-1'> Age: {val.marriage.daughter.age}</p>
                <p className='mb-1'> Bank Name: {val.marriage.daughter.bank_details.bank_name}</p>
                <p className='mb-1'> Account Number: {val.marriage.daughter.bank_details.account_number}</p>
                <p className='mb-1'> IFSC Code: {val.marriage.daughter.bank_details.ifsc_code}</p>
                  </div>
                  <div className='flex text-black py-7'>
                    <button className='bg-red-300 h-10 px-6 rounded-md'>
                    <Link to={`/approve/requests/${i}`}>Edit</Link>
                    </button>
                  </div>
                  <div className='border-2 border-red-400 mb-2 p-3'>
                  <p className='mb-1'>Husband's Name: {val.marriage.father_applicant.husband_details.name}</p>
                <p className='mb-1'> Age: {val.marriage.father_applicant.husband_details.age}</p>
                <p className='mb-1'> Bank Name: {val.marriage.father_applicant.husband_details.bank_details.bank_name}</p>
                <p className='mb-1'> Account Number: {val.marriage.father_applicant.husband_details.bank_details.account_number}</p>
                <p className='mb-1'> IFSC Code: {val.marriage.father_applicant.husband_details.bank_details.ifsc_code}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default AllRequests