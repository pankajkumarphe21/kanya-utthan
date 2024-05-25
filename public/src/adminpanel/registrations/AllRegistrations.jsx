import React, { useState } from "react";
import data from "./../../dummyData/registrations";
import styles from "./../../styles/allregistrations.module.css";
import ApproveRegistrations from "./ApproveRegistrations";
import { Link, Routes, Route, useLocation } from "react-router-dom";

function AllRegistrations() {
  const location = useLocation();
  const isEditPage = location.pathname.startsWith('/edit');
  return (
    
      <div>
        {!isEditPage && 
        <table>
        <thead>
        <tr className={styles.hrow}>
          <th className={styles.hname}>Name</th>
          <th className={styles.hage}>Age</th>
          <th className={styles.hsex}>Sex</th>
          <th className={styles.haadhaar}>Aadhaar</th>
          <th className={styles.hano}>Account Number</th>
          <th className={styles.hdaughters}>Daughters</th>
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
              <td><Link to={`/edit/${i}`}>Edit</Link></td>
            </tr>
          );
        })}
        </tbody>
      </table>
        }
        <Routes>
          <Route path="/edit/:i" element={<ApproveRegistrations />} />
        </Routes>
      </div>
  );
}

export default AllRegistrations;
