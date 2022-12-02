
let userModel = require('../model/userModel')


///////// create Api ////////////
const createuser = async function (req, res) {

    try {
        let data = req.body

        let { userName, topicName, addTopic } = data

        if (!userName) return res.status(400).send({ status: false, message: "Please Enter the userName" });

        if (!topicName) return res.status(400).send({ status: false, message: "Please Enter the topicName" });

        if (!addTopic) return res.status(400).send({ status: false, message: "Please Enter the content" });

        let newData = {
            userName,
            topic: [{
                topicName,
                addTopic
            }]
        }

        let saveData = await userModel.create(newData)
        res.status(201).send({ status: true, "data": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}


///////// get Api ////////////
const getUser = async (req, res) => {
    try {
        let name = req.params.name

        if (!name) return res.status(400).send({ status: false, message: "UserName not Found" });

        let findUser = await userModel.findOne({ userName: name })

        if (!findUser) return res.status(400).send({ status: false, message: "UserName not Found" });

        // console.log(findUser);
        res.status(200).send({  status: true, 'data': findUser })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}


///////// update Api ////////////
const updateTopic = async (req, res) => {
    try {
        let userId = req.params.userId
        let data = req.body

        let { topicname, addTopic } = data

        if (!topicname) return res.status(400).send({ status: false, message: "Please Enter the topicName" });

        if (!addTopic) return res.status(400).send({ status: false, message: "Please Enter the topic Detail" });

        let findUser = await userModel.findOneAndUpdate({ _id: userId }, { $addToSet: { topic: { $each: [{ topicName: topicname, addTopic: addTopic }] } } }, { new: true })

        res.status(200).send({  status: true, 'data': findUser })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}






module.exports = { createuser, updateTopic, getUser }




