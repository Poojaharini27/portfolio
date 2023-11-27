var tlinks = document.getElementsByClassName("tablinks");
var tcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname){
    for(tlink of tlinks) {
        tlink.classList.remove("activelink");
    }
    for(tcontent of tcontents){
        tcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

