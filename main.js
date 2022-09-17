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

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_ele = document.createElement('div');
        task_content_ele.classList.add('content');
        task_content_ele.innerText = task_val;

        task_el.appendChild(task_content_ele);

        list_el.appendChild(task_el);



    });
});