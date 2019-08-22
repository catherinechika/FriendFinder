module.exports = function (app, path) {
    var answersArray = [{
        name: "Lucifer",
        answers: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Beyonce",
        answers: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    },
    {
        name: "Sheldon",
        answers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        name: "Chika",
        answers: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "Mary",
        answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }]

    app.get("/api/friends", function (req, res) {
        return res.json(answersArray);
    });

    app.post("/survey", function (req, res) {
        var answers = req.body;
        console.log(answers);
        answersArray.push(answers);
        res.json(answersArray);
    });


}

