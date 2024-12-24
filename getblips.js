let blips = "";
//let stat = await fetch("https://gatus.edufor.me/api/v1/endpoints/primary-server_edufor-homepage/statuses");
//let statj = await stat.json();
for(let i=0;i<20;i++) {
    if(i%2==0) {
        blips = "<div class=\"blipgood\"></div>" + blips;
    }
    else {
        blips = "<div class=\"blipbad\"></div>" + blips;
    }
}
document.getElementById("blipsbar0").innerHTML = blips;