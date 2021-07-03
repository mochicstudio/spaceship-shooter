local world = require('world')
local constant = require('constant')
local input = require('input')

-- Player
return function(img)
	local player = {
		speed = 600,
		pos = { x = 0, y = 0 },
		dimension = { width = 0, height = 0 }
		-- We need to set these default tables or lua gets picky
	}

	player.img = img
	-- The values are from the XML file of the spritesheet
	player.quad = love.graphics.newQuad(211, 941, 99, 75, player.img:getDimensions())

	-- These are the initial player position, do NOT use later. Use body positon.
	player.pos.x, player.pos.y, player.dimension.width, player.dimension.height = player.quad:getViewport()
	player.pos.x = (love.graphics.getWidth() / constant.HALF) - (player.dimension.width / constant.HALF)
	player.pos.y = (love.graphics.getHeight() * constant.PLAYER_POS_Y) - (player.dimension.height / constant.HALF)

	player.body = love.physics.newBody(world, player.pos.x, player.pos.y, 'dynamic')
	player.body:setMass(100)
	player.shape = love.physics.newRectangleShape(player.dimension.width, player.dimension.height)
	player.fixture = love.physics.newFixture(player.body, player.shape)

	-- Set fixture ID
	player.fixture:setUserData(player)

	player.draw = function(self)
		love.graphics.rectangle('line', self.body:getX(), self.body:getY(), self.dimension.width, self.dimension.height)
		love.graphics.draw(self.img, self.quad, self.body:getX(), self.body:getY(), 0, 1, 1)
	end

	player.update = function(self)
		-- Don't move if both keys are been pressed
		if input.buttonLeft and input.buttonRight then
			return
		end

		-- Move left or right
		if input.buttonLeft then
			self.body:setLinearVelocity(-self.speed, 0)
		elseif input.buttonRight then
			self.body:setLinearVelocity(self.speed, 0)
		else
			self.body:setLinearVelocity(0, 0)
		end
	end

	return player
end
