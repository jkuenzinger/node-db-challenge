const db = require("../data/db-config.js")

module.exports= {
    addProject,
    addResource,
    addTask,
    getProjects,
    getResources,
    getTasks
};

function addProject(project) {
    return db('projects').insert(project);

}

function addResource(resource) {
    return db("resources").insert(resource);
}

function addTask(task) {
    return db("tasks").insert(task);
}


function getProjects() {
    return db("projects")
}

function getResources() {
    return db("resources")
}
function getTasks() {
    return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select("t.project_id", "p.name", "p.description", "t.id", "t.description", "t.notes", "t.completed")
}