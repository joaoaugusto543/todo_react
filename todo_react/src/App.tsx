import './App.css';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { ITask } from './Interface/Task';
import {useState} from 'react'

function App() {

  const [tasklist,setTaskList]=useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

 function hideOrShowModal(display: boolean) {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  function editTask (task: ITask): void {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  function updateTask(id: number, title: string, difficulty: number) {

    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = tasklist.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;

    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={tasklist} task={taskToUpdate} handleUpdate={updateTask} setTaskList={setTaskList}/>}/>
      <NavBar/>
      <main className='main'>
        <div>
          <h1>O que você vai fazer?</h1>
          <TaskForm btnText='Criar tarefa' taskList={tasklist} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={tasklist} setTaskList={setTaskList} handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
