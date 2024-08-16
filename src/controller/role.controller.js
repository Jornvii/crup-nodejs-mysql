const db = require('../config/db').db;
const { logError } = require("../config/service");
// const logError = (context, err, res) => {
//   console.error(`${context} - ${err.message}`);
//   res.status(500).send('Internal Server Error');
// };

const getAll = async (req, res) => {
  try {
    const [data] = await db.queryyyyyyy("SELECT * FROM roles");
    res.json({
      list: data,
    });
  } catch (err) {
    logError("roles.getAll", err, res);
  }
};

const create = async (req, res) => {
  try {
    const sql = "INSERT INTO roles (name, code, status) VALUES (:name, :code, :status)";
    const param = {
      name: req.body.name,
      code: req.body.code,
      status: req.body.status,
    };
    const [data] = await db.query(sql, param);
    res.json({
        message: "create new role successfully!",
      data: data,
    });
  } catch (err) {
    logError("roles.create", err, res);
  }
};

const update = async (req, res) => {
  try {
    const sql = "UPDATE roles SET name =:name, code =:code, status =:status WHERE id =:id";
    const param = {
      name: req.body.name,
      code: req.body.code,
      status: req.body.status,
      id: req.body.id,
    };
    const [data] = await db.query(sql, param);
    res.json({
        message: "update successfully!",
        data: data,
      });
  } catch (err) {
    logError("roles.update", err, res);
  }
};

const remove = async (req, res) => {
  try {
    const sql = "DELETE FROM roles WHERE id = :id";
    var param = {
        id: req.body.id,
      };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Delete successfully!",
      data: data,
    });
  } catch (err) {
    logError("category.remove", err, res);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
