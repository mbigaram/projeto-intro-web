//projeto-beatles

//const banda1 = ("The Beatles")

//const 1ºfase = ("1º Fase")

// const album1 = {
//     album: "Please Please Me",
//     ano: 1963,
//     qtde: 14,
//     duracao: 32.45,
//     nCol: true,
//     musicas: [" I Saw Her Standing There", " Misery", " Anna (Go To Him)", " Chains", " Boys", " Ask Me Why", " Please Please Me", " Love Me Do", " P.S. I Love You", " Baby It's You", " Do You Want To Know A Secret", " A Taste Of Honey", " There's A Place", " Twist And Shout"],

// }

// console.log("Primeiro album: " + album1.album.toUpperCase(), "\nQuantidade de músicas: " + album1.qtde, "\nTempo: " + album1.duracao, "\nFaixas: " + album1.musicas.sort())


const album2 = {
    album: "With the Beatles",
    ano: 1963,
    qtde: 14,
    //duracao: 32.24,
    nCol: true,
    musicas: [
        " It Won't Be Long",
        " All I've Got To Do",
        " All My Loving",
        " Don't Bother Me",
        " Little Child",
        " Till There Was You",
        " Please Mr Postman",
        " Roll Over Beethoven",
        " Hold Me Tight",
        " You Really Got A Hold On Me",
        " I Wanna Be Your Man",
        " Devil In Her Heart",
        " Not A Second Time",
        " Money (Thats What I Want)"
    ],

}

console.log("Segundo album: " + album2.album.toUpperCase(), "\nQuantidade de músicas: " + album2.qtde, "\nFaixas: " + album2.musicas.sort())

// const albumC1 = {
//     album: "The Beatles Ft Tony Sheridan - In The Beginning",
//     ano: 1964,
//     qtde: 12,
//     duracao: 36.15,
//     nCol: false,
//     musicas: [" Ain't she Sweet", " Cry For A Shadow", " Let's Dance", " My Bonnie", " Take Out Some Insurance On Me, Baby, What'd I Say", " Sweet Georgia Brown", " When The Saints Go Marching In", " Ruby Baby", " Why", " Nobody's Child", " Ya Ya (Parts 1 & 2)",] 

// }

// console.log("Primeira coletânea: " + albumC1.album.toUpperCase(), "\nQuantidade de músicas: " + albumC1.qtde, "\nTempo: " + albumC1.duracao, "\nFaixas: " + albumC1.musicas.sort())

// const album3 = {
//     album: "A Hard Day's Night",
//     ano: 1964,
//     qtde: 13,
//     duracao: 30.45,
//     nCol: true,
//     musicas: [" A Hard Day's Night", " I Should Have Known Better", " If I Fell", " I'm Happy Just To Dance With You", " And I Love Her", " Tell Me Why", " Can't Buy Me Love", " Any Time At All", " I'll Cry Instead", " Things We Said Today", " When I Get Home", " You Can't Do That", " I'll Be Back"],
//     //qtde3: musicas.length

// }

// console.log("Quarto album: " + album3.album.toUpperCase(), "\nQuantidade de músicas: " + album3.qtde, "\nTempo: " + album3.duracao, "\nFaixas: " + album3.musicas.sort())

// const album4 = {
//     album: "Beatles for Sale",
//     ano: 1964,
//     qtde: 14,
//     duracao: 34.13,
//     nCol: true,
//     musicas: [" No Reply", " I'm A Loser", " Baby's In Black", " Rock And Roll Music", " I'll Follow The Sun", " Mr. Moonlight", " Kansas City  Hey, Hey, Hey, Hey", " Eight Days A Week", " Words Of Love", " Honey Don't", " Every Little Thing", " I Don't Want To Spoil The Party", " What You're Doing", " Everybody's Trying To Be My Baby"],

// }

// console.log("Quarto album: " + album4.album.toUpperCase(), "\nQuantidade de músicas: " +album4.qtde, "\nTempo: " +album4.duracao, "\nFaixas: " +album4.musicas.sort())

// const album5 = {
//     album: "Help!",
//     ano: 1965,
//     qtde: 14,
//     duracao: 34.40,
//     nCol: true,
//     musicas: [" Help!", " The Night Before", " You've Got", " To Hide Your Love", " I Need You", " Another Girl", " You're Going To Lose That Girl", " Ticket To Ride", " Act Naturally", " It's Only Love", " You Like Me Too Much", " Tell Me What You See", " I've Just Seen A Face", " Yesterday", " Dizzy Miss Lizzy"],

