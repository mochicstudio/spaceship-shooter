local currentColor = require('current_color')
local keyMap = require('keymap')
local seconds = 0
local paused = false
local square = require('entities/square')
local ground = require('entities/ground')
local myWorld = require('world')

love.update = function(dt)
	if not paused then
		seconds = seconds + dt
		myWorld:update(dt)
	end
end

love.draw = function()
	love.graphics.setColor(currentColor)
	love.graphics.print('Love2D version is ' .. love.getVersion(), 1, 1)

	-- Clock
	local clock = 'Seconds ' .. math.floor(seconds)
	love.graphics.print(clock, 1, 15)

	if paused then
		love.graphics.print('Paused', love.graphics.getWidth() / 2, love.graphics.getHeight() / 2)
	end

	-- Draw the square
	love.graphics.polygon('fill', square.body:getWorldPoints(square.shape:getPoints()))
	love.graphics.polygon('fill', ground.body:getWorldPoints(ground.shape:getPoints()))
end

love.focus = function(focus)
	-- Pause the game automatically
	paused = not focus

	if focus then
		print("Window is focused")
	else
		print("Window is not focused")
	end
end

-- rgb colors and exit the game
love.keypressed = function(pressedKey)
	local response
	if keyMap[pressedKey] then
		response = keyMap[pressedKey]()

		-- Pause and unpause the game
		if response ~= 'pause' then
			currentColor = response
		else
			paused = not paused
		end
	end
end
