// const router = express.Router();
// const { getAll, create, update, remove } = require('../controllers/role.controller');
const { getAll, create, update, remove } = require("../controller/role.controller");
const roleRoutes = (app) => {
  app.get('/api/roles', getAll);           
  app.post('/api/roles', create); 
  app.put('/api/roles', update);    
  app.delete('/api/roles', remove); 
  
};

module.exports = { roleRoutes };
