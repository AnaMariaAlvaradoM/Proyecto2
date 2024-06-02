const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'web')));

app.post('/calcularFactura', (req, res) => {
  const { numero, descripcion, cantidad, precio } = req.body;
  const cantidadComprada = parseInt(cantidad) > 0 ? parseInt(cantidad) : 0;
  const precioPorArticulo = parseFloat(precio) > 0 ? parseFloat(precio) : 0.0;
  const totalFactura = cantidadComprada * precioPorArticulo;

  res.json({
    numero,
    descripcion,
    cantidad: cantidadComprada,
    precio: precioPorArticulo,
    total: totalFactura
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
