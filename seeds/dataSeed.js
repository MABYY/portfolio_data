exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fundData').del()
  await knex('fundData').insert([
    {fundId : '1' , Api: 1499999, Fecha: "08-03-2022", Nombre_Fondo: "Delta Gestion IX", date: "04/14/2022"}, 
    {fundId : '2' , Api: 1500000, Fecha: "08-03-2022", Nombre_Fondo: "Delta Gestion III", date : "04/14/2022"},
    {fundId : '3' , Api: 1500001, Fecha: "08-03-2022", Nombre_Fondo: "Delta Gestion VIII", date : "04/14/2022"}, 
    {fundId : '4',  Api: 1500002, Fecha: "08-03-2022", Nombre_Fondo: "Delta Gestion VII", date : "04/14/2022"}, 

  ]);
};
