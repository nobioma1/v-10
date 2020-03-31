const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`live @PORT: ${PORT} 🚀`));
