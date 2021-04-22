local world = require('world')

-- Ground
local ground = {}
ground.body = love.physics.newBody(world, 200, 500, 'static')
ground.shape = love.physics.newPolygonShape(0, 0, 0, 20, 400, 20, 400, 0)
ground.fixture = love.physics.newFixture(ground.body, ground.shape)
-- Set fixture ID
ground.fixture:setUserData('ground')
return ground
