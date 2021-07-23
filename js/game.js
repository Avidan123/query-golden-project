class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {

            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                //what is this for 
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            
        }
        play(){
            form.hide()

            player1=createSprite(250,200)
            player1.addImage()

            player2=createSprite(250,600)
            player2.addImage()
            players=[player1,player2]

        
        }
        chicken(){
            var chicken = createSprite(1800,random(780),20,20)
        chicken.addImage(chick1)
        
        }
    }
    

