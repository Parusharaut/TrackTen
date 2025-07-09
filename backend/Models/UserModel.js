import { poolPromise } from "../db.js";

const getUserByEmailOrUsername = async (emailOrUsername) => {
  const pool = await poolPromise;

  const result = await pool
    .request()
    .input('input', emailOrUsername)
    .query('SELECT * FROM Users WHERE email = @input OR firstName = @input');

  return result.recordset[0]; // First matched user
};

module.exports = {
  getUserByEmailOrUsername,
};
