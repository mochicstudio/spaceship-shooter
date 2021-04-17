require('current_color')
require('keymap')
local seconds = 0
local myWorld, square

-- Initialize the square with the default color (white)
-- love.load = function()
-- 	love.graphics.setColor(currentColor)
-- 	love.graphics.print('Love2D version is ' .. love.getVersion(), 1, 1)
-- end

-- The Game World
myWorld = love.physics.newWorld(0, 100) -- No gravity

-- Entities in Game World
square = {}
square.body = love.physics.newBody(myWorld, 250, 250, 'dynamic')
square.body.setMass(square.body, 32)
square.shape = love.physics.newPolygonShape(100, 100, 100, 200, 200, 200, 200, 100)
square.fixture = love.physics.newFixture(square.body, square.shape)
square.fixture:setRestitution(1)

ground = {}
ground.body = love.physics.newBody(myWorld, 200, 500, 'static')
ground.shape = love.physics.newPolygonShape(0, 0, 0, 20, 400, 20, 400, 0)
ground.fixture = love.physics.newFixture(ground.body, ground.shape)

love.update = function(dt)
	if not paused then
		seconds = seconds + dt
		myWorld:update(dt)
	end
end

love.draw = function()
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
	if keyMap[pressedKey] then
		keyMap[pressedKey]()
	end
end
