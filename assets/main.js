const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const h2 = document.querySelector('.div2>h2')
const ul = document.querySelector('.div2>ul')
const span1 = document.querySelector('.div1>span')
const div21 = document.querySelector('.div2-1')
const div3 = document.querySelector('.div3')



let turn = 0
const data =[
    {
        id : 1,
        question : 'A life story of a person written by himself –',
        answer:[' Autobiography.','Catastrophe.',' Climax.',' Biography.',]  ,
        status :0
    },
    {
        id : 2,
        question : 'One who talks while asleep is called',
        answer:[' Somnambulist.',' Somniloquist.',' Somniferous.','Sleeptalker.',]  ,
        status :1
    },
    {
        id : 3,
        question : 'One who believes in fate –',
        answer:[' Narcissist.','Feminist.','Fatalist.','Numismatist.',]  ,
        status :2
    },
    {
        id : 4,
        question : 'Policeman riding on motorcycle as gaurd to a VIP',
        answer:[' Outriders',' Servants','Commandos','Attendants',]  ,
        status :0
    },
    {
        id : 5,
        question : 'Iconoclast is one who –',
        answer:['figure of the history','figure of the society',' A group of icons.',' Destroys images.',]  ,
        status :3
    },
    {
        id : 6,
        question : 'One who collects coins –',
        answer:['Collector.',' Numismatist.','Calligrapher.','Narcissist.',]  ,
        status :1
    },
    {
        id : 7,
        question : '__ leads an austere life',
        answer:[' An apostate.','An atheist.',' An ascetic.','A bohemian.',]  ,
        status :2
    },
    {
        id : 8,
        question : 'One who talks of his own achievements',
        answer:['Egotist.','Boastful.',' proud.',' Egomaniac.',]  ,
        status :0
    },
    {
        id : 9,
        question : 'A misanthrope who dislike woman in particular is called',
        answer:[' Misogamist.',' Misologist.','Women-hater.',' Misogynist.',]  ,
        status :3
    },
    {
        id : 10,
        question : 'One who considers the happiness and well being of others',
        answer:['Aesthete.',' Altruist.','Alchemist.','Atheist.',]  ,
        status :1
    }



]

div1.addEventListener('click' ,()=>{
    div1.classList.add('add1')
    span1.innerHTML = ''
    div2.classList.add('add2')
        const liMaker = document.querySelectorAll('ul>li')
            setTimeout(() => {
                liMaker[data[turn - 1].status].style.background = 'green'
            }, 60000);   
})

let btn = document.createElement('button')
        btn.innerHTML= 'next question'
        div21.appendChild(btn)
        btn.classList.add('add5')
        const btnMaker = document.querySelector('.add5')
        btn.setAttribute('onclick' , 'myBtn(this)')
        function myBtn(s) {
            

                 let setin = setInterval(questMaker , 2000) 
                 setTimeout(() => {
                    clearInterval(setin)
                    questMaker()
                 }, 500);
            
        }
        

questMaker()

function questMaker() {
     
    if(turn<data.length){
        h2.innerHTML = data[turn].id +  ' : '  +  data[turn].question
        ul.innerHTML = ''
        h2.classList.add('add3')
        data[turn].answer.map((val)=>{
            let li = document.createElement('li')
            li.innerHTML = val
            ul.appendChild(li)
            li.classList.add('add4')
            let x = new Date()
            
            
              
        })

        
        
        
        turn++
    }else{
        div3.classList.add('add6')
        div2.classList.remove('add2')

        

    }
    const liMaker = document.querySelectorAll('ul>li')
    liMaker.forEach((val , i)=> {
        if(data[turn-1].id != 1){
            setTimeout(() => {
                liMaker[data[turn - 1].status].style.background = 'green'
            }, 60000);
        }   
        val.addEventListener('click' , (e)=>{
            if(i == data[turn - 1].status){
                
                
                val.style.background = 'green'
            }else{
                val.style.background = 'red'
                liMaker[data[turn - 1].status].style.background = 'green'
            }
        })

    });



}

