import mongoose from 'mongoose'

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  sex: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  pan: { type: String, required: true, unique: true },
  qualification: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
});

const bankDetailsSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true, unique: true },
  ifsc_code: { type: String, required: true },
  image: { type: String },
  income: { type: Number, required: true },
  occupation: { type: String, required: true },
  company: { type: String, required: true },
});

const daughterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  aadhaar: { type: String, required: true, unique: true },
  highestQualification: { type: String, required: true },
  university: { type: String, required: true },
  passingYear: { type: Number, required: true },
  bank: { type: String, required: true },
  account: { type: String, required: true, unique: true },
  ifsc: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  personalInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalInfo",
    required: true,
  },
  bankDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BankDetails",
    required: true,
  },
  daughters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Daughter" }],
});

const PersonalInfo = mongoose.model("personalInfo", personalInfoSchema);
const BankDetails = mongoose.model("bankDetails", bankDetailsSchema);
const Daughter = mongoose.model("daughter", daughterSchema);
const User = mongoose.model("user", userSchema);

module.exports = { PersonalInfo, BankDetails, Daughter, User };
