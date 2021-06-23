var artists = [
    "Mustasch",
    "Mustasch",
    "Iron Maiden",
    "In Flames",
    "System of a down",
    "Mustasch",
    "Dir en grey",
    "Rammstein",
    "System of a down",
    "Iron Maiden",
    "Killswitch engage",
    "In Flames",
    "In Flames",
    "In Flames",
    "System of a down",
    "System of a down",
    "Five finger death punch"
] ;
var songs = [
    "Accindent on the black spot",
    "Black city",
    "Blood brothers",
    "Bullet ride",
    "Chop sue",
    "Down in black",
    "The Final",
    "KEINE LUST",
    "Lonely day",
    "Man on the edge",
    "My curse",
    "My sweet shadow",
    "Sounds of a playground fading",
    "Take this life",
    "Toxicity",
    "Violent pornography",
    "Wrong side of heaven"
] ;

for(i=0;i<artists.length;i++) {
    document.getElementById("playlist").innerHTML += "<li>" + artists[i]  + " - " + songs[i] + "</li>";
}


function sök() {
    var elementet = document.getElementById("searchy").value;
    var elementet = elementet.toLowerCase();
    var search_list = [];
    for (i=0; i < artists.length; i++) {
        var artist = artists[i].toLowerCase();
        var song = songs[i].toLowerCase();
        if (artist.includes(elementet) || song.includes(elementet)) {
            var list_list = [];
            list_list.push(artists[i],songs[i]);
            search_list.push(list_list);
        }  
    }
    document.getElementById("playlist").innerHTML ="";
    for (j=0;j< search_list.length;j++) {
        document.getElementById("playlist").innerHTML += "<li>" + search_list[j][0] + " - " + search_list[j][1] + "</li>";
    } 
}

var styles = ["rgb(79, 87, 84)","rgb(186, 136, 233)","rgb(128, 196, 128)","rgb(62, 95, 202)" ];
var fonts = ["10px", "12px", "14px", "16px", "18px", "20px"];

var restyle = document.getElementById("righty");
restyle.style.backgroundColor = styles[3];

var newstyle = document.getElementById("playlist");
newstyle.style.fontSize = fonts[3];