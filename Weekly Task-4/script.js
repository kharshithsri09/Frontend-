// ========================
// GET ELEMENTS
// ========================

const studentForm = document.getElementById("studentForm");

const studentTableBody =
document.getElementById("studentTableBody");

const emptyMessage =
document.getElementById("emptyMessage");

const error =
document.getElementById("error");




// ========================
// ADD STUDENT
// ========================

if(studentForm){

    studentForm.addEventListener("submit", function(event){

        event.preventDefault();



        const name =
        document.getElementById("name").value.trim();

        const age =
        document.getElementById("age").value.trim();

        const course =
        document.getElementById("course").value.trim();



        // REGEX

        const nameRegex = /^[A-Za-z ]{3,30}$/;

        const courseRegex = /^[A-Za-z ]{2,30}$/;



        // VALIDATION

        if(!nameRegex.test(name)){

            error.innerText =
            "Invalid Name";

            return;
        }



        if(age < 5 || age > 100){

            error.innerText =
            "Invalid Age";

            return;
        }



        if(!courseRegex.test(course)){

            error.innerText =
            "Invalid Course";

            return;
        }



        error.innerText = "";



        // GET OLD DATA

        let students =
        JSON.parse(localStorage.getItem("students")) || [];



        // OBJECT

        const student = {

            name:name,

            age:age,

            course:course
        };



        // PUSH

        students.push(student);



        // SAVE

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );



        // RESET

        studentForm.reset();



        alert("Student Added");
    });
}




// ========================
// SHOW STUDENTS
// ========================

function loadStudents(){

    if(!studentTableBody) return;



    let students =
    JSON.parse(localStorage.getItem("students")) || [];



    studentTableBody.innerHTML = "";



    if(students.length === 0){

        emptyMessage.style.display = "block";
    }
    else{

        emptyMessage.style.display = "none";
    }



    students.forEach((student,index)=>{

        studentTableBody.innerHTML += `

            <tr>

                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.age}</td>

                <td>${student.course}</td>

                <td>
                    <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">

                    Delete

                    </button>
                </td>

            </tr>

        `;
    });
}




// ========================
// DELETE STUDENT
// ========================

function deleteStudent(index){

    let students =
    JSON.parse(localStorage.getItem("students")) || [];



    students.splice(index,1);



    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );



    loadStudents();
}




// ========================
// INITIAL LOAD
// ========================

loadStudents();