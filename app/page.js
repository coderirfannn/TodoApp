"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

export default function TodoApp() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (title.trim()) {
      setMainTask([...mainTask, { title, description }])
      setTitle("")
      setDescription("")
    }
  }

  const delteTask = (index)=>{
    let copyTask = [...mainTask];
    copyTask.splice(index , 1);
    setMainTask(copyTask);
    
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-extrabold">Todo App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <form onSubmit={addTask} className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1 space-y-2">
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter task title..."
                  className="w-full"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Enter task description..."
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto" variant="default">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tasks</h2>

          {mainTask.length > 0 ? (
            <div className="grid gap-4">
              {mainTask.map((task, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{task.title}</h3>
                        {task.description && <p className="text-muted-foreground mt-1">{task.description}</p>}
                      </div>
                      <Button onClick={()=>{
                        delteTask(index)}} variant="destructive">Delete</Button>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-muted/50">
              <CardContent className="p-6 text-center text-muted-foreground">
                No tasks available. Add a task to get started!
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

