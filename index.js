
const pageHeading = document.getElementById("pageHeading");

const headingInput = document.getElementById("headingInput");
const updateHeadingBtn = document.getElementById("updateHeadingBtn");

const colorPicker = document.getElementById("colorpicker");

const studentInput = document.getElementById("studentInput");
const addStudentBtn = document.getElementById("addStudentBtn");

const studentTableBody = document.getElementById("studentTableBody");

let students = [
    "Malik Jamiu",
    "Jimmy Ekong",
    "Stella Oluwaseun"
];

function displayStudents() {

    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>${student}</td>

            <td>
                <button class="btn" onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        studentTableBody.appendChild(row);

    });

}

displayStudents();

addStudentBtn.addEventListener("click", () => {

    const name = studentInput.value.trim();

    if(name === ""){

        alert("Please enter a student name.");

        return;

    }

    students.push(name);

    studentInput.value = "";

    displayStudents();

});

function deleteStudent(index){

    const answer = confirm(
        'Delete ${students[index]}?'
    );

    if(answer){

        students.splice(index,1);

        displayStudents();

    }

}

updateHeadingBtn.addEventListener("click", () => {

    const newHeading = headingInput.value.trim();

    if(newHeading === ""){

        alert("Enter a new heading.");

        return;

    }

    pageHeading.textContent = newHeading;

    headingInput.value = "";

});

colorPicker.addEventListener("input", () => {

    pageHeading.style.color = colorPicker.value;

    document.querySelector(".colorText strong").textContent = colorPicker.value;

});

studentInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        addStudentBtn.click();

    }

});

headingInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        updateHeadingBtn.click();

    }

});