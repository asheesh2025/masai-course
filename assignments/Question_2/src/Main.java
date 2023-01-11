import jdk.dynalink.beans.StaticClass;

public class Main {
    String month="";
    void printMonths (String month)
            {

                if(month=="JAN")
                {
                    System.out.println("This is the 1st Month of the Year January");
                }
                else if(month=="FEB")
                {
                    System.out.println("This is the 2nd Month of the Year Febuary");
                }
                else if(month=="MAR")
                {
                    System.out.println("This is the 3rd Month of the Year March");
                }
                else if(month=="APR")
                {
                    System.out.println("This is the 4th Month of the Year April");
                }
                else if(month=="MAY")
                {
                    System.out.println("This is the 5th Month of the Year May");
                }else if(month=="JUN")
                {
                    System.out.println("This is the 6th Month of the Year June");
                }else if(month=="JUL")
                {
                    System.out.println("This is the 7th Month of the Year July");
                }else if(month=="Aug")
                {
                    System.out.println("This is the 8th Month of the Year August");
                }
                else if(month=="SEP")
                {
                    System.out.println("This is the 9th Month of the Year September");
                }
                else if(month=="OCT")
                {
                    System.out.println("This is the 10th Month of the Year Octobar");
                }
                else if(month=="NOV")
                {
                    System.out.println("This is the 11th Month of the Year November");
                }
                else if(month=="DEC")
                {
                    System.out.println("This is the 12th Month of the Year December");
                }
            }
    public static void main(String[] args) {

        Main obj=new Main();
        //month="jan";
        obj.printMonths("jan");
    }
}
