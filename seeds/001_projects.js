
exports.seed = function(knex) {
return knex("projects")
    .truncate()
    .then(function() {
     
      return knex("projects").insert([
        {
          name: "plan pesonal databases",
          description: "make sure to use db designer to plan personal database project",
          completed: false
        },
        {
          name: "climbing training",
          description: "practice dead hangs",
          completed: false
        },
        {
          name: "running",
          description: "make sure to run everyday",
          completed: false
        }
      ]);
    });
};