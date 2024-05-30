import React,{useEffect} from 'react'

function ApproveRequests() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  return (
    <div className='text-white'>ApproveRequests</div>
  )
}

export default ApproveRequests