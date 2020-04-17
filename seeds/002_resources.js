
exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { name: "alone on the wall", description: "book by alex honnold worlds most famous climber" },
        { name: "running your face off", description: "book about runing your face off" },
        { name: "fingerstrength is king", description: "made up book about finger strength lul" },
        { name: "db desinger", description: "app.dbdesigner.net good resource for plannign databases" }
      ]);
    });
};