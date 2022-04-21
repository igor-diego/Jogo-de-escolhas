
function respostaUm() {
    var resposta = Number(prompt('Digite sua resposta'))
    while(true) {
        if(resposta == 3) {
            alert('PARABÉNS VOCÊ PASSOU DE FASE!!!')
            location.href = 'Level-2.html'
            break;
        }else if(resposta == 1 || resposta == 2) {
            alert('RESPOSTA ERRADA :( \nGAME OVER')
            location. href= 'GameOver.html'
            break;
        }else {
            alert('Digite apenas 1, 2 ou 3')
            resposta = Number(prompt('Digite sua resposta'))
        }
     }
}


    function respostaDois() {
        var resposta = Number(prompt('Digite sua resposta')) 
            while(true){
                if(resposta == 2) {
                    alert('PARABÉNS VOCÊ PASSOU DE FASE!!!')
                    location.href = 'Level-3.html'
                    break;
                }else if (resposta == 1 || resposta == 3) {
                    alert('RESPOSTA ERRADA :( \nGAME OVER')
                    location.href = 'GameOver.html'
                    break;
                }else {
                    alert('Digite apenas 1 , 2 ou 3')
                    resposta = Number(prompt('Digite sua resposta'))
                }
            }
        
    }


    function respostaTrês(){
        var resposta = Number(prompt('Digite sua resposta')) 
            while(true) {
                if(resposta == 1) {
                    alert('PARABÉNS VOCÊ PASSOU DE FASE!!!')
                    location.href = 'YouWin.html'
                    break;
                }else if(resposta == 2 || resposta == 3) {
                alert('RESPOSTA ERRADA :( \nGAME OVER')
                location.href = 'GameOver.html'
                break;
                }else {
                alert('Digite apenas 1 , 2 ou 3')
                resposta = Number(prompt('Digite sua resposta'))
            }
        }
    }

