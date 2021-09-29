package carRental;

public class Car {
    int ID; //need to increment for each new instance
    String make;
    static int counter = 1;
    //int price;

    public Car(String make){
        this.make = make;
        //this.price = price;
        ID = counter;
        counter++;
    }

    public String toString(){
        return ID+" "+make;
    }
}
