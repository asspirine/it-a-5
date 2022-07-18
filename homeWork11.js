//Авиакомпания
class Plane{
    constructor(model,Weight,numOfEngines,flightRange){
        this.model=model
        this.Weight=Weight
        this.numOfEngines=numOfEngines
        this.flightRange=flightRange
    }

    getFlightRange(){
        return this.flightRange
    }

    makeFlight(flightRange,cargoVolume,passengers){
        let canFlight = false;
        if(cargoVolume<=this.cargoVolume && flightRange<=this.flightRange)
            if((passengers&&this.passengerSeats&&this.passengerSeats>=passengers)||(!passengers))
                {
                    console.log(`   ${this.model} flew ${flightRange}km, and transported ${cargoVolume} m^3 of cargo`,passengers?`and ${passengers} passengers`:'')
                    canFlight = true;
                }
            else(console.log(`Cant transportation ${passengers} passenger-s on this plane`))
        else(console.log(`Cant transportation this cargo on this plane`))
        return canFlight;
    }

}


class CargoPlane extends Plane{
    constructor(model,Weight,numOfEngines,flightRange,cargoVolume){
        super(model,Weight,numOfEngines,flightRange)
        this.cargoVolume=cargoVolume
    }

    getCargoWeight(){
        return this.cargoVolume;
    }
}

class PassengerPlane extends CargoPlane{
    constructor(model,Weight,numOfEngines,flightRange,passengerSeats,cargoVolume){
        super(model,Weight,numOfEngines,flightRange,cargoVolume)
        this.passengerSeats=passengerSeats
    }
    
    getPassengerSeats(){
        return this.passengerSeats
    }
}

class MilitaryPlane extends PassengerPlane{
    constructor(model,Weight,numOfEngines,flightRange,passengerSeats,cargoVolume){
        super(model,Weight,numOfEngines,flightRange,passengerSeats,cargoVolume)
    }
}

class AgriculturalPlane extends CargoPlane{
    constructor(model,Weight,numOfEngines,flightRange,cargoVolume){
        super(model,Weight,numOfEngines,flightRange,cargoVolume)
    }
}

class  AviationCompany{
    constructor(){
    }
    myСapital = 0;
    garage = [kingAir250,aircraftEagle];

    buyNewPlane(Plane){
        this.garage.push(Plane)
    }

    completeFlightOrder(plane,flightRange,cargoVolume,passengers){
        if(this.garage.find(myPlanes => myPlanes.model === plane.model))
            {
                if(plane.makeFlight(flightRange,cargoVolume,passengers)){
                    let benefit = this.countBenefitFromFlying(flightRange,cargoVolume,passengers)
                    this.makeProfit(benefit)
                    console.log(`   For this transportation you have earned ${benefit}$`)
                }
            }
        else
            console.log(`there is no such plane in your garage`)
    }

    countBenefitFromFlying(flightRange,cargoVolume,passengers=0){
        let benefit = (flightRange*cargoVolume)*0.15+(flightRange*passengers)*0.3
        if(flightRange>0&&(cargoVolume>0||passengers>0))
        return benefit
    }
    
    makeProfit(gain){
        this.myСapital += gain
    }

    getCommonLoadCapacity(){
        let commonLoadCapacity = 0
        this.garage.forEach(plane => commonLoadCapacity+=plane.cargoVolume)
        console.log(`-The total Load capacity (total luggage space) of all aircraft in your company is ${commonLoadCapacity}`)
    }

    getCommonPassengerSeats(){
        let commonPassengerSeats = 0
        this.garage.forEach(plane =>plane.passengerSeats?commonPassengerSeats+=plane.passengerSeats:{})
        console.log(`-The total capacity (number of passenger seats) of all aircraft in your company is ${commonPassengerSeats}`) 
    }

    sortingGarageByflightRange(sortingAsk=true){
        this.garage.sort((planeA,palneB) => planeA.flightRange-palneB.flightRange)
        if(!sortingAsk)this.garage.reverse()
        console.log(`All aircrafts in ypur garage been sorting ${sortingAsk?'ask':'desk'} by flightRange, and now your garage look like this:`)
        console.log(this.garage)
    }

    findPlane(flightRange,cargoVolume,passengers){
        let result = []
        result = this.garage

        if (typeof flightRange==='object'){
          result = result.filter(myPlane =>
            myPlane.flightRange >= flightRange[0] &&
            myPlane.flightRange <= flightRange[1]
        )}
        else  result = result.filter(myPlane => myPlane.flightRange >= flightRange)
        
        if (typeof cargoVolume==='object'){
          result = result.filter(myPlane =>
            myPlane.cargoVolume >= cargoVolume[0] &&
            myPlane.cargoVolume <= cargoVolume[1]
        )}
        else  result = result.filter(myPlane => myPlane.cargoVolume >= cargoVolume)
      
        if(passengers){
            if (typeof passengers==='object'){
                result = result.filter(myPlane =>
                    myPlane.passengerSeats >= passengers[0] &&
                    myPlane.passengerSeats <= passengers[1]
            )}
            else result = result.filter(myPlane => myPlane.passengerSeats >= passengers)
        }
        console.log(` -The following aircraft were found under the specified conditions:`)
        console.log(result)
      }

    
}

kingAir250 = new PassengerPlane('ka250',3670,1,3185,9,3);
gulfstreamG700 = new PassengerPlane('G700',31807,2,7890,19,6);
boeingBBJ777X = new PassengerPlane('BBJ777X',47930,2,8418,25,10);
boeing737 = new CargoPlane('B737',44676,2,5980,105);
boeing757 = new CargoPlane('B757',49233,4,7902,187);
airbus300 = new CargoPlane('A300',28900,2,5032,178);
il76md = new MilitaryPlane('IL-76',110230,4,6800,126,321);
tu142 = new MilitaryPlane('TU-142',93891,4,13500,10,240);
aircraftEagle = new AgriculturalPlane('Eagle-300',1200,1,290,2);

myCompany = new AviationCompany();
myCompany.buyNewPlane(il76md)
myCompany.buyNewPlane(tu142)

//выполение условий из задания:
myCompany.getCommonPassengerSeats()
myCompany.getCommonLoadCapacity()
myCompany.sortingGarageByflightRange()
myCompany.findPlane([0,8000],[0,300],[0,10])

myCompany.completeFlightOrder(kingAir250,3180,3,9)