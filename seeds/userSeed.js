exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usersData').del()
  await knex('usersData').insert([
    {
      userId: "1655039180958",
      email: "user1@gmail.com",
      username: 'user1',
      password: "$2a$08$id3DD0Fljm.jgkS233Sod.YTBXeA52NfZQ8UgUtGmAdSiANc5m6MS",
      role: "user"
  },
  {
    userId: "1655039300983",
    email: "admin@gmail.com",
    username: 'admin',
    password: "$2a$08$9R7qcqFxkAGF8D933Z3xJukiVFTnR1ykRvzqeW2Aq30kMGV9kiuF.",
    role: "admin"
},

{
  userId: "1655039069796",
  email: "user2@gmail.com",
  username: 'user2',
  password:"$2a$08$vKOOnkGuVBKBC2xRieBObOTZfyuWrp6gHLtTVLv5.u8tYHowN5yRi",
  role: "user"
},
  ]);
};