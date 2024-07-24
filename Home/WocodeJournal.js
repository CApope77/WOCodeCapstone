
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector("#test-btn");
    let notes = document.querySelectorAll(".input-box");

    function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes") || "";
    }

    function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "Assets/WOCimage13.png";
        notesContainer.appendChild(inputBox).appendChild(img);
        updateStorage(); // Update storage after adding a new note
    });

    notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        } else if (e.target.tagName === "P") {
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function () {
                    updateStorage();
                }
            });
        }
    });

    showNotes(); // Load notes when the page is loaded;