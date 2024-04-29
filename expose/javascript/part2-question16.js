let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(var key in statistics){
    if((key[0]) === 'r'){
        console.log(statistics[key]);
    }
    else{
        if((statistics[key]) % 2 !== 0){
            console.log(statistics[key]);
        }
    }
}