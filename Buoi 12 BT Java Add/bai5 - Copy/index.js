// Lấy danh sách công việc từ local storage (nếu có)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Lấy các phần tử HTML cần sử dụng
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.querySelector('.button-element');
const taskList = document.getElementById('taskList');

// Hàm thêm công việc
function addTask() {
    // Lấy giá trị từ input
    const task = taskInput.value;

    if (task) {
        // Thêm công việc vào mảng
        tasks.push(task);

        // Lưu danh sách công việc vào local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Hiển thị danh sách công việc
        displayTasks();

        // Xóa giá trị trong input
        taskInput.value = '';
    }
}

// Hàm hiển thị danh sách công việc
function displayTasks() {
    // Xóa nội dung cũ trong danh sách
    taskList.innerHTML = '';

    // Tạo các phần tử li cho từng công việc
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Gọi hàm hiển thị công việc ban đầu
displayTasks();

