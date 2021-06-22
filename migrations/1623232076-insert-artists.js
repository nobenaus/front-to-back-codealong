const artistList = [
  { id: 1, name: 'Mystery Mammal' },
  { id: 2, name: 'Monplaisir' },
  { id: 3, name: 'Arrizabalaga, Bravo, Laginestra, Martinez' },
];

// 2.2 Please automate the filling of the table artists with the data of our artistList array

exports.up = async function up(sql) {
  await sql`
    INSERT INTO artists ${sql(artistList, 'id', 'name')}
`;
};

exports.down = async function down(sql) {
  await sql`DELETE FROM artists`;
};

// If this step is doing right and your database is properly configured, you can run the next command
//
// yarn migrate up
//
// After the completion of this tasks please move to file utils/database.js to continue with the next step.
