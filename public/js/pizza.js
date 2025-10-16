document.getElementById('pizza-form').onsubmit = () => {

    //Validate first name
    let fname = document.getElementById('fname').value.trim();
    let lname = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    if (fname == "") {
        document.getElementById("err-fname").style.display = "block";
    } else {
        alert(fname)
    }
    if (lname == "") {
        document.getElementById("err-lname").style.display = "block";
    } else {
        alert(lname)
    }
    if (email == "" || email.indexOf("@") === -1) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    } else {
        alert(email)
    }

    let methodButtons = document.getElementsByName("method");
    let count = 0;
    for (let i=0; i<methodButtons.length; i++) {
        if (methodButtons[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }

    // Other
    
    let size = document.getElementsByName("size").value;

    if (size === "none") {
        document.getElementById("err-size").style.display = CSSLayerBlockRule;
        isValid = false;
    }
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}

    // var documentStatements = [["err-fname", document.getElementById('fname').value.trim()], ["err-lname", document.getElementById('lname').value.trim()], ["err-email", document.getElementById('email').value.trim()]];
    // for (n in Range(0, 2)) {
    //     let documentDefinition = documentStatements[n[0]]
    //     let documentWrittenValue = documentStatements[n[1]];
    //     if (!documentWrittenValue) {
    //         console.log(documentDefinition)
    //         document.getElementById(documentDefinition).style.display = "block";
    //     } else {
    //         alert(documentStatements[n[0]]);
    //     }
    // }