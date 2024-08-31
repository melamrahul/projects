// Database libraries
#include<WiFi.h>                                                
#include<RahulDatabase.h>
/* 
This code was written by Melam Rahul 3/4 B.Tech ECE 322106512060.
This code helps you to Connect to the Database for Controlling the Devices Remotly.
Copy Right ©2024 IST 15:40:12.
All Rights Reserved by Melam Rahul
Install required Library <RahulDatabase.h>
Have any Quaries Contact:
Email: melamrahul8@gmail.com
Note: This Will Work Only for ESP32.
*/

// Database Credentials
#define db_url "****************.firebaseio.com"
#define db_api "****************************"

// WiFi Credentials
#define w_name "Your_Wi-Fi_Name" 
#define w_pass "Your_Wi-Fi_Password"

// Define LED Pin
#define led 2 

// Variable to hold the Firebase value
int bit;                                      

void setup() {
  Serial.begin(115200);
  delay(1000);
  pinMode(led, OUTPUT);                  
  WiFi.begin(w_name, w_pass);                                      
  
  // Try to connect with WiFi
  Serial.print("Connecting to ");
  Serial.print(w_name);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.print("\nConnected to WiFi");
  
  // Start Firebase Connection
  Rahuldb.begin(db_url, db_api);
}

void loop() {
  // Read value from the database
  bit = Rahuldb.getInt("led");                     
  
  // Check the LED state and update accordingly
  if (bit == 1) {
      digitalWrite(led, 1);  // If the value is 1, turn ON the LED
  } else if (bit == 0) { 
      digitalWrite(led, 0);   // If the value is 0, turn OFF the LED
  }
}
