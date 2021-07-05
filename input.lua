local Signal = require('libs/hump/signal')
-- Input Service
local input = {}
-- Specific user inputs to game actions
local pressFunctions = {}
local releaseFunctions = {}

-- Look and execute corresponding action to specific key presses
input.press = function(pressedKey)
	if pressFunctions[pressedKey] then
		return pressFunctions[pressedKey]()
	end
end

-- Look and execute corresponding action to specific key releases
input.release = function(releasedKey)
	if releaseFunctions[releasedKey] then
		return releaseFunctions[releasedKey]()
	end
end

-- Window focusing/unfocusing
input.toggleFocus = function(focused)
	if not focused then
		return true
	end
end

-- Functions itselfs
-- Press Functions
pressFunctions.left = function()
	input.buttonLeft = true
end

pressFunctions.right = function()
	input.buttonRight = true
end

pressFunctions.up = function()
	-- input.buttonUp = true
	Signal.emit('playerShoot')
end

pressFunctions.escape = function()
	love.event.quit()
end

pressFunctions.space = function()
	return 'pause'
end

-- Release Functions
releaseFunctions.left = function()
	input.buttonLeft = false
end

releaseFunctions.right = function()
	input.buttonRight = false
end

releaseFunctions.up = function()
	input.buttonUp = false
end

return input
