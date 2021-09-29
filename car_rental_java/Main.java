package carRental;
import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors
import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;





public class Main {
    
      public static void main(String[] args) throws IOException {
        // create file
        File file = new File("cars.txt");
        if (!file.exists()) {
            file.createNewFile();
        }

        FileWriter fileWriter = new FileWriter(file);
        PrintWriter printWriter = new PrintWriter(fileWriter);
            
        // read example 
        Scanner scanner = new Scanner(file);
        while (scanner.hasNext()) {
            System.out.println(scanner.nextLine());
        }
        scanner.close();


        Scanner sc = new Scanner(System.in);

        boolean e = false;
        while(e == false){
            System.out.println("What would you like to do?");
            System.out.println("'view' - view available cars");
            System.out.println("'add' - add a car");
            System.out.println("'del' - delete a car");
            System.out.println("'rent' - rent a car");
            System.out.println("'return' - return a car");

            System.out.println("'exit' - exit the program");
            String input = sc.nextLine();   

            if(input.equals("view")){ //done
                ArrayList<Car> cars2 = Admin.cars;
                if(cars2.size()==0){
                    System.out.println("There are no cars at the moment. Enter 'add' to add more.");
                }
                else{
                    System.out.println(cars2);
                }
            }
            else if(input.equals("add")){//done
                Admin.addCar();
            }

            else if(input.equals("del")){//done
                Admin.removeCar();
            }
            else if(input.equals("rent")){ //done
                Customer.rentCar();
            }
            else if(input.equals("return")){ //done
                Customer.returnCar();
            }
            else if(input.equals("exit")){//done
                e = true;
                //WRITE TO FILE
                printWriter.println("CARS RENTAL LTD.");

                for (Car car: Admin.cars) {           
                    printWriter.println(car + " available");
                }
                for (Car car: Admin.rentedCars) {           
                    printWriter.println(car + " rented");
                }

                // once you are done writing to the file
                printWriter.flush();
                printWriter.close();


                sc.close();
            }
            else{
                System.out.println("The command '" + input + "' is incorrect"); //done
            }

        }

    }
}