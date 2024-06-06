import requestModal from "../models/requestModal.js";


const requestInitiation = async (req, res) => {
    const data = req.body;
    try {
        const newRequest = await new requestModal(data);
        await newRequest.save();
        res.status(200).json({message : "Request Added Successfully..."});
    } catch (error) {
        console.log(error);
    }
}

const getRequests = async (req, res) => {
    try {
        const all = await requestModal.find();
        res.status(200).json({data : all, message : "all data received"});
    } catch (error) {
        console.log(error);
    }
}

const approveRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const request = await requestModal.findById(id);
        if(!request){
            res.status(404).json({message : "request not found"});
        }
        else {
            request.approval = true;
            await request.save();
            res.status(200),json({message : "request approved! khus ho jao"})
        }
    } catch (error) {
        console.log(error);
    }
}

const makePayment = async (req, res) => {
    try {
        const id = req.body.id;
        const request = await requestModal.findById(id);
        if(!request){
            req.status.json({message : "request not found"});
        }
        else{
            const obj = {
                donor : donorName,
                fundDonated : amount
            };
            request.fund.push(obj);
            await request.save();
            res.status.json({message : "fund donated"});
        }
    } catch (error) {
        console.log(error);
    }
}

export {requestInitiation, makePayment, getRequests, approveRequest};