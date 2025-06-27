
const int valvulas[] = {22, 23, 24, 25};

void setup() {
  for (int i = 0; i < 4; i++) {
    pinMode(valvulas[i], OUTPUT);
    digitalWrite(valvulas[i], LOW);
  }
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    String comando = Serial.readStringUntil('\n');
    comando.trim();

    if (comando.startsWith("ABRIR")) {
      int porta = comando.substring(5).toInt();
      digitalWrite(porta, HIGH);
    } else if (comando.startsWith("FECHAR")) {
      int porta = comando.substring(6).toInt();
      digitalWrite(porta, LOW);
    }
  }
}
