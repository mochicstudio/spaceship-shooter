local Timer = require('libs/hump/timer')
local splashScreen = {}
local HALF = 2
local LINE = 15
local MOCHIC_STUDIO_DATA
local MOCHIC_STUDIO_IMAGE
local COLOR

function splashScreen:init()
	COLOR = {0*255, 0*255, 0*255, 1}
	Timer.tween(10, COLOR, {1*255, 1*255, 1*255, 1}, 'in-out-quad')

	MOCHIC_STUDIO_DATA = love.image.newImageData('sprites/mochicstudio.png')
	MOCHIC_STUDIO_IMAGE = love.graphics.newImage(MOCHIC_STUDIO_DATA)

	print(MOCHIC_STUDIO_IMAGE:getWidth())
	print(MOCHIC_STUDIO_IMAGE:getHeight())
end

function splashScreen:update(dt)
	Timer.update(dt)
end

function splashScreen:draw()
	love.graphics.setBackgroundColor(COLOR)
	love.graphics.draw(MOCHIC_STUDIO_IMAGE,10,10)

	local yAxis = love.graphics.getHeight() / 2
	-- printf creates a box around the text so we can center it
	love.graphics.printf('Booting ...', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('Spaceship Shooter v0.1', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('LÖVE2D v' .. love.getVersion(), 0, yAxis, love.graphics.getWidth(), 'center')
end

return splashScreen
