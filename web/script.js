document.getElementById('facturaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value;
    const descripcion = document.getElementById('descripcion').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;

    fetch('/calcularFactura', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            numero,
            descripcion,
            cantidad,
            precio
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultadoNumero').textContent = "Número: " + data.numero;
        document.getElementById('resultadoDescripcion').textContent = "Descripción: " + data.descripcion;
        document.getElementById('resultadoCantidad').textContent = "Cantidad Comprada: " + data.cantidad;
        document.getElementById('resultadoPrecio').textContent = "Precio por Artículo: $" + data.precio.toFixed(2);
        document.getElementById('resultadoTotal').textContent = "Total de la Factura: $" + data.total.toFixed(2);

        document.getElementById('facturaForm').classList.add('hidden');
        document.getElementById('resultado').classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
});

function volver() {
    document.getElementById('facturaForm').reset();
    document.getElementById('facturaForm').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
}
