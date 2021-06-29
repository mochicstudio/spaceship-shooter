local Gamestate = require('libs/hump/gamestate')
local game = require('states/game')
local Timer = require('libs/hump/timer')
local splashScreen = {}
local mochicStudioData
local mochicStudio = {
	image = {},
	pos = {
		x = 0,
		y = 0
	}
}
local mochicStudioText = {
	text = 'Mochic Studio',
	pos = {
		x = 0,
		y = 0
	}
}

local HALF = 2
local LINE = 15

function splashScreen:init()
	mochicStudioData = love.image.newImageData('assets/gfx/mochicstudio.png')
	mochicStudio.image = love.graphics.newImage(mochicStudioData)

	mochicStudio.pos.x = love.graphics.getWidth() / HALF - mochicStudio.image:getWidth() / HALF
	mochicStudio.pos.y = -1 * mochicStudio.image:getHeight()

	mochicStudioText.pos.y = love.graphics.getHeight()

	Timer.tween(
		2,
		mochicStudio,
		{ pos = {y = love.graphics.getHeight() / HALF - mochicStudio.image:getHeight() / HALF} },
		'bounce'
	)

	Timer.tween(
		2,
		mochicStudioText,
		{ pos = {y = love.graphics.getHeight() / HALF + mochicStudio.image:getHeight() / HALF} },
		'bounce'
	)

	-- Switch to game after the tweens are done executing
	Timer.after(3, function(func) Gamestate.switch(game) end)
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
		mochicStudio.image,
		mochicStudio.pos.x,
		mochicStudio.pos.y
	)

	love.graphics.printf(
		mochicStudioText.text,
		mochicStudioText.pos.x,
		mochicStudioText.pos.y,
		love.graphics.getWidth(),
		'center'
	)
end

return splashScreen
