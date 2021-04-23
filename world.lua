-- World

local beginContactCounter = 0
local endContactCounter = 0
local preSolveCounter = 0
local postSolveCounter = 0

-- Callbacks for collision
local beginContact = function(fixtureA, fixtureB, contact)
	beginContactCounter = beginContactCounter + 1
	print('beginContact called ' .. beginContactCounter .. ' times')
	local x1, y1, x2, y2 = contact:getPositions()
	print(fixtureA:getUserData(), fixtureB:getUserData(), x1, y1, x2, y2, 'beginContact')
end

local endContact = function(fixtureA, fixtureB, contact)
	endContactCounter = endContactCounter + 1
	print('endContact called ' .. endContactCounter .. ' times')
	local x1, y1, x2, y2 = contact:getPositions()
	print(fixtureA:getUserData(), fixtureB:getUserData(), x1, y1, x2, y2, 'endContact')
end

local preSolve = function(fixtureA, fixtureB, contact)
	preSolveCounter = preSolveCounter + 1
	print('preSolve called ' .. preSolveCounter .. ' times')
	local x1, y1, x2, y2 = contact:getPositions()
	print(fixtureA:getUserData(), fixtureB:getUserData(), x1, y1, x2, y2, 'preSolve')
end

local postSolve = function(fixtureA, fixtureB, contact)
	postSolveCounter = postSolveCounter + 1
	print('postSolve called ' .. postSolveCounter .. ' times')
	local x1, y1, x2, y2 = contact:getPositions()
	print(fixtureA:getUserData(), fixtureB:getUserData(), x1, y1, x2, y2, 'postSolve')
end

local world = love.physics.newWorld(0, 100) -- Vertical gravity
world:setCallbacks(beginContact, endContact, preSolve, postSolve)
return world
