-- World

local beginContactCounter = 0
local endContactCounter = 0
local preSolveCounter = 0
local postSolveCounter = 0

-- Callbacks for collision
local beginContact = function()
	beginContactCounter = beginContactCounter + 1
	print('beginContact called ' .. beginContactCounter .. ' times')
end

local endContact = function()
	endContactCounter = endContactCounter + 1
	print('endContact called ' .. endContactCounter .. ' times')
end

local preSolve = function()
	preSolveCounter = preSolveCounter + 1
	print('preSolve called ' .. preSolveCounter .. ' times')
end

local postSolve = function()
	postSolveCounter = postSolveCounter + 1
	print('postSolve called ' .. postSolveCounter .. ' times')
end

local world = love.physics.newWorld(0, 100) -- Vertical gravity
world:setCallbacks(beginContact, endContact, preSolve, postSolve)
return world
