import "../styles/style.css"

const addTaskButton = document.querySelector('.add-button');
const dialog = document.querySelector('dialog');
const shutDialogButton = document.querySelector('dialog>form>button');
const everydayTag = document.querySelector('dialog>form input[type="checkbox"]');
const dateTimeField = document.querySelector('dialog>form input[type="datetime-local"]');

addTaskButton.addEventListener('click', () => {
    dialog.showModal();
});

shutDialogButton.addEventListener('click', (e) => {
   e.preventDefault();
   dialog.close(); 
});

everydayTag.addEventListener('click', () => {
    if (everydayTag.checked) {
        dateTimeField.disabled = true;
    } else {
        dateTimeField.disabled = false;
    }
});
