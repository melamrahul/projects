#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_TEMPLATE_NAME "YOUR_TEMPLATE_NAME"
#define BLYNK_AUTH_TOKEN  "YOUR_BLYNK_AUTH_TOKEN"

#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>

// Replace with your WiFi credentials
//*Note: ESP32 Can able to connect with 2.4G Networks only*
  
char ssid[] = "Your_Hotspot_Name";
char pass[] = "Your_Hotspot_Password";

// Choose your LED pin (built-in is usually GPIO 2 on ESP32)
int ledPin = 2;

void setup()
{
  // Debug console
  Serial.begin(115200);

  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  // Connect to Blynk
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
}

BLYNK_WRITE(V0)  // V0 is the virtual pin you assign in Blynk app (switch widget)
{
  int pinValue = param.asInt(); // Get value from app (0 or 1)
  digitalWrite(ledPin, pinValue);
}

void loop()
{
  Blynk.run();
}
