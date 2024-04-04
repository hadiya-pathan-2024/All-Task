//task14
const jsonplaceholder_task14 = async (req, res) => {
    res.sendFile("/home/hadiya-pathan/Desktop/All_tasks_updated/views/Task14_jsonplaceholder/jsonAPI.html");
}

const details = async (req, res) => {
    res.sendFile("/home/hadiya-pathan/Desktop/All_tasks_updated/views/Task14_jsonplaceholder/individual.html")
};

module.exports = { jsonplaceholder_task14, details }
