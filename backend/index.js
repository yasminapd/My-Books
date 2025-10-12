const express = require ('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models');

db.sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
});

app.get('/', (req, res) => {
    res.send('Welcome to books application!');
});

require('./routes/book.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});