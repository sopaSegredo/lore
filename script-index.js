let enigmas = [
    {
        enigma: "Isso é só o começo",
        senha: "issoesoocomeço"
    },
    {
        enigma: "- ..- -.. --- --.- ..- . -. --- ... ...- .. ...- . -- --- ...",
        senha: "tudoquenosvivemos"
    },
    {
        enigma: "ainda vamos viver muito mais",
        senha: "aindavamosvivermuitomais"
    },
    {
        enigma: "Ela escondeu a minha pipoca",
        senha: "pipocadoce"
    },
    {
        enigma: "O errado pode tambem estar certo",
        senha: "camarelomermelhopicocaafanalbetojerimbelalebisca"
    },
    {
        enigma: "22/01/23",
        senha: "00"
    },
    {
        enigma: "T2EP3-37:52",
        senha: "vamoscasar"
    },
    {
        enigma: "Primeira Segunda e Terceira vez",
        senha: "271204011801"
    },
    {
        enigma: "Pra que assistir o um?",
        senha: "HARRYPOTTER2"
    },
    {
        enigma: "O melhor da magia",
        senha: "HARRYPOTTER"
    },
    {
        enigma: "01100101 01101111 00100000 00100000 01101111 01101001 00100000 01101000 01111001 01101100 01110101 01100101 01110111 01110100 00100000 01110110 01100001 01111001",
        senha: "TALORSWIFT"
    },
    {
        enigma: '<img src="caleidoscópio.png" alt="">',
        senha: "caleidoscópio"
    },
    {
        enigma: '<audio controls><source src="marryYou-C.mp3" type="audio/mp3"></audio>',
        senha: "marryyou"
    },
    {
        enigma: "R DPRU, LVVR WH PDQWHP. H FRPR PLQJDX GH DYHLD",
        senha: "BROOKLYN99"
    }
]

let enigmaElement = document.querySelector("#enigma") 
let text = document.querySelector("#text-index")
let btn = document.querySelector("#btn-index")
let body = document.querySelector("body")

let id = 0


if(id == 0){
    enigmaElement.classList.add("enigma-1")
}

enigmaElement.innerHTML = enigmas[id].enigma


btn.addEventListener("click",()=>{

    
    if(id == enigmas.length - 1){
        body.remove()
    }else{

        if(text.value == enigmas[id].senha){
            
            id += 1
            enigmaElement.innerHTML = enigmas[id].enigma
            
        }else{
            alert("ERROU!")
        }
        
        if(id == 2){
            body.classList.add("body-3")
            enigmaElement.classList.add("enigma-3") 
            
        }if(id == 0){

        }
        else{
            enigmaElement.classList.value = "frase"
            body.classList.value = ""
        }
    }
        

    text.value = ""
})