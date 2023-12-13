const express = require('express');
const app = express();
const cors = require("cors");
const UserRouter = require('./Routes/UserRouter')
const ProductRouter = require('./Routes/ProductRouter')
const visitRoutes = require('./Routes/VisitsRouter');
app.use(express.json())
app.use(cors())
app.use('/users' , UserRouter)
app.use('/products' , ProductRouter)
app.use('/visits' , visitRoutes)


app.listen(5000, () => {
  console.log('> Ready on http://localhost:5000');
});