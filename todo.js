document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = `
    Date: ${now.toLocaleDateString()}
`;
        document.getElementById('date-time').innerText = formattedDateTime;
    }

    updateDateTime();

});

function add() {
    var task = document.getElementById("task");
    var List = document.getElementById("List");

    if (task.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = task.value;
        List.appendChild(li);
        task.value = "";
    }
}