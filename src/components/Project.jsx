import "./Project.css"

// project card
function Project({ project, handleDelete }) {
    return (
        <div className="projectItem ui card">
            <div className="content">
                <h2 className="header wrapped-card-text">{project.title}</h2>
                <p className="description wrapped-card-text">{project.description}</p>
            </div>
            <button className="ui bottom attached basic button small" onClick={() => handleDelete(project)}>Delete project</button>
        </div>
    )
}

export default Project