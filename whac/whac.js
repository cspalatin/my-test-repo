let timer = 20;
let score = 0;
let randomKill
let randomBaby
let username = prompt("What's your handle, partner?")
prompt("On a scale of 1 to 10, how scared are you???")
alert("YOU ARE NOT ADEQUATLEY SCARED!!!!")
alert(` 
       Click on the hole when you see the red mole
       They're fast little buggers
       Click as many times as you can
       And may God have mercy on your soul`)
alert(`GAME ON!!!!!!!`)       
$('#user').text(username)

let interval = setInterval(function() {
    let counter = $('#countdown').text()  
    $('#countdown').text(Number(counter) - 1) 
        if (Number(counter) === 0) {
            $('#countdown').text(0)
            $('.hole .mole').removeClass('mole')
            clearInterval(interval)
        } 
        function clearKills() {
            if (Number(counter) === 0) {
                $('.hole').removeClass('mole'),
                alert(`HIGH SCORES
                    Kanye West...........93561598615
                    Bill Clinton............88356035319
                    Michael Ian Black..34134386830
                    .
                    .
                    .
                    you.......................nice try buddy`)
            } 
        }    
    killTime()   
    clearKills()  
    }, 1000)

function killTime() {
    randomKill = Math.floor(Math.random() * 19);
    hideKills();
    $(`#${randomKill}`).addClass('mole')
}

$('.hole').on('click', function() {
    if ($(this).hasClass('mole')) {
        score++
        $('#score').html(Number(score))  
    }
})

function hideKills() {
    for (let i = 0; i < 19; i++) {
        $(`#${i}`).removeClass('mole')
    }
}
function clearKills() {
    if (Number(counter) === 0) {
        $('.hole .mole').removeClass('mole')
    }     
}
