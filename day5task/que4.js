//write a class to calculate the uber price.

class Uberprice {
    constructor(carname,kmstravelled, priceperkm) {
        this.carname=carname
        this.kmstravelled= kmstravelled
        this.priceperkm= priceperkm
    }
        getUberPrice() {
            console.log( "your Uberfare is: RS.", +(this.kmstravelled*this.priceperkm));
        } 
    
}
const Uberfare = new Uberprice("suzuki swift", 50, 15);
console.log(Uberfare);
Uberfare.getUberPrice();