// }

// console.log("Quinto album: " + album5.album.toUpperCase(), "\nQuantidade de músicas: " +album5.qtde, "\nTempo: " + album5.duracao, "\nFaixas: " + album5.musicas.sort())

const album6 = {
    album: "Rubber Soul",
    ano: 1966,
    qtde: 14,
    nCol: true,
    musicas: [
        " Drive My Car",
        " Norwegian Wood (This Bird Has Flown)",
        " You Won't See Me",
        " Nowhere Man",
        " Think For Yourself",
        " The Word",
        " Michelle",
        " What Goes On",
        " Girl",
        " I'm Looking Through You",
        " In My Life",
        " Wait",
        " If I Needed Someone",
        " Run For Your Life",
    ],
}

console.log("Quinto album: " + album6.album.toUpperCase(), "\nQuantidade de músicas: " + album6.qtde, "\nTempo: " + album6.duracao, "\nFaixas: " + album6.musicas.sort())

const albumC2 = {
    album: "The Beatles 1962 - 1966",
    ano: 1973,
    qtde: 26,
    nCol: false,
    musicas: [
        " Love Me Do",
        " Please Please Me",
        " From Me to You",
        " She Loves You",
        " I Want to Hold Your Hand",
        " All My Loving",
        " Can't Buy Me Love",
        " A Hard Day's Night",
        " And I Love Her",
        " Eight Days a Week",
        " I Feel Fine",
        " Ticket to Ride",
        " Yesterday",
        " Help",
        " You've Got to Hide Your Love Away",
        " We Can Work it Out",
        " Day Tripper",
        " Drive My Car",
        " Norwegian Wood (This Bird Has Flown)",
        " Nowhere Man",
        " Michelle",
        " In My Life",
        " Girl",
        " Paperback Writer",
        " Eleanor Rigby",
        " Yellow Submarine",
    ],
}

console.log("Vigésima terceira coletânea: " + albumC2.album.toUpperCase(), "\nQuantidade de músicas: " + albumC2.qtde, "\nTempo: " + albumC2.duracao, "\nFaixas: " + albumC2.musicas.sort())

const qtde = (album2.qtde + album6.qtde + albumC2.qtde) / 3

console.log("Média de músicas por albúm: ", qtde.toFixed())

const coletanea = album2.nCol && album6.nCol && albumC2.nCol
console.log("Tem coletãnea? " + coletanea)


const primeiraFase = []

if (album2.nCol === true) {
    primeiraFase.push(album2)

}else {console.log ("O álbum", album2.album, "é uma coletânea")}

if (album6.nCol === true) {
    primeiraFase.push(album6)

}else  {console.log ("O álbum", album6.album, "é uma coletânea")}

if(albumC2.nCol === true) {
    primeiraFase.push(albumC2)       

}else {console.log ("O álbum", albumC2.album, "é uma coletânea")} 





// if (album2.nCol === true) {
//     primeiraFase.push(album2)

//     if (album6.nCol === true) {
//         primeiraFase.push(album6)

//         if (albumC2.nCol === true) {
//             primeiraFase.push(albumC2)

//         } else {
//             console.log("O álbum", albumC2.album, "é uma coletânea")
//         }

//     } else if (albumC2.nCol === true) {
//         primeiraFase.push(albumC2)
//         console.log("O álbum", album6.album, "é uma coletânea")

//     } else {
//         console.log("O álbum", album6.album, "é uma coletânea")
//         console.log("O álbum", albumC2.album, "é uma coletânea")
//     }

// } else if (album6.nCol === true) {
//     primeiraFase.push(album6)
//     console.log("O álbum", album2.album, "é uma coletânea")

//     if (albumC2.nCol === true) {
//         primeiraFase.push(albumC2)

//     } else {
//         console.log("O álbum", albumC2.album, "é uma coletânea")
//     }
// } else if (albumC2.nCol === true) {
//     primeiraFase.push(albumC2)
//     console.log("O álbum", album2.album, "é uma coletânea")
//     console.log("O álbum", album6.album, "é uma coletânea")

// } else {
//     console.log("O álbum", album2.album, "é uma coletânea")
//     console.log("O álbum", album6.album, "é uma coletânea")
//     console.log("O álbum", albumC2.album, "é uma coletânea")
// }

console.log(primeiraFase)
