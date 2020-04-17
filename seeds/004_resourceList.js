
exports.seed = function(knex) {
  return knex("resourceList")
    .truncate()
    .then(function() {
      return knex("resourceList").insert([
        { project_id: 1, resource_id: 4 },
        { project_id: 2, resource_id: 3 },
        { project_id: 3, resource_id: 2 }
      ]);
    });
};