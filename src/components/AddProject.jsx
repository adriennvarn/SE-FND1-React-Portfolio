import { useState, useRef } from "react"
import { v4 as uuid } from "uuid"
import "./AddProject.css"

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

    // set up input ref to clear descrip input on submit
    const inputRef = useRef(null)

    // on submit, call setProjects to pass up newProject
    // remove focus from descrip input if necessary
    function addProject(e) {
        e.preventDefault()
        setProjects((prevProjects) => [...prevProjects, newProject])
        // reset newProject state to clear fields
        setNewProject(blankProject)
        // remove focus from descrip input
        if (inputRef.current) {
            inputRef.current.blur()
        }
    }

    return (
        <form onSubmit={(e) => addProject(e)} className="ui form">
            <h2 className="ui header">Add Project</h2>
            <div className="ui fields formContainer">
                <div className="field">
                    <div className="ui labeled input">
                        <label className="ui label">Title</label>
                        <input
                            type="text"
                            name="title"
                            ref={inputRef}
                            value={newProject.title}
                            onChange={handleChange}
                            placeholder="Enter title..." />
                    </div>
                </div>
                <div className="field">
                    <div className="ui labeled input">
                        <label className="ui label">Description</label>
                        <input
                            type="text"
                            name="description"
                            ref={inputRef}
                            value={newProject.description}
                            onChange={handleChange}
                            placeholder="Enter description..." />
                    </div>
                </div>
                <button className="ui button" type="submit">submit</button>
            </div>
        </form>
    )
}

export default AddProject