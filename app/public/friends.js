// event.preventDefault();
$(window).on("load", function () {
    $(".response").hide()

    const answers = [];

    function newUserObj(name, answers) {
        this.name = name,
            this.answers = answers
    }
    $(".submit").on("click", function (event) {
        event.preventDefault();
        let name = $(".userName").val()
        // console.log(name)
        creatAns()
        var newUser = new newUserObj(name, answers)
        // ------------TO SWITCH THE HTML ON THE PAGE TO THE SUBMITTED 
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
        let userArr = newUser.answers
        // console.log(userArr)
        let score = []

        // ----------TO GET EACH FRIEND FROM THE FRIEND ARRAY
        for (let i = 0; i < friends.length; i++) {
            friendArr = friends[i].answers
            matchMaker(friendArr)
        }
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

        console.log(yourFriend, yourFriendIndex, friendsName)

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

