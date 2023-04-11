import React,{ReactElement} from 'react'
import './Modal.css'

type Props = {
    children: React.ReactNode;
}

export default function Modal({children}: Props) : ReactElement {

  function closeModal(e: React.MouseEvent): void {
    const modal = document.getElementById("modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className='hide' >
        <div className='fadee' onClick={closeModal}></div>
        <div className='modal'>
            <h1>texto modal</h1>
            {children}
        </div>
    </div>
  )
}