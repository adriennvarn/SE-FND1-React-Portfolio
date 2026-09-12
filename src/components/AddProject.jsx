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
        <div className="addProjectCard ui form">
            <h2>Add Project</h2>

            <form onSubmit={(e) => addProject(e)} className="fields ui three columns">
                <div className="field ui labeled input six wide column">
                    <label className="ui label" htmlFor="title">Title</label>
                    <input type="text" name="title" value={newProject.title} onChange={handleChange} placeholder="Enter title..." />
                </div>
                <div className="field ui labeled input six wide column">
                    <label className="ui label" htmlFor="description">Description</label>
                    <input type="text" name="description" value={newProject.description} onChange={handleChange} placeholder="Enter description..." />
                </div>
                <button className="ui button two wide column" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProject