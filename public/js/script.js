const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");
const dataContainer = document.getElementById("data");

getFetchBtn.addEventListener('click', getDataFetch);
getAsyncBtn.addEventListener('click', getDataAsync);

// Define JSON data directly in your JavaScript code
const jsonData = [
    {
        "id": 1,
        "name": "John Doe"
    },
    {
        "id": 2,
        "name": "Jane Smith"
    },
    {
        "id": 3,
        "name": "Michael Johnson"
    },
    {
        "id": 4,
        "name": "Emily Brown"
    },
    {
        "id": 5,
        "name": "David Williams"
    },
    {
        "id": 6,
        "name": "Sarah Jones"
    }
];

function getDataFetch() {
    // Use the directly defined JSON data
    displayUserData(jsonData);
}

async function getDataAsync() {
    // Use the directly defined JSON data
    displayUserData(jsonData);
}

function displayUserData(data) {
    let ulContent = "<ul>";
    data.forEach(user => {
        ulContent += `<li>${user.id}: ${user.name}</li>`;
    });
    ulContent += "</ul>";
    // Clear previous content
    dataContainer.innerHTML = "";
    // Append new content
    dataContainer.innerHTML = ulContent;
}
