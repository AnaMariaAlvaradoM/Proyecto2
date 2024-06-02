
public class FacturaTest {
    public static void main(String[] args) {
        Factura factura1 = new Factura("001", "Teclado", 2, 25.99);
        System.out.println(factura1);

        Factura factura2 = new Factura("002", "Ratón", 3, -15.75);
        System.out.println(factura2);

        Factura factura3 = new Factura("003", "Monitor", -1, 199.99);
        System.out.println(factura3);
    }
}
