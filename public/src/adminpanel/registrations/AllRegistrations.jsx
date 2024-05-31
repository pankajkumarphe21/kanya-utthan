import React, { useState,useEffect } from "react";
import data from "./../../dummyData/registrations";
import styles from "./../../styles/allregistrations.module.css";
import ApproveRegistrations from "./ApproveRegistrations";
import { Link, Routes, Route, useLocation } from "react-router-dom";

function AllRegistrations() {
  const location = useLocation();
  const isEditPage = location.pathname.startsWith('/edit');
  const [value,setValue]=useState(0)
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  return (
      <div className="flex justify-center text-zinc-300">
        {!isEditPage && 
        <div>
          <h1 className="text-2xl text-white mb-10">All Registrations</h1>
          <table className="border-2 border-orange-400">
        <thead>
        <tr className={styles.hrow}>
          <th className={styles.hname}>Name</th>
          <th className={styles.hage}>Age</th>
          <th className={styles.hsex}>Sex</th>
          <th className={styles.haadhaar}>Aadhaar</th>
          <th className={styles.hano}>Account Number</th>
          <th className={styles.hdaughters}>Daughters</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i} className={styles.row}>
              <td className={styles.name}>{row.name}</td>
              <td className={styles.age}>{row.age}</td>
              <td className={styles.sex}>{row.sex}</td>
              <td className={styles.aadhaar}>{row.aadhaar}</td>
              <td className={styles.ano}>
                {row.bank_details.account_number}
              </td>
              <td className={styles.daughters}>{row.daughters.length}</td>
              <td className={`px-4 py-1 bg-yellow-300 text-zinc-900 rounded-md mx-1`}><Link to={`/edit/${i}`}>Edit</Link></td>
            </tr>
          );
        })}
        </tbody>
      </table>
        </div>
        }
        <Routes>
          <Route path="/edit/:i" element={<ApproveRegistrations />} />
        </Routes>
      </div>
  );
}

export default AllRegistrations;
