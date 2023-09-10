function validateForm() {
    
    let firstName = document.getElementById("fname").value.trim()
    let lastName = document.getElementById("lname").value.trim()
    let age = document.getElementById("age").value.trim()
    let college = document.getElementById("college").value.trim()

    if (firstName == "" || lastName == "" || age == "" || college == ""){
        alert("All fields required to be filled")
        return false
    }
        else {
            return true
        }

}