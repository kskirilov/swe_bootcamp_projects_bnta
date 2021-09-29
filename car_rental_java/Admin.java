package carRental;
import java.util.ArrayList;
import java.util.Scanner;



public class Admin {
    static ArrayList<Car> cars = new ArrayList<Car>(); //available cars
    static ArrayList<Car> rentedCars = new ArrayList<Car>(); //available cars
    static int carCount = 0;
    static Scanner sc = new Scanner(System.in);


    // static List<Car> carss = Arrays.asList(
    //     new Car("tesla"), 
    //     new Car("bmw")
    // );
        //add new cars including daily price for renting
        static void addCar(){ //general list (add, delete, rent out) == available cars
            Scanner sc = new Scanner(System.in);

            System.out.println("What car would you like to add");
            String make = sc.nextLine(); 

            Car car = new Car(make);
            cars.add(car);
            System.out.println("The car "+ car + " was successfully added. The array is now: " + cars);
            sc.close();
        }
    
        static void removeCar(){

            if(cars.size() > 0){
                System.out.println("What car make would you like to delete?");
                System.out.println("The cars available are: " + cars);
                String make = sc.nextLine(); 
                for(Car car: cars){
                    if(make.equals(car.make)){
                        cars.remove(car);
                        return;
                    }
                }
                System.out.println("The car " + make + " doesn't exist in " + cars);

            }
            else{
                System.out.println("There is no cars available to remove.");
            }
        }

        static void viewCars(){
            for (var i=0; i<cars.size(); i++){
                System.out.println();
            }
        }


}

