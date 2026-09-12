import { useState } from "react"
import { v4 as uuid } from "uuid"
import "../App.css"
import AddProject from "./AddProject"
import Header from "./Header"
import ProjectList from "./ProjectList"

function App() {
    const [projects, setProjects] = useState([
        {
            id: uuid(),
            title: "Project 1",
            description: "Sample projects"
        },
    ])

    function handleDelete(projectToDelete) {
        setProjects(projects.filter((project) => {
            project.id !== projectToDelete.id
        }))
    }

    return (
        <>
            <Header />
            <AddProject setProjects={setProjects} />
            <ProjectList projects={projects} handleDelete={handleDelete} />
        </>
    )
}

export default App
