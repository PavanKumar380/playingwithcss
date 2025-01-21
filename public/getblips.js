async function sendblips() {
    let blips ="";
    let stat = await fetch("https://gatus.edufor.me/api/v1/endpoints/primary-server_edufor-homepage/statuses");
    let statj = await stat.json();
    for(let i=0;i<20;i++) {
        if(statj["results"][i]["success"]) {
            blips = "<div class=\"mx-px w-2 h-6 float-right bg-green-500 rounded-md transition-all hover:scale-150 group\"><span class=\"absolute right-1 bottom-5 w-auto p-2 m-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100\">This means it worked.</span></div>" + blips;
        }
        else {
            blips = "<div class=\"mx-px w-2 h-6 float-right bg-orange-500 rounded-md transition-all hover:scale-150 group\"><span class=\"absolute right-1 bottom-5 w-auto p-2 m-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100\">This means it worked.</span></div>" + blips;
        }
    }
    document.getElementById("blipsbar0").innerHTML = blips;
}
sendblips();