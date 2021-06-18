input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
    while (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        music.playMelody("C5 D A D C5 A C5 B ", 200)
        wuKong.setServoAngel(wuKong.ServoList.S7, 173)
        basic.pause(2000)
        wuKong.setServoAngel(wuKong.ServoList.S7, 4)
        basic.pause(2000)
        wuKong.setLightMode(wuKong.LightMode.OFF)
    }
    while (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        wuKong.setServoAngel(wuKong.ServoList.S6, 180)
        basic.pause(2000)
        wuKong.setServoAngel(wuKong.ServoList.S6, 0)
    }
    while (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
        wuKong.lightIntensity(55)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        basic.pause(2000)
        wuKong.stopMotor(wuKong.MotorList.M1)
    }
    while (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
        basic.pause(1000)
        wuKong.stopMotor(wuKong.MotorList.M2)
        basic.pause(1000)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
        basic.pause(1000)
        wuKong.stopMotor(wuKong.MotorList.M2)
    }
})
basic.forever(function () {
    while (Environment.PIR(DigitalPin.P2)) {
        wuKong.setServoAngel(wuKong.ServoList.S5, 151)
        basic.pause(5000)
        wuKong.setServoAngel(wuKong.ServoList.S5, 0)
    }
})
