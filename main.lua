require('current_color')
require('keymap')
local seconds = 0
local myWorld = love.physics.newWorld(0, 0) -- No gravity

init = function()
	love.graphics.print('Love2D version is ' .. love.getVersion(), 1, 1)
end

love.update = function(dt)
	seconds = seconds + dt
	myWorld:update(dt)
end

love.draw = function()
	local square = {100, seconds * 10, seconds * 10, 200, 200, 200, 200, 100}
	
	init()
	
	-- Clock
	local clock = 'Seconds ' .. math.floor(seconds)
	love.graphics.print(clock, 1, 15)
	
	-- Initialize the square with the default color (white)
	love.graphics.setColor(currentColor)
	-- Draw the square
	love.graphics.polygon('fill', square)
end

-- rgb colors and exit the game
love.keypressed = function(pressedKey)
	if keyMap[pressedKey] then
		keyMap[pressedKey]()
	end
end