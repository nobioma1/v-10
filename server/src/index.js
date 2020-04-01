const cors = require('cors');
const express = require('express');

const apiRouter = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.log(`live @PORT: ${PORT} 🚀`));
