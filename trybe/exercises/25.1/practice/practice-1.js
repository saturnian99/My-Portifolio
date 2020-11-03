db.transactions.aggregate([
  { $match: { from: "Dave America" } },
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 } },
        { to: "Lisa Simpson" }
      ]
    }
  },
  { $match: { value: { $gt: 1000 } } },
  { $limit: 3 }
]);