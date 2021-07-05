local world = require('world')
local constant = require('constant')

return function(img, posX, posY)
	local laser = {
		speed = 500,
		pos = { x = 0, y = 0 },
		dimension = { width = 0, height = 0 }
	}

	laser.img = img
	-- These values are from the XML file of the spritesheet
	laser.quad = love.graphics.newQuad(856, 421, 9, 54, img:getDimensions())

	-- These are the initial laser position, do NOT use later. Use body positon.
	laser.pos.x, laser.pos.y, laser.dimension.width, laser.dimension.height = laser.quad:getViewport()

	laser.body = love.physics.newBody(world, posX, posY, 'dynamic')
	laser.shape = love.physics.newRectangleShape(laser.dimension.width, laser.dimension.height)
	laser.fixture = love.physics.newFixture(laser.body, laser.shape)
	laser.fixture:setUserData(laser)

	laser.move = function(self)
		self.body:setLinearVelocity(0, -self.speed)
	end

	laser.draw = function(self)
		-- Hit box
		love.graphics.polygon('line', self.body:getWorldPoints(self.shape:getPoints()))
		-- Sprite
		love.graphics.draw(
			self.img,
			self.quad,
			self.body:getX(),
			self.body:getY(),
			0,
			1,
			1,
			self.dimension.width / constant.HALF,
			self.dimension.height / constant.HALF
		)
	end

	laser.update = function(self)
		self:move()
	end

	return laser
end
