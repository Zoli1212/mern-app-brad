const getGoals = async (req, res) =>{
    res.status(200).json({ message: 'Get goals'})

}
const setGoal = async (req, res) =>{
    if(req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: 'Set goals'})

}
const updateGoal = async (req, res) =>{
    res.status(200).json({ message: 'Update goal'})

}
const deleteGoal = async (req, res) =>{
    res.status(200).json({ message: 'Delete goal'})

}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}