document.addEventListener("DOMContentLoaded", function () {
    let nameElement = document.getElementById("name");
    let nameText = "I'm Lucia.";
    let index = 0;

    function typeName() {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
            index++;
            setTimeout(typeName, 150);
        } else {
            setTimeout(deleteName, 1000);
        }
    }

   /* function deleteName() {
        if (nameElement.innerHTML.length > 0) {
            nameElement.innerHTML = nameElement.innerHTML.slice(0, -1);
            setTimeout(deleteName, 100);
        } else {
            setTimeout(typeMajor, 500);
        }
    } */


    // Start the animation
    typeName();
});
