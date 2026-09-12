import { useState } from "react"
import { v4 as uuid } from "uuid"
import "../App.css"
import AddProject from "./AddProject"
import Header from "./Header"
import ProjectList from "./ProjectList"

function App() {
    // projects array with prepopulated sample item
    const [projects, setProjects] = useState([
        {
            id: uuid(),
            title: "Sample Project",
            description: "Description of a sample project"
        },
    ])

    function handleDelete(projectToDelete) {
        setProjects(projects.filter((project) => project.id !== projectToDelete.id))
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
