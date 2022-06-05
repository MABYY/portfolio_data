exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usersData').del()
  await knex('usersData').insert([
    {
      userId: "1651761236560",
      email: "user1@gmail.com",
      username: 'user1',
      password: "$2a$08$20bS6eZEt9HpsUXxRqG/geDJcDYDXfb3FKZQa9UFTqBjKbdP84t7W",
      role: "user"
  },
  {
    userId: "1651761335989",
    email: "admin@gmail.com",
    username: 'admin',
    password: "$2a$08$eC92NwvwM/pfRTOhI.BuCOwejU935geVedvdEzqkVcGwGem9VLTZO",
    role: "admin"
},

{
  userId: "1651761335988",
  email: "user2@gmail.com",
  username: 'user2',
  password: "$2a$08$20bS6eZEt9HpsUXxRqG/geDJcDYDXfb3FKZQa9UFTqBjKbdP84t7W",
  role: "user"
},
  ]);
};