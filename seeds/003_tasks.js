
exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          description: "getting my legs back",
          notes: "run twice a week",
          completed: false,
          project_id: 2
        },
        {
          description: "climbing training",
          notes: "climb at the gym 3 times a week",
          completed: false,
          project_id: 3
        },
        {
          description: "building databases",
          notes: "make sure to write one database a week",
          completed: false,
          project_id: 1
        },
        {
          description: "stream ideas",
          notes: "brainstorm and plan several bits to be used during stream",
          completed: false,
          project_id: 1
        }
      ]);
    });
};