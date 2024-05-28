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

  const {personalInfo, bankDetails, ecomonicDetails, daughters} = registration

  const handleRegistration = () => {
    console.log(registration)
  };

  const handlePrev = () => {
    setStart((prev) => prev - 1);
  };

  const handleNext = () => {
    setStart((prev) => prev + 1);
  };

  const student = {
    name:'rajeev',
    class:'12th',
    subject:{
      1:'physics',
      2:'Maths',
      3:'Chemistry'
    }
  }

  [name] = 'madan'

  const personal = [
    {
      name: "Name",
      placeholder: "Enter your name",
      key:'Name'
    },
    {
      name: "Age",
      placeholder: "Enter your age",
      key:'Age'
    },
    {
      name: "Gender",
      placeholder: "Enter your sex",
      key:'Sex'
    },
    {
      name: "Aadhar Number",
      placeholder: "Enter your Aadhar number",
      key:'Aadhar'
    },
    {
      name: "Pan Number",
      placeholder: "Enter your Pan number",
      key: 'Pan'
    },
    {
      name: "Qualification",
      placeholder: "Enter your qualification",
      key:'Qualification'
    },
    {
      name: "Phone Number",
      placeholder: "Enter your phone number",
      key:'phone'
    },
  ];

  // personal details.
  const handlePersonlDetails = (e, values) => {
     setRegitration({
      ...personalInfo,
      [values] : e.target.value
     })
  }

  const bank = [
    {
      bank : 'Bank Name',
      placeholder: "Enter your Bank Name",
      key:'bank'
    },
    {
      bank : 'Account Number',
      placeholder: "Enter your Account Number",
      key:'account'
    },
    {
      bank : 'IFSC Code',
      placeholder: "Enter your IFSC Code",
      key:'ifsc'
    },
    {
      bank : 'Upload Bank Photo',
      placeholder: "Upload Bank Passbook ",
      key:'image'
    },
    {
      bank : 'Income (INR)',
      placeholder: "Enter your Income",
      key:'income'
    },
    {
      bank : 'Occupation',
      placeholder: "Enter your Occupation",
      key:'occupation'
    },
    {
      bank : 'Company',
      placeholder: "Enter your Company Name",
      key:'company'
    },
  ]
    // bank details.
    const handleBankDetails = (e, values) => {
      setRegitration({
       ...bankDetails,
       [values] : e.target.value
      })
   }

  const daughter = [
    {
      name:'Name',
      placeholder: "Enter daughter Name",
      key:'name'
    },
    {
      name:'Age',
      placeholder: "Enter daughter Age",
      key:'age'
    },
    {
      name:'Gender',
      placeholder: "Enter Gender",
      key:'sex'
    },
    {
      name:'Aadhar',
      placeholder: "Enter daughter Aadhar Number",
      key:'aadhar'
    },
    {
      name:'Highest Qualificattion',
      placeholder: "Enter highest Qualificattion",
      key:'highestQualificattion'
    },
    {
      name:'Passing Year',
      placeholder: "Enter Passing Year",
      key:'passingYear'
    },
    {
      name:'Bank Name',
      placeholder: "Enter Bank Name",
      key:'bank'
    },
    {
      name:'Account Number',
      placeholder: "Enter Account Number",
      key:'account'
    },
    {
      name:'IFSC Code',
      placeholder: "Enter IFSC Code",
      key:'ifsc'
    },
  ]

    // daughtet details.
    const handleDaughterDetails = (e, values) => {
      setRegitration({
       ...daughters,
       [values] : e.target.value
      })
    }

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
              {personal?.map((item, idx) => (
                <div key={idx} className={styles.container}>
                  <label htmlFor={item.name}>{item.name}</label>
                  <input
                    type="text"
                    id={item.name}
                    required
                    // value={personalInfo[item.key.toLocaleLowerCase()]}
                    placeholder={item.placeholder}
                    className={styles.input}
                    onChange={(e)=>handlePersonlDetails(e, item.key.toLocaleLowerCase())}
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
                    className={styles.input}
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
                    value={daughters[item.key.toLocaleLowerCase()]}
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
