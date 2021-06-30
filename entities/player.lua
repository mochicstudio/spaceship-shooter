local world = require('world')

-- Player
return function(posX, posY)
	local player = {}

	player.body = love.physics.newBody(world, 200, 200, 'dynamic')
	player.body.setMass(player.body, 32)
	player.shape = love.physics.newPolygonShape(100, 100, 100, 200, 200, 200, 200, 100)
	player.fixture = love.physics.newFixture(player.body, player.shape)
	player.fixture:setRestitution(0.75) -- Less than 1 the body will stop bouncing

	-- Set fixture ID
	player.fixture:setUserData(player)

	player.load = function(self)
	end

	player.draw = function(self)
	end

	return player
end
