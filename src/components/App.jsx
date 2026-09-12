import { useState } from "react"
import { v4 as uuid } from "uuid"
import "../App.css"
import AddProject from "./AddProject"
import Header from "./Header"
import ProjectList from "./ProjectList"
import SearchBar from "./SearchBar"

function App() {
    // projects array with prepopulated sample item
    const [projects, setProjects] = useState([
        {
            id: uuid(),
            title: "Sample Project",
            description: "Description of a sample project"
        },
    ])
    // handle deletion
    function handleDelete(projectToDelete) {
        setProjects(projects.filter((project) => project.id !== projectToDelete.id))
    }

    // set filter based on search bar, return list after filtering
    const [filter, setFilter] = useState("")
    function filteredProjects() {
        return filter === "" ? projects : projects.filter((project) => (
            project.title.toLowerCase().includes(filter.toLowerCase()) ||
            project.description.toLowerCase().includes(filter.toLowerCase())
        ))
    }

    return (
        <>
            <Header />
            <AddProject setProjects={setProjects} />
            <div className="ui top attached block header">
                <SearchBar filter={filter} setFilter={setFilter} />
            </div>
            <ProjectList projects={filteredProjects()} handleDelete={handleDelete} />
        </>
    )
}

export default App
