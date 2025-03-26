let blades = 0;
let cameras = 0;
let cloth = 0;
let fuses = 0;
let gears = 0;
let laptops = 0;
let metalFrags = 0;
let hqm = 0;
let pipes = 0;
let propanes = 0;
let rifles = 0;
let scrap = 0;
let semi = 0;
let sewings = 0;
let sheets = 0;
let smgs = 0;
let signs = 0;
let springs = 0;
let ropes = 0;
let tarps = 0;
let techTrashes = 0; 

document.getElementById("blades").value = 0;
document.getElementById("cameras").value = 0;
document.getElementById("fuses").value = 0;
document.getElementById("gears").value = 0;
document.getElementById("laptops").value = 0;
document.getElementById("pipes").value = 0;
document.getElementById("propanes").value = 0;
document.getElementById("rifles").value = 0;
document.getElementById("semis").value = 0;
document.getElementById("sewings").value = 0;
document.getElementById("smgs").value = 0;
document.getElementById("signs").value = 0;
document.getElementById("tarps").value = 0;
document.getElementById("techTrash").value = 0;
document.getElementById("springs").value = 0;
document.getElementById("ropes").value = 0;
document.getElementById("scraps").value = 0;
document.getElementById("metalfrags").value =0;
document.getElementById("hqms").value = 0;
document.getElementById("cloths").value =0;
document.getElementById("rops").value = 0;
document.getElementById("techtrashes").value = 0;
document.getElementById("sheets").value = 0;

document.getElementById("sulfurOre").value = 0;
document.getElementById("hqmOre").value = 0;
document.getElementById("sulfur").value = 0;
document.getElementById("hqm").value = 0;
document.getElementById("metalfragments").value = 0;
document.getElementById("stone").value = 0;
document.getElementById("diesel").value = 0;


document.getElementById("oilRefinery").value = 1;
document.getElementById("furnacecook").value = 1;
document.getElementById("electricCook").value = 1;
document.getElementById("largeCook").value = 1;
document.getElementById("time").value = "0h 0min 0s";
document.getElementById("refineTime").value = "0h 0min 0s";
document.getElementById("cookMetal").value = 0;
document.getElementById("cookSulfur").value = 0;
document.getElementById("cookHqm").value = 0;
document.getElementById("cookWood").value = 0;
document.getElementById("cookedWood").value = 0;

document.getElementById("crude").value = 0;
document.getElementById("refineWood").value = 0;
document.getElementById("refinedWood").value = 0;
document.getElementById("lgf").value = 0;

document.getElementById("gp").value = 0;
document.getElementById("gpSulfur").value = 0;
document.getElementById("gpCharcoal").value = 0;


let recyclerGood = true;
let recyclerTrash = false;
let enableRecycleAgain = true;
let giantExcavator = false;
let resetRecycler = false;

let smallfurnace = true;
let eFurnace = false;
let lFurnace = false;
let resetFurnaces = false;

let resetOil = false;

let isWorkbench = true;
let isMixingTable = false;

