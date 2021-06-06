local splashScreen = {}
local HALF = 2
local LINE = 15

function splashScreen:draw()
	local yAxis = love.graphics.getHeight() / 2
	-- printf creates a box around the text so we can center it
	love.graphics.printf('Booting ...', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('Spaceship Shooter v0.1', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('LÖVE2D v' .. love.getVersion(), 0, yAxis, love.graphics.getWidth(), 'center')
end

return splashScreen
