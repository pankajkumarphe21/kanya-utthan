import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/signup.module.css";

const signup = () => {
  const [start, setStart] = useState(0);
  const [registration, setRegitration] = useState({
    personalInfo: {
      name: "",
      age: "",
      sex: "",
      aadhar: "",
      pan: "",
      qualification: "",
      phone: "",
    },
    bankDetails: {
      bankName: "",
      accountNumber: "",
      ifsc_code: "",
      image: "",
    },
    ecomonicDetails: {
      income: 750000,
      occupation: "",
      company: "",
    },
    daughters: {
      name: "",
      age: "",
      sex: "",
      aadhaar: "",
      highestQualificattion: "",
      university: "",
      passingYear: "",
      bank_details: {
        bank_name: "",
        account_number: "",
        ifsc_code: "",
      },
    },
  });

  const handleRegistration = () => {};

  const handlePrev = () => {
    setStart((prev) => prev - 1);
  };

  const handleNext = () => {
    setStart((prev) => prev + 1);
  };

  console.log(start);

  const personal = [
    {
      name: "Name",
      placeholder: "Enter your name",
    },
    {
      name: "Age",
      placeholder: "Enter your age",
    },
    {
      name: "Gender",
      placeholder: "Enter your sex",
    },
    {
      name: "Aadhar Number",
      placeholder: "Enter your Aadhar number",
    },
    {
      name: "Pan Number",
      placeholder: "Enter your Pan number",
    },
    {
      name: "Qualification",
      placeholder: "Enter your qualification",
    },
    {
      name: "Phone Number",
      placeholder: "Enter your phone number",
    },
  ];

  const information = [
    "Personal Information",
    "Bank details",
    "Daughter Details",
  ];

  useEffect(() => {}, [start]);

  return (
    <div className={styles.myContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{information[start]}</h1>
        <form onSubmit={handleRegistration}>
          {start === 0 && (
            <>
              {personal?.map((item,i) => (
                <div key={i} className={styles.container}>
                  <label htmlFor={item.name}>Name</label>
                  <input
                    type="text"
                    id={item.name}
                    required
                    placeholder={item.placeholder}
                    className={styles.input}
                  />
                </div>
              ))}
            </>
          )}
        </form>

        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            disabled={start === 0}
            onClick={handlePrev}
          >
            {" "}
            <FaArrowLeft className={styles.icon} /> Previous
          </button>
          <button
            className={styles.button}
            disabled={start === 2}
            onClick={handleNext}
          >
            Next <FaArrowRight className={styles.icon1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default signup;
