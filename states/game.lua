local myWorld = require('world')
local constant = require('constant')
local input = require('input')
local entitiesFunc = require('entities')
local entities = entitiesFunc()
local seconds = 0
local paused = false
local game = {}
local background

function game:init()
	local backgroundData = love.image.newImageData('assets/gfx/background/purple.png')
	background = love.graphics.newImage(backgroundData)
end

function game:update(dt)
	if not paused then
		seconds = seconds + dt
		myWorld:update(dt)
	end
end

function game:draw()
	-- Draw background
	for x = 0, love.graphics.getWidth() / background:getWidth() do
		for y = 0, love.graphics.getHeight() / background:getHeight() do
			love.graphics.draw(background, x * background:getWidth(), y * background:getHeight())
		end
	end

	for i, entity in ipairs(entities) do
		-- Shorthand for entity.draw(entity)
		if entity.draw then entity:draw() end
	end

	-- Clock
	local clock = 'Seconds ' .. math.floor(seconds)
	love.graphics.print(clock, 1, 15)

	if paused then
		love.graphics.printf(
			'Paused',
			0,
			love.graphics.getHeight() / constant.HALF,
			love.graphics.getWidth(),
			'center'
		)
	end
end

function game:focus(focused)
	-- Pause the game when window is not focused
	paused = input.toggleFocus(focused)
end

function game:keypressed(pressedKey)
	local response = input.press(pressedKey)

	print(response)
	if response == 'pause' then
		paused = not paused
	end
end

function game:keyreleased(releasedKey)
	input.release(releasedKey)
end

return game