function goodRecycler()
{
    recyclerGood = true;
    recyclerTrash = false;
    counter();
}
function trashRecycler()
{
    recyclerGood = false;
    recyclerTrash = true;
    counter();
}
function resetRecyclerer()
{
    resetRecycler = true;
    counter();
}
function counter()
{
    if (resetRecycler)
    {
        blades = document.getElementById("blades").value = 0;
        cameras = document.getElementById("cameras").value = 0;
        fuses=document.getElementById("fuses").value = 0;
        gears=document.getElementById("gears").value = 0;
        laptops=document.getElementById("laptops").value = 0;
        pipes=document.getElementById("pipes").value = 0;
        propanes=document.getElementById("propanes").value = 0;
        rifles=document.getElementById("rifles").value = 0;
        semis=document.getElementById("semis").value = 0;
        sewings=document.getElementById("sewings").value = 0;
        smgs=document.getElementById("smgs").value = 0;
        signs=document.getElementById("signs").value = 0;
        tarps=document.getElementById("tarps").value = 0;
        techTrashes=document.getElementById("techTrash").value = 0;
        springs=document.getElementById("springs").value = 0;
        ropes=document.getElementById("ropes").value = 0;
        scrap=document.getElementById("scraps").value = 0;
        metalFrags=document.getElementById("metalfrags").value =0;
        hqm=document.getElementById("hqms").value = 0;
        cloth=document.getElementById("cloths").value =0;
        ropes=document.getElementById("ropes").value = 0;
        techTrashes=document.getElementById("techtrashes").value = 0;
        sheets = document.getElementById("sheets").value = 0;
        resetRecycler = false;
        enableRecycleAgain = false;
        }
    else
    {
        blades = document.getElementById("blades").value;
        cameras = document.getElementById("cameras").value;
        fuses = document.getElementById("fuses").value;
        gears = document.getElementById("gears").value;
        laptops = document.getElementById("laptops").value;
        pipes = document.getElementById("pipes").value;
        propanes = document.getElementById("propanes").value;
        rifles = document.getElementById("rifles").value;
        semis = document.getElementById("semis").value;
        sewings = document.getElementById("sewings").value;
        smgs = document.getElementById("smgs").value;
        signs = document.getElementById("signs").value;
        tarps = document.getElementById("tarps").value;
        techTrashes = document.getElementById("techTrash").value;
        springs = document.getElementById("springs").value;
        ropes = document.getElementById("ropes").value;
        if(recyclerGood)
        {
            scrap = pipes*6+sheets*9+semis*18+rifles*30+gears*12+fuses*24+blades*2+propanes*1+springs*12+smgs*18+signs*6+techTrashes*24;
            metalFrags = sheets *120 + semis * 90 + laptops*60+gears*15+blades*18+propanes*60;
            hqm = pipes * 2 + sheets*2 + semis*2+rifles*2+cameras*2+laptops*2+springs*2+smgs*2+signs*2+techTrashes*2;
            cloth = tarps*60+sewings*12+ropes*18;
            techTrashes = cameras * 2 + laptops * 3;
            ropes = sewings*1;
        }
        else
        {
            scrap = pipes*4+signs*4+sheets*6+springs*8+gears*8+fuses*16+blades*2+propanes*1+smgs*12+semis*12+rifles*20+techTrashes*16;
            metalFrags = semis*60+sheets*80+blades*12+propanes*40+laptops*40;
            hqm = pipes*1+signs*1+sheets*1+springs*1+semis*2+smgs*2+rifles*2+techTrashes*1+cameras*1+laptops*1;
            cloth = sewings * 8 + ropes*12+tarps*40;
            techTrashes = 1*cameras + 2*laptops;
            ropes = sewings*1;
        }
        
        document.getElementById("scraps").value = scrap;
        document.getElementById("metalfrags").value = metalFrags;
        document.getElementById("hqms").value = hqm;
        document.getElementById("cloths").value = cloth;
        document.getElementById("rops").value = ropes;
        document.getElementById("techtrashes").value = techTrashes;
    
        enableRecycleAgain = true;
    }
}
function furtherRecycle()
{
    if(enableRecycleAgain && (ropes!=0 || techTrashes !=0) && recyclerGood)
    {
        ropes = document.getElementById("rops").value;
        techTrashes = document.getElementById("techtrashes").value
        scrap = pipes*6+sheets*9+semis*18+rifles*30+gears*12+fuses*24+blades*2+propanes*1+springs*12+smgs*18+signs*6+techTrashes*24;
        metalFrags = sheets *120 + semis * 90 + laptops*60+gears*15+blades*18+propanes*60;
        hqm = pipes * 2 + sheets*2 + semis*2+rifles*2+cameras*2+laptops*2+springs*2+smgs*2+signs*2+techTrashes*2;
        cloth = tarps*60+sewings*12+ropes*18;
        ropes = 0;
        techTrashes = 0;
    }
    else if(enableRecycleAgain && (ropes!=0 || techTrashes !=0) && recyclerTrash)
        {
            ropes = document.getElementById("rops").value;
            techTrashes = document.getElementById("techtrashes").value
            scrap = pipes*4+signs*4+sheets*6+springs*8+gears*8+fuses*16+blades*2+propanes*1+smgs*12+semis*12+rifles*20+techTrashes*16;
            metalFrags = semis*60+sheets*80+blades*12+propanes*40+laptops*40;
            hqm = pipes*1+signs*1+sheets*1+springs*1+semis*2+smgs*2+rifles*2+techTrashes*1+cameras*1+laptops*1;
            cloth = sewings * 8 + ropes*12+tarps*40;
            techTrashes = 0;
            ropes = 0;
        }
    else
    {
        document.getElementById("scraps").value = scrap;
        document.getElementById("metalfrags").value = metalFrags;
        document.getElementById("hqms").value = hqm;
        document.getElementById("cloths").value = cloth;
        document.getElementById("rops").value = ropes;
        document.getElementById("techtrashes").value = techTrashes;
    }


    document.getElementById("scraps").value = scrap;
    document.getElementById("metalfrags").value = metalFrags;
    document.getElementById("hqms").value = hqm;
    document.getElementById("cloths").value = cloth;
    document.getElementById("rops").value = ropes;
    document.getElementById("techtrashes").value = techTrashes;

    enableRecycleAgain = false;
}

