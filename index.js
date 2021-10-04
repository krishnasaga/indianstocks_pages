const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/content',express.static(path.resolve(__dirname,'content')));

const PORT = 4001;

app.listen(PORT,()=>{
  console.log(`biginvest content server is listening on port ${PORT}`);
});
