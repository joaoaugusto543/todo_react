import React,{ReactElement} from 'react'
import './TaskList.css'
import { ITask } from '../../Interface/Task'
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'

type Props = {
  taskList:ITask[]
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
  handleEdit(task:ITask):void
}


export default function TaskList({taskList,setTaskList,handleEdit}: Props) : ReactElement {

  function handleDelete(id : number){
    setTaskList(taskList.filter((task)=>task.id !== id))
  }
  
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task, index) => (
        <div key={index} className='task'>
          <div className='details'>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>
          <div className='actions'>
            <button className='bi bi-pencil' onClick={() => handleEdit(task)}><BsFillPencilFill/></button>
            <button className='bi bi-trash' onClick={() => handleDelete(task.id)}><BsFillTrashFill/></button>
          </div>
        </div>
      ))
    ) : (
      <p>Não há tarefas cadastradas</p>
    )}
  </>
  )
}