function quarry()
{
    let diesel = document.getElementById("diesel").value
    if(!giantExcavator)
    {
    document.getElementById("sulfurOre").value = 1000*diesel;
    document.getElementById("hqmOre").value = diesel*50;
    document.getElementById("sulfur").value = 0;
    document.getElementById("hqm").value = 0;
    document.getElementById("metalfragments").value = 0;
    document.getElementById("stone").value = 0;
    }
    if(giantExcavator)
    {
        document.getElementById("sulfur").value = 2000*diesel;
        document.getElementById("hqm").value = diesel*100;
        document.getElementById("sulfurOre").value = 0;
        document.getElementById("hqmOre").value = 0;
        document.getElementById("metalfragments").value = diesel*5000;
        document.getElementById("stone").value = diesel*10000
    }

}

function resetQuarry()
{
    document.getElementById("sulfurOre").value = 0;
    document.getElementById("hqmOre").value = 0;
    document.getElementById("sulfur").value = 0;
    document.getElementById("hqm").value = 0;
    document.getElementById("metalfragments").value = 0;
    document.getElementById("stone").value = 0;
}
function setGiantExcavator()
{
    if(giantExcavator)
        giantExcavator = false;
    else
        giantExcavator = true;
}

function cook()
{
    if(smallfurnace)
        furnace();
    else if(eFurnace)
        electricFurnace();
    else
        largeFurnace();
}
function furnace()
{
    lFurnace = false;
    eFurnace = false;
    smallfurnace= true;
    let seconds =0;
    let minutes = 0;
    let hours =0;
    let metalOre = document.getElementById("cookMetal").value;
    let sulfurOre = document.getElementById("cookSulfur").value;
    let hqmOre = document.getElementById("cookHqm").value;
    let woodNeeded = parseInt(metalOre*1.67+sulfurOre*0.83+hqmOre*3.33);
    document.getElementById("cookWood").value = woodNeeded;
    document.getElementById("cookedWood").value = parseInt(woodNeeded*0.75);
    if(document.getElementById("furnacecook").value>1){
        seconds =parseInt(((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)/document.getElementById("furnacecook").value%60));
        minutes = parseInt((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)/60/document.getElementById("furnacecook").value%60);
        hours = parseInt(((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)/60)/60/document.getElementById("furnacecook").value%60);
    }
    else{
        seconds =parseInt(((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)%60));
        minutes = parseInt((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)/60%60);
        hours = parseInt(((metalOre*3.33+sulfurOre*1.67+hqmOre*6.67)/60)/60%60);
    }
    let hoursString = hours.toString();
    let minutesString= minutes.toString();
    let secondsString = seconds.toString();
    let bigText = hoursString + "h " + minutesString + "min " + secondsString + "s";

    
    document.getElementById("time").value = bigText;
}

