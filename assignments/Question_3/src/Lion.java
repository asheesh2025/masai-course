public class Lion {
    String name;
    boolean isHungry;
    int age;
    static int totalDeaths;

    //static printKillings() : void
    //thinking() : void
    void printKillings (int totalDeaths)
    {
        System.out.println("Total killings by lions in jungle = "+totalDeaths);
    }
    public static void main(String[] args) {



        Lion obj=new Lion();
        if ( obj.isHungry==false){
            System.out.println("LionName is sleeping;");
        }

        if(obj.isHungry==true && obj.age>12){
            totalDeaths=totalDeaths+2;
            System.out.println("lionName has eaten two animal");
        }
        if(obj.isHungry==true && obj.age<=12 && obj.age>=2){
            totalDeaths=totalDeaths+1;
            System.out.println("lionName has eaten one animal");
        }
        if(obj.isHungry==true && obj.age<=2){
            System.out.println("lionName is calling Mom");
        }

        Lion lion1=new Lion();
        Lion lion2=new Lion();
        Lion lion3=new Lion();


    }
}
