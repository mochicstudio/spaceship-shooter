local Timer = require('libs/hump/timer')
local splashScreen = {}
local HALF = 2
local LINE = 15
local MOCHIC_STUDIO_DATA
local MOCHIC_STUDIO_IMAGE = {
	image = {},
	pos = {
		x = 0,
		y = 0
	}
}
local MOCHIC_STUDIO_TEXT = {
	text = 'Mochic Studio',
	pos = {
		x = 0,
		y = 0
	}
}

function splashScreen:init()
	MOCHIC_STUDIO_DATA = love.image.newImageData('sprites/mochicstudio.png')
	MOCHIC_STUDIO_IMAGE.image = love.graphics.newImage(MOCHIC_STUDIO_DATA)

	MOCHIC_STUDIO_IMAGE.pos.x = love.graphics.getWidth() / HALF - MOCHIC_STUDIO_IMAGE.image:getWidth() / HALF
	MOCHIC_STUDIO_IMAGE.pos.y = -1 * MOCHIC_STUDIO_IMAGE.image:getHeight()

	MOCHIC_STUDIO_TEXT.pos.y = love.graphics.getHeight()

	Timer.tween(
		2,
		MOCHIC_STUDIO_IMAGE,
		{ pos = {y = love.graphics.getHeight() / HALF - MOCHIC_STUDIO_IMAGE.image:getHeight() / HALF} },
		'bounce'
	)

	Timer.tween(
		2,
		MOCHIC_STUDIO_TEXT,
		{ pos = {y = love.graphics.getHeight() / HALF + MOCHIC_STUDIO_IMAGE.image:getHeight() / HALF} },
		'bounce'
	)
end

function splashScreen:update(dt)
	Timer.update(dt)
end

function splashScreen:draw()
	local yAxis = 10 -- love.graphics.getHeight() / HALF
	-- printf creates a box around the text so we can center it
	love.graphics.printf('Booting ...', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('Spaceship Shooter v0.1', 0, yAxis, love.graphics.getWidth(), 'center')
	yAxis = yAxis + LINE
	love.graphics.printf('LÖVE2D v' .. love.getVersion(), 0, yAxis, love.graphics.getWidth(), 'center')

	love.graphics.draw(
		MOCHIC_STUDIO_IMAGE.image,
		MOCHIC_STUDIO_IMAGE.pos.x,
		MOCHIC_STUDIO_IMAGE.pos.y
	)

	love.graphics.printf(
		MOCHIC_STUDIO_TEXT.text,
		MOCHIC_STUDIO_TEXT.pos.x,
		MOCHIC_STUDIO_TEXT.pos.y,
		love.graphics.getWidth(),
		'center'
	)
end

return splashScreen
