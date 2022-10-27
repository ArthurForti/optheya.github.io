function isChecked() {
    if(document.getElementById("my-checkbox").checked) {
        console.log("abriuuuu");
        document.querySelector(".partner-form").classList.remove("hidden");
    }
    else {
        console.log("fechouuuu");
        document.querySelector(".partner-form").classList.add("hidden");
    }
}







