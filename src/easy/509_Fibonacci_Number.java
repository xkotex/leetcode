package easy;

public class Main {

    public static void main(String[] args) {
        fib(7);
    }

    public static int fib(int n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
}