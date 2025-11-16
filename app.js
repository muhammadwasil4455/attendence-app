
function loginBtn() {
    let userName = document.getElementById("userName");
    let userPassword = document.getElementById("userPassword");
    
    
    
    let adminData = {
        name: "wasil",
        Password: 12345,
    }
    
    let { name, Password } = adminData

    if (name == userName.value && Password == userPassword.value) {
        location = "dashboard.html"
    } else {
        alert("invalid password is name : wasil password : 12345")
    }

}



let arr = JSON.parse(localStorage.getItem("students")) || [];



function addStudent() {
    let stuName = document.getElementById("stuName")
    let stuRollNum = document.getElementById("stuRollNum")
    let stuClass = document.getElementById("stuClass");
    let sudentDate = {
        name: stuName.value,
        roll: stuRollNum.value,
        class: stuClass.value,
    }

    arr.push(sudentDate)
    localStorage.setItem("students", JSON.stringify(arr));

    stuName.value = "";
    stuRollNum.value = "";
    stuClass.value = "";

}


let attendencelist = document.getElementById("attendencelist");

arr.forEach(function (student, index) {
    attendencelist.innerHTML += `<div class = "list" >
    <p>
    ${index + 1} -
    Student Name : (${student.name}
    Roll number : (${student.roll})
    class : (${student.class}) 
    </p>
    </div>`

});

function attendence() {
    location = "attendence.html"
}






function markAttendence() {
    let recordmainList = document.getElementById("recordmainList");
    let input = document.getElementById("input");
    let arr = JSON.parse(localStorage.getItem("students")) || [];

    let found = arr.find(function (student) {
        return student.roll === input.value
    })
    input.value = ""

    if (found) {
        found.status = "present";
        localStorage.setItem("students", JSON.stringify(arr));
        recordmainList.innerHTML += `<p>
        student Name : (${found.name})
        student Class : (${found.class})
        student Roll number : (${found.roll})
        status : (${found.status}).
        </p>`
    }
    else {
        alert("attendence not marked")
    }

}





function recordList() {
    location = "recordlist.html"
}
