/**
 * Wh
 */
input.onButtonPressed(Button.A, function () {
    if (PadleA.get(LedSpriteProperty.X) > 0) {
        PadleA.change(LedSpriteProperty.X, -1)
        PadleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PadleA.get(LedSpriteProperty.X) < 3) {
        PadleA.change(LedSpriteProperty.X, 1)
        PadleB.change(LedSpriteProperty.X, 1)
    }
})
let PadleB: game.LedSprite = null
let PadleA: game.LedSprite = null
PadleA = game.createSprite(2, 4)
PadleB = game.createSprite(3, 4)
let Ball = game.createSprite(randint(0, 4), 0)
let DirectionY = 1
let DirectionX = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    Ball.change(LedSpriteProperty.X, DirectionX)
    Ball.change(LedSpriteProperty.Y, DirectionY)
    if (Ball.isTouching(PadleA) || Ball.isTouching(PadleB)) {
        Ball.change(LedSpriteProperty.X, DirectionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        DirectionY = -1
        DirectionX = randint(-1, 1)
    } else {
        if (Ball.get(LedSpriteProperty.Y) <= 0) {
            DirectionY = 1
            DirectionX = randint(-1, 1)
        } else if (Ball.get(LedSpriteProperty.Y) >= 4) {
            Ball.set(LedSpriteProperty.X, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (Ball.get(LedSpriteProperty.X) <= 0) {
            DirectionX = 1
        } else if (Ball.get(LedSpriteProperty.X) >= 4) {
            DirectionX = -1
        }
        basic.pause(500)
    }
})
