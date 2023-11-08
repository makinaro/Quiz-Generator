document.addEventListener("DOMContentLoaded", function () {
    var addQuestionButton = document.getElementById("add-question-button");
    var questionList = document.getElementById("question-list");
    var warning = document.getElementById("warning");

    addQuestionButton.addEventListener("click", function () {
        var question = document.getElementById("question").value;
        var answer = document.getElementById("answer").value;

        if (question === "" || answer === "") {
            alert("Please fill out both fields.");
            warning.textContent = "Please fill out both fields.";
            document.getElementById("question").value = "";
            document.getElementById("answer").value = "";
            return;
        }

        // Create a new row
        var newRow = questionList.insertRow();

        // Create cells for question and answer
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        // Set the cell contents
        cell1.textContent = question;
        cell2.textContent = answer;
        cell3.innerHTML = "<button class='delete-button'>Delete</button>";

        // Clear the input fields after adding the row
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        warning.textContent = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var questionTable = document.getElementById("question-list");

    // Event delegation for handling "Delete" button clicks
    questionTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            var row = event.target.closest("tr"); // Get the closest table row
            row.remove(); // Remove the row
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start-quiz-button");
    start.addEventListener("click", function (event) {
        // Check if the clicked element is the start button
        if (event.target === start) {
            window.location.href = "start.html";
        }
    });
});

