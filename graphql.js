// resolvers
const resolvers = {
    Query: {
      orders: (parent, { status }) => {
        const query = status ? `SELECT * FROM orders WHERE status = '${status}'` : 'SELECT * FROM orders';
        return new Promise((resolve, reject) => {
          db.all(query, [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          });
        });
      },
      order: (parent, { id }) => {
        return new Promise((resolve, reject) => {
          db.get('SELECT * FROM orders WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
          });
        });
      },
    },
    Mutation: {
      updateStatus: (parent, { id, status }) => {
        return new Promise((resolve, reject) => {
          db.run('UPDATE orders SET status = ? WHERE id = ?', [status, id], function(err) {
            if (err) reject(err);
            db.get('SELECT * FROM orders WHERE id = ?', [id], (err, row) => {
              if (err) reject(err);
              resolve(row);
            });
          });
        });
      },
    },
  };

