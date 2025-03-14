'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"




function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const addtask = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, description }]);
    console.log(mainTask);
    setTitle("")
    setDescription("")
  }



  return (
    <div >
      <h1 className='bg-black text-white p-5 text-2xl font-semibold'>Todo App</h1>
      <form className='flex' onSubmit={addtask}>
        <Input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter task here.." className="text-black border-zinc-800 border-3 m-5 w-100 px-4 py-2" />
        <Input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Enter description here.." className="text-black border-zinc-800 border-3 m-5 w-100 px-4 py-2" />
        <Button type="submit" className="border-4 rounded m-3 text=2xl  px-10 py-4 " variant="destructive" >Add Task</Button>
      </form>
      <hr></hr>
      <div>
        <h2>
          <ul>
            {mainTask.length > 0 ? (
              mainTask.map((t, i) => (
               <div className='m-1 flex  gap-60 p-20' key={i}>
               <h2 className='text-pink-400   '>{t.title}</h2>
               <h5 className='text-pink-400  '>{t.description}</h5>
               </div>
              ))
            ) : (<div className='bg-fuchsia-100' >No Task Available....</div>)}
          </ul>
        </h2>
      </div>
    </div>
  )
}

export default page