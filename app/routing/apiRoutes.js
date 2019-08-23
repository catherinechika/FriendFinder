module.exports = function (app, path) {
    var answersArray = [{
        name: "Lucifer",
        answers: [1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        picture: "https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/07/lucifer-poster.jpg?quality=90&strip=all&zoom=1&resize=644%2C383&ssl=1"
    },
    {
        name: "Beyonce",
        answers: [1, 5, 1, 5, 5, 1, 5, 5, 5, 5],
        picture: "https://amp.insider.com/images/597b7880f8d1e62c008b46b1-750-562.jpg"
    },
    {
        name: "Sheldon",
        answers: [1, 5, 5, 1, 1, 1, 1, 1, 5, 5],
        picture: "https://m.media-amazon.com/images/M/MV5BZjg4MGNlZDgtMmM5OC00ZmMxLTg3Y2EtZmZjOGJlNDU4NGNhXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_.jpg"
    },
    {
        name: "Chika",
        answers: [5, 1, 1, 1, 1, 4, 2, 2, 2, 1],
        picture: "http://createmyst.com/wp-content/uploads/2016/06/Hammers_Nick_0T2A9728-450x280.jpg"
    },
    {
        name: "Mary",
        answers: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        picture: "https://i.pinimg.com/originals/46/0c/b3/460cb3f09a0fbfbf320f708cf6f9a525.jpg"
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