function electricFurnace()
{
    eFurnace = true;
    lFurnace = false;
    smallfurnace= false;
    let seconds =0;
    let minutes = 0;
    let hours =0;
    let metalOre = document.getElementById("cookMetal").value;
    let sulfurOre = document.getElementById("cookSulfur").value;
    let hqmOre = document.getElementById("cookHqm").value;
    if(document.getElementById("electricCook").value>1){
        seconds =parseInt((metalOre*2+sulfurOre*1+hqmOre*4)/document.getElementById("electricCook").value%60);
        minutes = parseInt((metalOre*2+sulfurOre*1+hqmOre*4)/60/document.getElementById("electricCook").value%60);
        hours = parseInt(((metalOre*2+sulfurOre*1+hqmOre*4)/60)/60/document.getElementById("electricCook").value%60);
    }
    else{
        seconds =parseInt((metalOre*2+sulfurOre*1+hqmOre*4)%60);
        minutes = parseInt((metalOre*2+sulfurOre*1+hqmOre*4)/60%60);
        hours = parseInt(((metalOre*2+sulfurOre*1+hqmOre*4)/60)/60%60);
    }

    let hoursString = hours.toString();
    let minutesString= minutes.toString();
    let secondsString = seconds.toString();
    let bigText = hoursString + "h " + minutesString + "min " + secondsString + "s";

    
    document.getElementById("time").value = bigText;
}
function largeFurnace()
{
    lFurnace = true;
    eFurnace = false;
    smallfurnace= false;
    let seconds =0;
    let minutes = 0;
    let hours =0;
    let metalOre = document.getElementById("cookMetal").value;
    let sulfurOre = document.getElementById("cookSulfur").value;
    let hqmOre = document.getElementById("cookHqm").value;
    let woodNeeded = parseInt(metalOre*0.33+sulfurOre*0.17+hqmOre*0.67);
    document.getElementById("cookWood").value = woodNeeded;
    document.getElementById("cookedWood").value = parseInt(woodNeeded*0.75);
    if(document.getElementById("largeCook").value>1){
        seconds =parseInt((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)/document.getElementById("largeCook").value%60);
        minutes = parseInt((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)/60/document.getElementById("largeCook").value%60);
        hours = parseInt(((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)/60)/60/document.getElementById("largeCook").value%60);
    }
    else{
        seconds =parseInt((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)%60);
        minutes = parseInt((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)/60%60);
        hours = parseInt(((metalOre*0.67+sulfurOre*0.33+hqmOre*1.33)/60)/60%60);
    }

    let hoursString = hours.toString();
    let minutesString= minutes.toString();
    let secondsString = seconds.toString();
    let bigText = hoursString + "h " + minutesString + "min " + secondsString + "s";

    
    document.getElementById("time").value = bigText;
}


function refine()
{
    let seconds =0;
    let minutes = 0;
    let hours =0;

    let crude = document.getElementById("crude").value;
    let woodNeeded = parseInt(crude*2.22);
    document.getElementById("refineWood").value = woodNeeded;
    document.getElementById("refinedWood").value = parseInt(woodNeeded*0.75);
    document.getElementById("lgf").value = crude*3;

    if(document.getElementById("oilRefinery").value>1){
        seconds =parseInt((crude*2.22)/document.getElementById("oilRefinery").value%60);
        minutes = parseInt((crude*2.22)/60/document.getElementById("oilRefinery").value%60);
        hours = parseInt(((crude*2.22)/60)/60/document.getElementById("oilRefinery").value%60);
    }
    else{
        seconds =parseInt((crude*2.22)%60);
        minutes = parseInt((crude*2.22)/60%60);
        hours = parseInt(((crude*2.22)/60)/60%60);
    }

    let hoursString = hours.toString();
    let minutesString= minutes.toString();
    let secondsString = seconds.toString();
    let bigText = hoursString + "h " + minutesString + "min " + secondsString + "s";

    document.getElementById("refineTime").value = bigText;
}

function sulfur()
{
    if(isWorkbench)
    {
        if(sulfur%20 ==0)
        {
            document.getElementById("gpCharcoal").value = parseInt(document.getElementById("gpSulfur").value*1.5);
            document.getElementById("gp").value = parseInt(document.getElementById("gpSulfur").value/2);
        }
        else
        {
            document.getElementById("gpCharcoal").value = parseInt(document.getElementById("gpSulfur").value*1.5/30)*30;
            document.getElementById("gp").value = parseInt(document.getElementById("gpSulfur").value/2/10)*10;
        }
    }
    else
    {
        document.getElementById("gpCharcoal").value = parseInt(document.getElementById("gpSulfur").value/20%30)*10
        document.getElementById("gp").value = parseInt(document.getElementById("gpSulfur").value/20%10)*10;
    }
}
function gunpowder()
{
    document.getElementById("gpCharcoal").value = parseInt(document.getElementById("gp").value);
    document.getElementById("gpSulfur").value = parseInt(document.getElementById("gp").value*2);
}
function workbench()
{
    isWorkbench = true;
    isMixingTable = false;
}
function mixingtable()
{
    isWorkbench = false;
    isMixingTable =true;
}