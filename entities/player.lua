local world = require('world')
local constant = require('constant')

-- Player
return function(img)
	local player

	player.img = img
	-- The values are from the XML file of the spritesheet
	player.quad = love.graphics.newQuad(211, 941, 99, 75, player.img:getDimensions())

	player.pos.x, player.pos.y, player.dimension.width, player.dimension.height = player.quad:getViewport()
	player.pos.x = (love.graphics.getWidth() / constant.HALF) - (player.dimension.width / constant.HALF)
	player.pos.y = (love.graphics.getHeight() * constant.PLAYER_Y_POS) - (player.dimension.height / constant.HALF)

	player.body = love.physics.newBody(world, 200, 200, 'dynamic')
	player.shape = love.physics.newPolygonShape(100, 100, 100, 200, 200, 200, 200, 100)
	player.fixture = love.physics.newFixture(player.body, player.shape)

	-- Set fixture ID
	player.fixture:setUserData(player)

	player.draw = function(self)
		love.graphics.draw(self.img, self.quad, self.pos.x, self.pos.y, 0, 1, 1)
	end

	return player
end
