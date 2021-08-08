function animalCount(miles){
    const animalDensityFirst10PerMileS = 10;
    const animalDensitySecond10PerMileS = 50;
    const animalDensityRestPerMileS = 100;
    if(miles <= 10){      
        const count = miles * animalDensityFirst10PerMileS;
        return count;
    }
    else if(miles <= 20){
        const firstDenseAnimal = 10 * animalDensityFirst10PerMileS;
        const retsMiles = miles - 10;
        const secondDenseAnimal = retsMiles * animalDensitySecond10PerMileS;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal;
        return totalAnimals;
    }
    else{
        const firstDenseAnimal = 10 * animalDensityFirst10PerMileS; 
        const secondDenseAnimal = 10 * animalDensitySecond10PerMileS;
        const retsMiles = miles - 20;
        const restDenseAnimal = retsMiles * animalDensityRestPerMileS;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal + restDenseAnimal;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);