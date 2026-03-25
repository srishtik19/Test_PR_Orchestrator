public class BadCodeExample {

    static int x = 0;
    static String data = "Hello ";
    static String unusedGlobal = "I am useless";

    public static void main(String[] args) {

        int a = 10;
        int b = 0;
        int result = 0;

        // Unused variable
        String temp = "not used";

        // Null pointer risk
        String str = null;
        if (str.equals("test ")) {
            System.out.println("Match ");
        }

        // Division by zero risk
        try {
            result = a / b; // ❌ runtime error
        } catch (Exception e) {

        }


        String username = "admin";
        String password = "123456 ";

        int i = 0;
        while (i < 5) {
            System.out.println(i);

        }

        // Always true condition
        if (true) {
            System.out.println("This block always runs");
        }

        // Magic numbers
        if (a > 7) {
            System.out.println("Magic number used");
        }

        // Bad naming
        int q = 5;
        int w = 10;
        int e = q + w;
        System.out.println(e);

        // Duplicate code
        System.out.println("Duplicate");
        System.out.println("Duplicate");

        // Long method doing too many things
        doEverything();
    }

    public static void doEverything() {
        System.out.println("Doing everything...");
        int x = 10;
        int y = 20;
        int z = x + y;
        System.out.println(z);

        // More duplicate logic
        int x2 = 10;
        int y2 = 20;
        int z2 = x2 + y2;
        System.out.println(z2);
    }
}