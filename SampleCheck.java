public class SampleCheck {
    static int value = 10;
    static String value2 = "10";

    public static void main(String[] args) {
        int unused = 99;
        String text = null;

        if (text == null) {
            System.out.println("Java file detected successfully.");
        }

        for (int i = 0; i < 3; i++) {
            System.out.println(i);
        }

        if (true) {
            System.out.println("This is intentionally bad code");
        }
    }
}
