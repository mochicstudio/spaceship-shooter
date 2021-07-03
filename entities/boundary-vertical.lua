local world = require('world')
local constant = require('constant')

return function(posX)
	local boundary = {}

	boundary.body = love.physics.newBody(world, posX, love.graphics.getHeight() / constant.HALF, 'static')
	boundary.shape = love.physics.newRectangleShape(1, love.graphics.getHeight())
	boundary.fixture = love.physics.newFixture(boundary.body, boundary.shape)
	boundary.fixture:setUserData(boundary)

	-- As for boundaries we won't need to write explicitlly to draw
	-- the entity because is out of the screen game but for code convention
	-- we still write the draw function.
	boundary.draw = function(self)
	end

	return boundary
end
