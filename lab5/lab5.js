    let listSection = document.getElementById("list-container");
    let btnAdd = document.getElementById("btnAdd");
        btnAdd.addEventListener("click", () => {
            addTask();
        });

        function addTask() {
            let inputName = document.getElementById("task-name").value;
            let inputDescription = document.getElementById("description").value;
            if (inputName.length < 5 || inputDescription.length < 10) {
                alert("Task name must be above 5 characters and description must be above 10 characters!")
            } else {
                let row = document.createElement("div");
                row.classList.add("row");
                let disabledInput = true;

                let name = document.createElement("input");
                name.type = "text";
                name.value = inputName;
                name.disabled = disabledInput;

                let description = document.createElement("input");
                description.type = "text";
                description.value = inputDescription;
                description.disabled = disabledInput;

                let delDiv = document.createElement("div")
                let btnDel = document.createElement("button");
                btnDel.innerHTML = "del";
                delDiv.appendChild(btnDel);

                let editDiv = document.createElement("div");
                let btnEdit = document.createElement("button");
                btnEdit.innerHTML = "edit";
                editDiv.appendChild(btnEdit);


                row.appendChild(name);
                row.appendChild(description);
                row.appendChild(delDiv);
                row.appendChild(editDiv);

                listSection.appendChild(row);

                btnDel.addEventListener("click", () => {
                    listSection.removeChild(row);
                });

                btnEdit.addEventListener("click", () => {
                    name.disabled = !disabledInput;
                    description.disabled = !disabledInput;
                    btnEdit.innerHTML = disabledInput ? "Update" : "Edit";
                    disabledInput = !disabledInput;
                });
            }
        }