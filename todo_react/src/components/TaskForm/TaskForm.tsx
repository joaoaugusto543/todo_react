import React,{ReactElement,useState,ChangeEvent, FormEvent , useEffect} from 'react'
import './TaskForm.css'
import { ITask } from '../../Interface/Task'

type Props = {
    btnText : string,
    taskList: ITask[]
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

export default function TaskForm({btnText,taskList,setTaskList,handleUpdate,task}: Props) : ReactElement{

  const [id,setId]=useState<number>(0)
  const [title,setTitle]=useState<string>('')
  const [difficulty,setDifficulty]=useState<number>(0)

  function addTaskHandler(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(handleUpdate);
    if (taskList) {
      if (handleUpdate) {
        handleUpdate(id, title, difficulty);
      } else {
        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = { id, title, difficulty };

        setTaskList!([...taskList, newTask]);

        setTitle("");
        setDifficulty(0);
      }
    }
  };

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <form onSubmit={addTaskHandler} className='form'>
        <div className='input_container'>
            <label htmlFor='title'>Título:</label>
            <input type='text' name='title' placeholder='Título da tarefa' onChange={(e: ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} value={title} />
        </div>
        <div className='input_container'>
            <label htmlFor='difficulty'>Dificuldade:</label>
            <input type='number' name='difficulty' placeholder='Dificuldade da tarefa' onChange={(e: ChangeEvent<HTMLInputElement>)=>setDifficulty(parseInt(e.target.value))} value={difficulty}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}