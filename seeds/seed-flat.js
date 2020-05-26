exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('flats').del()
    .then(() => {
      // Inserts seed entries
      return knex('flats').insert([
        {
          title: 'Flat 1',
          price: 4000,
          floorArea: 17,
          country: 'Hungary',
          zip: 6722,
          city: 'Szeged',
          street: 'Alfoldi'
        },
        {
          title: 'Flat 2',
          price: 150000,
          floorArea: 85,
          country: 'Hungary',
          zip: 6727,
          city: 'Szeged',
          street: 'Szoke Tisza'
        },
        {
          title: 'Flat 3',
          price: 30000,
          floorArea: 12,
          country: 'Hungary',
          zip: 6726,
          city: 'Szeged',
          street: 'Fulemule'
        }
      ]);
    });
};
