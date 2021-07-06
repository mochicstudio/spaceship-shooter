local world = require('world')
local constant = require('constant')

return function(posY)
	local boundary = {}

	boundary.body = love.physics.newBody(world, love.graphics.getWidth() / constant.HALF, posY, 'static')
	boundary.shape = love.physics.newRectangleShape(love.graphics.getWidth(), 1)
	boundary.fixture = love.physics.newFixture(boundary.body, boundary.shape)
	boundary.fixture:setUserData(boundary)

	-- As for boundaries we won't need to write explicitlly to draw
	-- the entity because is out of the screen game but for code convention
	-- we still write the draw function.
	boundary.draw = function(self)
	end

	return boundary
end
