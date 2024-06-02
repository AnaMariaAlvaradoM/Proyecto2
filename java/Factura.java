public class Factura {
    private String numero;
    private String descripcion;
    private int cantidadComprada;
    private double precioPorArticulo;

    // Constructor
    public Factura(String numero, String descripcion, int cantidadComprada, double precioPorArticulo) {
        this.numero = numero;
        this.descripcion = descripcion;
        this.setCantidadComprada(cantidadComprada);
        this.setPrecioPorArticulo(precioPorArticulo);
    }

    // Métodos get y set para cada variable de instancia
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCantidadComprada() {
        return cantidadComprada;
    }

    public void setCantidadComprada(int cantidadComprada) {
        this.cantidadComprada = Math.max(0, cantidadComprada);
    }

    public double getPrecioPorArticulo() {
        return precioPorArticulo;
    }

    public void setPrecioPorArticulo(double precioPorArticulo) {
        this.precioPorArticulo = Math.max(0.0, precioPorArticulo);
    }

    // Método para calcular el monto de la factura
    public double getTotalFactura() {
        return cantidadComprada * precioPorArticulo;
    }

    // Método para representar la factura como una cadena
    @Override
    public String toString() {
        return "Factura{" +
                "numero='" + numero + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", cantidadComprada=" + cantidadComprada +
                ", precioPorArticulo=" + precioPorArticulo +
                ", totalFactura=" + getTotalFactura() +
                '}';
    }
}
