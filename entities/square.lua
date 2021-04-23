local world = require('world')

-- Square
local square = {}
square.body = love.physics.newBody(world, 200, 200, 'dynamic')
square.body.setMass(square.body, 32)
square.shape = love.physics.newPolygonShape(100, 100, 100, 200, 200, 200, 200, 100)
square.fixture = love.physics.newFixture(square.body, square.shape)
square.fixture:setRestitution(0.75) -- Less than 1 the body will stop bouncing
-- Set fixture ID
square.fixture:setUserData('square')
return square
