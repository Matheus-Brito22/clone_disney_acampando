document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
    
            const abaAlvo = botao.target.dataset.tabButton;
    
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.remove('--is-active')
           
            botaoAtivo();
            botao.target.classList.add('others__button--is-active')
            
        })
    }

   /* 
        teste

   for(let i = 0; i < sugestoes.length; i++){

        sugestoes[i].addEventListener('click', function(seila){

            const sugestaoAlvo = seila.target.dataset.tabButton;
            const proximoSugestao = document.querySelector(`[data-tab-id=${sugestaoAlvo}]`);

            proximo();
            proximoSugestao.classList.remove('others__sugestoes__list--is-active');
        })
    }*/
});


    function botaoAtivo(){  

    const buttons = document.querySelectorAll('[data-tab-button]');

    for( let i = 0; i < buttons.length; i++)
    {
       buttons[i].classList.remove('others__button--is-active')
    }
   }
   
   function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i <tabsContainer.length; i++){
        tabsContainer[i].classList.add('--is-active')
    }
   }

  /* 
  
  teste
  
  function proximo(){
    const sugestoes = document.querySelectorAll('[data-tab-ola]');

    for(let i =0; i < sugestoes.length; i++){
         sugestoes[i].classList.add('others__sugestoes__list--is-active')
    }
   }*/
