function isChecked() {
    if(document.getElementById("my-checkbox").checked) {
        document.querySelector(".partner-form").classList.remove("hidden");
    }
    else {
        document.querySelector(".partner-form").classList.add("hidden");
    }
}







