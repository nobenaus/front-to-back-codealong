// ⚠️⚠️⚠️
// Before begin this step make sure you have:
//
// - PostgreSQL database configured and ready tu use.
// - Credentials to the database saved in a .env file.
// ⚠️⚠️⚠️
//
// --------------- Step 2 --------------
//
// In this step we are going to automate the process of create the schema and fill the database with our data.
//
//
// 2.1 Please create the automation for table artists of our schema

exports.up = async (sql) => {
  await sql`
  CREATE TABLE artists (
    id integer PRIMARY KEY UNIQUE NOT NULL,
    name varchar(100) NOT NULL
  )
`;
};

exports.down = async (sql) => {
  await sql`
  DROP TABLE artists
`;
};


// After this tasks are complete move to file 1623232076-insert-artists.js to find step 2.2 instructions
