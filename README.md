# cs628-pe-yogesh-goel
![Screenshot 2024-01-05 at 2 43 40 PM](https://github.com/yogesh2699/cs628-pe-yogesh-goel/assets/24565556/fa799c59-7183-447d-9afd-d052f9eb9a46)

Input:
User input: Personal details, education, work experience, skills, projects, social links.
Data source: JSON file, database, or API providing resume information.
Process:
Component-based structure: Divide the resume into React components (Header, Personal Info, Education, etc.).
State management: Use React state for dynamic content and user interactions.
Data rendering: Dynamically render resume data onto components.
Event handling: Implement handlers for user interactions (e.g., editing).
Styles and layout: Apply CSS or styling library for design.
Output:
UI components: Final user interface with resume information.
Interactive features: Editable content and user-friendly interactions.
Styled resume: Visually appealing design based on specified styles.
Dynamic content: Easily updatable resume without code changes.
Export/print option (optional): Ability to export/print the resume (e.g., PDF).


# PE02:- 

<img width="1437" alt="Screenshot 2024-01-10 at 4 13 26 PM" src="https://github.com/yogesh2699/cs628-pe-yogesh-goel/assets/24565556/3a0aa1f4-1c5a-46d7-961f-18b4701c89e7">



# PE03:-

![Screenshot 2024-01-23 at 3 42 35 PM](https://github.com/yogesh2699/cs628-pe-yogesh-goel/assets/24565556/4dcec01a-58c8-4b23-990d-8622ea8ae329)


Input

The todo list application follows the Input-Process-Output model and consists of separate components for the ToDo list and ToDo tasks. The Input stage involves capturing user input through an input field where users can enter descriptions of tasks they want to add to the list. The application uses the useState hook to manage the state of the ToDos. The user-entered data is stored in the newTodo state variable, allowing the application to handle changes and updates efficiently.

Process


The Process stage is driven by event handlers that capture user interactions, such as clicking the "Add Task" or "Delete" buttons. The addTodo function processes the input by checking if the newTodo input is not empty, ensuring valid task descriptions. When the user clicks the "Add Task" button, the function updates the todo list by adding the new task to the todos state array using the setTodos function. Subsequently, the newTodo state is cleared, enabling the user to add more tasks consecutively.

The removeTodo function handles task deletion. When the user clicks the "Delete" button associated with a specific task, the function is triggered with the index of the task to be removed. The program creates a new array, updatedTodos, by filtering out the task at the specified index from the todos array. The setTodos function updates the state with updatedTodos, effectively removing the selected task from the todo list.

Output


The Output stage presents the todo list to the user, dynamically rendered using the .map() function to display the list of ToDos. The ToDo tasks are showcased in a visually appealing table format, enhancing the user interface. The TodoList component renders a table with two columns - "Description" and "Actions." The description of each task is displayed in the first column, while an interactive "Delete" button is provided for each task in the second column. This enables users to manage their tasks effectively by easily adding new tasks or removing existing ones.

CSS styling is applied to further improve the user interface, making the todo list visually appealing and user-friendly. The TodoList.css file provides the necessary styles to enhance the layout and overall look of the application.

The todo list application adheres to the Input-Process-Output model effectively. By capturing user input, processing it through event handlers and state management with useState, and presenting the result as a dynamic and visually pleasing todo list, the application offers a seamless and efficient way for users to manage their tasks. The use of separate components and the .map() function enhances code modularity and readability, contributing to a well-organized and maintainable application.
