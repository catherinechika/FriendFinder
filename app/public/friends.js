// event.preventDefault();
$(window).on("load", function () {
    $(".response").hide()

    const answers = [];

    function newUserObj(name, answers, picture) {
        this.name = name,
            this.answers = answers,
            this.picture = picture
    }
    $(".submit").on("click", function (event) {
        event.preventDefault();

        // ------------CREATE AN OBJECT FOR THE NEW USER
        let name = $(".userName").val()
        let picture = $(".pic").val()
        // console.log(name)
        creatAns()
        var newUser = new newUserObj(name, answers, picture)
        // ------------ SWITCH THE HTML ON THE PAGE TO THE BEST MATCHED CARD 
        $(".questions").hide()
        $(".submit").hide()
        // ---------------post request------------------------
        $.post("/survey", newUser, function (response) {
            return response
        })
        // -----------------------------------------------------

        // function match() {
        var friends = [
            {
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
        let userArr = newUser.answers
        // console.log(userArr)
        let score = []

        // ----------TO GET EACH FRIEND FROM THE FRIEND ARRAY
        for (let i = 0; i < friends.length; i++) {
            friendArr = friends[i].answers
            matchMaker(friendArr)
        }
        friends.push(newUser)
        // -------------------MATCHMAKER FUNCTION TO USE AS A CALL BACK---------------------------------

        function matchMaker(friendArr) {
            let diff = []

            // --------------TO COMPARE THE DIFFERENCE BETWEEN THE USER AND THE RETURNED FRIEND
            for (let j = 0; j < userArr.length; j++) {
                // console.log(userArr[j])
                let userIndex = userArr[j]
                let friendIndex = friendArr[j]
                // console.log(friendIndex)
                diffIndex = Math.abs(friendIndex - userIndex)
                diff.push(diffIndex)
            }
            // ----------------TO SUM UP THE TOTAL VALUES FROM THE ARRAY

            console.log(diff)
            let total = 0
            for (let i = 0; i < diff.length; i++) {
                total = total + diff[i]
            }
            score.push(total)
            console.log(score)
        }
        // ------------------TO FIND THE FRIEND WITH THE MINIMUM DIFFERENCE FROM THE ARRAY
        let yourFriend = Math.min.apply(null, score)
        let yourFriendIndex = score.indexOf(yourFriend)
        let friendsName = friends[yourFriendIndex].name
        let friendPic = friends[yourFriendIndex].picture
        console.log(friendPic)
        $('.friendPic').attr("src", friendPic)
        // console.log(yourFriend, yourFriendIndex, friendsName)

        // -----------------TO UPDATE THE HTML WITH THE NEWLY SELECTED BEST FRIEND
        $("#matchName").text(friendsName)
        $(".response").show()
        // }

        function creatAns() { //FUNCTION TO COLLECT THE USER ANSWERS AND CREATE AN ARRAY OF IT
            let selected = $(".Q1 option:selected").text();
            selection(selected)
            selected = $(".Q2 option:selected").text();
            selection(selected)
            selected = $(".Q3 option:selected").text();
            selection(selected)
            selected = $(".Q4 option:selected").text();
            selection(selected)
            selected = $(".Q5 option:selected").text();
            selection(selected)
            selected = $(".Q6 option:selected").text();
            selection(selected)
            selected = $(".Q7 option:selected").text();
            selection(selected)
            selected = $(".Q8 option:selected").text();
            selection(selected)
            selected = $(".Q9 option:selected").text();
            selection(selected)
            selected = $(".Q10 option:selected").text();
            selection(selected)

        }

        function selection(selected) { //FUNCTION TO UPDATE THE FRIENDS ARRAY WITH NUMBERS
            if (selected == "Choose here") {
                selected = 3
            }
            selected = parseInt(selected)
            answers.push(selected)
        }
    })
}

)

