import { Converters } from "../../Converters.js";

export enum UnitOfMeasure {
	Unknown = 0,
	Ampere = 1,
	Boolean = 2,
	BtuPerHour = 3,
	Celsius = 4,
	Centimeter = 5,
	CubicFeet = 6,
	CubicFeetPerMinute = 7,
	CubicMeter = 8,
	Day = 9,
	Days = 10,
	DeadboltStatus = 11,
	Decibel = 12,
	DecibelA = 13,
	Degree = 14,
	DoorLockAlarm = 15,
	EuropeanMacroseismic = 16,
	Fahrenheit = 17,
	Feet = 18,
	Hour = 19,
	Hours = 20,
	AbsoluteHumidity = 21,
	RelativeHumidity = 22,
	InchesOfMercury = 23,
	InchesPerHour = 24,
	Index = 25,
	Kelvin = 26,
	Keyword = 27,
	Kilogram = 28,
	Kilovolt = 29,
	Kilowatt = 30,
	Kilopascal = 31,
	KilometersPerHour = 32,
	KilowattsPerHour = 33,
	Liedu = 34,
	Liter = 35,
	Lux = 36,
	Mercalli = 37,
	Meter = 38,
	CubicMetersPerHour = 39,
	MPS = 40,
	Milliamp = 41,
	Millisecond = 42,
	Millivolt = 43,
	Minute = 44,
	DurationInMinutes = 45,
	MillimetersPerHour = 46,
	Month = 47,
	MilesPerHour = 48,
	MetersPerSecond = 49,
	Ohm = 50,
	Percent = 51,
	Pound = 52,
	PowerFactor = 53,
	PartsPerMillion = 54,
	PulseCount = 55,
	RawValue = 56,
	Second = 57,
	DurationInSeconds = 58,
	SiemensPerMeter = 59,
	BodyWaveMagnitudeScale = 60,
	RichterScale = 61,
	MomentMagnitudeScale = 62,
	SurfaceWaveMagnitudeScale = 63,
	Shindo = 64,
	SML = 65,
	ThermostatHeatCoolState = 66,
	ThermostatMode = 67,
	ThermostatFanMode = 68,
	USGallon = 69,
	UserNumber = 70,
	UVIndex = 71,
	Volt = 72,
	Watt = 73,
	WattsPerSquareMeter = 74,
	Weekday = 75,
	WindDirectionInDegrees = 76,
	Year = 77,
	OffOn = 78,
	OpenClose = 79,
	ThermostatFanRunState = 80,
	ThermostatFanModeOverride = 81,
	Millimeter = 82,
	Kilometer = 83,
	SecureMode = 84,
	OhmMeter = 85,
	KiloOhm = 86,
	CubicMeterPerCubicMeter = 87,
	WaterActivity = 88,
	RotationsPerMinute = 89,
	Hertz = 90,
	AnglePositionDegreesNorthPole = 91,
	AnglePositionDegreesSouthPole = 92,
	PowerManagementAlarm = 93,
	ApplianceAlarm = 94,
	HomeHealthAlarm = 95,
	VOCLevel = 96,
	BarrierStatus = 97,
	InsteonThermostatMode = 98,
	InsteonThermostatFanMode = 99,
	LevelFrom0To255 = 100,
	DegreeX2 = 101,
	KilowattSecond = 102,
	Dollar = 103,
	Cent = 104,
	Inch = 105,
	MillimetersPerDay = 106,
}

export function toString(this: UnitOfMeasure): keyof typeof UnitOfMeasure {
	return UnitOfMeasure[this] as keyof typeof UnitOfMeasure;
}
export namespace UnitOfMeasure {
	export type ToType<X extends UnitOfMeasure> = X extends UnitOfMeasure.Boolean ? boolean : number;

	export function convertTo<X extends UnitOfMeasure, Y extends UnitOfMeasure>(
		this: X,
		targetUOM: Y,
		value: ToType<Y>
	): ToType<X> {
		const converter = Converters.Standard[this.toString()]?.[targetUOM];
		if (converter) {
			return converter.to(value);
		}
		return value as unknown as ToType<X>;
	}

	export function convertFrom<X extends UnitOfMeasure, Y extends UnitOfMeasure>(
		this: X,
		sourceUOM: Y,
		value: ToType<Y>
	): ToType<X> {
		const converter = Converters.Standard[this.toString()]?.[sourceUOM];
		if (converter) {
			return converter.from(value);
		}
		return value as unknown as ToType<X>;
	}

	
}
