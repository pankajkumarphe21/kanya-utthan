import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/signup.module.css";

const signup = () => {
  const [start, setStart] = useState(0);
  
  const [registration, setRegistration] = useState({
    personalInfo: {
      name: "",
      age: "",
      email:'',
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
      income: 750000,
      occupation: "",
      company: "",
    },
    daughters: {
      name: "",
      age: "",
      sex: "",
      aadhaar: "",
      highestqualificattion: "",
      university: "",
      passingyear: "",
      bank: "",
      account: "",
      ifsc: "",
    },
  });

  const { personalInfo, bankDetails, daughters } = registration;

  // increase and decrease start value function.
  const handlePrev = () => {
    setStart((prev) => prev - 1);
  };

  const handleNext = () => {
    if (start == 2) return;
    setStart((prev) => prev + 1);
  };

  const personal = [
    { name: "Name", placeholder: "Enter your name", key: "name" },
    { name: "Email", placeholder: "Enter your name", key: "email" },
    { name: "Age", placeholder: "Enter your age", key: "age" },
    { name: "Gender", placeholder: "Enter your sex", key: "sex" },
    {
      name: "Aadhar Number",
      placeholder: "Enter your Aadhar number",
      key: "aadhar",
    },
    { name: "Pan Number", placeholder: "Enter your Pan number", key: "pan" },
    {
      name: "Qualification",
      placeholder: "Enter your qualification",
      key: "qualification",
    },
    {
      name: "Phone Number",
      placeholder: "Enter your phone number",
      key: "phone",
    },
  ];

  // personal details.
  const handlePersonlDetails = (e, values) => {
    setRegistration((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [values]: e.target.value,
      },
    }));
  };

  const bank = [
    { bank: "Bank Name", placeholder: "Enter your Bank Name", key: "bankName" },
    {
      bank: "Account Number",
      placeholder: "Enter your Account Number",
      key: "accountNumber",
    },
    {
      bank: "IFSC Code",
      placeholder: "Enter your IFSC Code",
      key: "ifsc_code",
    },
    {
      bank: "Upload Bank Photo",
      placeholder: "Upload Bank Passbook",
      key: "image",
    },
    { bank: "Income (INR)", placeholder: "Enter your Income", key: "income" },
    {
      bank: "Occupation",
      placeholder: "Enter your Occupation",
      key: "occupation",
    },
    { bank: "Company", placeholder: "Enter your Company Name", key: "company" },
  ];

  // bank details.
  const handleBankDetails = (e, values) => {
    setRegistration((prev) => ({
      ...prev,
      bankDetails: {
        ...prev.bankDetails,
        [values]: e.target.value,
      },
    }));
  };

  const daughter = [
    { name: "Name", placeholder: "Enter daughter Name", key: "name" },
    { name: "Age", placeholder: "Enter daughter Age", key: "age" },
    { name: "Gender", placeholder: "Enter Gender", key: "sex" },
    {
      name: "Aadhar",
      placeholder: "Enter daughter Aadhar Number",
      key: "aadhaar",
    },
    {
      name: "Highest Qualification",
      placeholder: "Enter highest Qualification",
      key: "highestQualification",
    },
    {
      name: "Passing Year",
      placeholder: "Enter Passing Year",
      key: "passingYear",
    },
    { name: "Bank Name", placeholder: "Enter Bank Name", key: "bank" },
    {
      name: "Account Number",
      placeholder: "Enter Account Number",
      key: "account",
    },
    { name: "IFSC Code", placeholder: "Enter IFSC Code", key: "ifsc" },
  ];

  // daughtet details.
  const handleDaughterDetails = (e, values) => {
    setRegistration((prev) => ({
      ...prev,
      daughters: {
        ...prev.daughters,
        [values]: e.target.value,
      },
    }));
  };

  const information = [
    "Personal Information",
    "Bank details",
    "Daughter Details",
  ];

  // update page as starts changes.
  useEffect(() => {}, [start]);


  // sbumit handler
  const handleRegistration = (e) => {
    e.preventDefault()
    console.log("I am clicked, lets run the function.");
    console.log(registration);
  };

  return (
    <div className={styles.myContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{information[start]}</h1>
        <form onSubmit={handleRegistration}>
          {start === 0 && (
            <>
              {personal?.map((item, idx) => (
                <div key={idx} className={styles.container}>
                  <label htmlFor={item.name}>{item.name}</label>
                  <input
                    type="text"
                    id={item.name}
                    required
                    value={personalInfo[item.key.toLowerCase()]}
                    placeholder={item.placeholder}
                    className={styles.input}
                    onChange={(e) =>
                      handlePersonlDetails(e, item.key.toLowerCase())
                    }
                  />
                </div>
              ))}
            </>
          )}
          {start === 1 && (
            <>
              {bank?.map((item, idx) => (
                <div key={idx} className={styles.container}>
                  <label htmlFor={item.bank}>{item.bank}</label>
                  <input
                    type="text"
                    id={item.name}
                    required
                    placeholder={item.placeholder}
                    value={bankDetails[item.key.toLowerCase()]}
                    className={styles.input}
                    onChange={(e) =>
                      handleBankDetails(e, item.key.toLowerCase())
                    }
                  />
                </div>
              ))}
            </>
          )}
          {start === 2 && (
            <>
              {daughter?.map((item, idx) => (
                <div key={idx} className={styles.container}>
                  <label htmlFor={item.name}>{item.name}</label>
                  <input
                    type="text"
                    id={item.name}
                    required
                    value={daughters[item.key.toLowerCase()]}
                    placeholder={item.placeholder}
                    className={styles.input}
                    onChange={(e) =>
                      handleDaughterDetails(e, item.key.toLowerCase())
                    }
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
          {start == 2 ? (
            <button className={styles.button} type="submit" onClick={handleRegistration}>
              Submit
            </button>
          ) : (
            <button className={styles.button} onClick={handleNext}>
              Next <FaArrowRight className={styles.icon1} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default signup;