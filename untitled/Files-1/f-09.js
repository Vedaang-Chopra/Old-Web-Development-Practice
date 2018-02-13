function Vehicle()
{
    let color;
    let wheels;
    let description;
    this.vehicle=function(){
        color=black;
        wheels=3;
        description="auto";
    }
    this.inputinfo= function(color1,wheels1,description1)
    {
        color=color1;
        wheels=wheels1;
        description=description1;
    }
    this.outputinfo=function(){
        console.log(color);
        console.log(wheels);
        console.log(description);
    }

}

let bike=new Vehicle(vehicle1());
let bike1=new Vehicle(vehicle1());
bike.inputinfo('red',2,"Suzuki Giker");
bike1.inputinfo('blue',2,"Yamaha Fazer");
bike.outputinfo();
bike1.outputinfo();
