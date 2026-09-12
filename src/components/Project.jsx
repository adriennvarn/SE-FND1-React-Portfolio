function Project({ project, handleDelete }) {
    return (
        <div className="projectItem ui card">
            <div className="content">
                <h2 className="header">{project.title}</h2>
                <p className="description">{project.description}</p>
            </div>
            <button className="ui bottom attached basic button small" onClick={() => handleDelete(project)}>Delete project</button>
        </div>
    )
}

export default Project