controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Rock.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let Rock: Sprite = null
let randomSprite: Sprite = null
randomSprite = sprites.create(img`
. . . . . e e e e e e . . . . . 
. . . . e e e e e e e e . . . . 
. . e e e e e e e e e e e e . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 2 3 3 3 3 2 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 2 2 3 3 3 3 3 3 . 
. 3 3 3 2 3 3 3 3 3 3 2 3 3 3 . 
. . 3 3 3 2 2 2 2 2 2 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
randomSprite.setPosition(80, 60)
Rock = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e f f f f f f f e . . . . 
. . e f f f f f f f f f e . . . 
. . e f f f f f f f f f e . . . 
. . e f f e f f f e f f e . . . 
. . e f f f f f f f f f e . . . 
. . e f f f f f f f f f e . . . 
. . e f f e e e e e f f e . . . 
. . e f f f f f f f f f e . . . 
. . . e f f f f f f f e . . . . 
. . . . e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.splash("This is my rocky game")
Rock.setPosition(0, 0)
forever(function () {
    if (randomSprite.overlapsWith(Rock)) {
        game.over(false, effects.confetti)
    }
})
