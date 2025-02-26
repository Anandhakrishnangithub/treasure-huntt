console.log("Server script is running..."); // Debugging log

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("Modules loaded successfully."); // Debugging log

const keys = ["KeY1", "5THE", "Nme0", "FThe", "McIn", "thEF", "iLmt", "RMNA", "tor2", "john"];

app.post('/check-key', (req, res) => {
    console.log("Received request:", req.body); // Debugging log
    const { page, key } = req.body;
    if (keys[page - 1] === key) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
