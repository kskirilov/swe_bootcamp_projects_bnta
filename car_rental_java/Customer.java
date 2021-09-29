package carRental;
import java.util.Scanner;

public class Customer {
    static Scanner sc = new Scanner(System.in);

    static void rentCar(){
        if(Admin.cars.size() > 0){
            System.out.println("The available cars to rent are" + Admin.cars);
            System.out.println("Which car would you like to rent?");
            String input = sc.nextLine(); 

            for(Car car: Admin.cars){
                if(input.equals(car.make)){
                    Admin.cars.remove(car);
                    Admin.rentedCars.add(car);
                    return;
                }
            }
        }
        else{
            System.out.println("The array is empty");
            return;
        }
        System.out.println("The rentedCarsArray is now: " + Admin.rentedCars);
    }

    static void returnCar(){
        if(Admin.rentedCars.size() > 0){
            System.out.println("The presently rented cars are" + Admin.rentedCars);
            System.out.println("Which car would you like to return?");
            String input = sc.nextLine(); 
            
            for(Car car: Admin.rentedCars){
                if(input.equals(car.make)){
                    Admin.cars.add(car);
                    Admin.rentedCars.remove(car);
                    return;
                }
            }
        }
        else{
            System.out.println("The array is empty");
            return;
        }
        System.out.println("The available cars are now: " + Admin.cars);
        }
    }
