const express = require('express')
const app = express()
const port = 5000
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

dotenv.config()
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use('/api/auth', authRoute);
  app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  console.log("hey")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 