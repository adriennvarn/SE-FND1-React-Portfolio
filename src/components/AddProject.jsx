import { useState } from "react"
import { v4 as uuid } from "uuid"

function AddProject({ setProjects }) {
    // blank project state
    const blankProject = {
        id: uuid(),
        title: "",
        description: "",
    }

    // setup blank project state
    const [newProject, setNewProject] = useState(blankProject)

    // on change, update newProject
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProject((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // on submit, call setProjects to pass up newProject
    function addProject(e) {
        e.preventDefault()
        setProjects((prevProjects) => [...prevProjects, newProject])
        // reset newProject state to clear fields
        setNewProject(blankProject)
    }

    return (
        <div className="addProjectCard ui center aligned segment">
            <h2>Add Project</h2>

            <form onSubmit={(e) => addProject(e)}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={newProject.title} onChange={handleChange} placeholder="Enter title..." />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={newProject.description} onChange={handleChange} placeholder="Enter description..." />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProject