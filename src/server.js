const app = require('./config/config-express')();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
