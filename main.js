window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let task_val = input.value;
        if (!task_val) {
            alert("Sorry!! please write something...");
            return;
        }
        else {
            console.log("Success..");
        }
        // logic of create element in todo list
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_ele = document.createElement('div');
        task_content_ele.classList.add('content');
        // task_content_ele.innerText = task_val;

        const task_input_ele = document.createElement('input');
        task_input_ele.classList.add('text');
        task_input_ele.type = "text";
        task_input_ele.value = task_val;
        task_input_ele.setAttribute("readonly", "readonly");

        // adding content and content box to the div
        task_el.appendChild(task_content_ele);
        task_content_ele.appendChild(task_input_ele);

        const task_action_ele = document.createElement('div');
        task_action_ele.classList.add('actions');

        const button_edit = document.createElement('button');
        button_edit.classList.add('edit');
        button_edit.innerHTML = "Edit";

        const button_delete = document.createElement('button');
        button_delete.classList.add('delete');
        button_delete.innerHTML = "Delete";


        task_action_ele.appendChild(button_edit);
        task_action_ele.appendChild(button_delete);

        task_el.appendChild(task_action_ele);

        list_el.appendChild(task_el);


        input.value = "";
        // logic of edit one
        button_edit.addEventListener('click', () => {
            console.log('edit')

            if (button_edit.innerText == "EDIT") {
                task_input_ele.removeAttribute("readonly");
                task_input_ele.focus();
                button_edit.innerText = "save";

            } else {
                // console.log('else')
                task_input_ele.setAttribute('readonly', 'readonly');
                button_edit.innerText = "edit";

            }

        });


    });
});