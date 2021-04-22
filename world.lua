-- World

local beginContactCounter = 0
local endContactCounter = 0
local preSolveCounter = 0
local postSolveCounter = 0

-- Callbacks for collision
local beginContact = function(fixtureA, fixtureB, contact)
	beginContactCounter = beginContactCounter + 1
	print('beginContact called ' .. beginContactCounter .. ' times')
	print(fixtureA:getUserData(), fixtureB:getUserData(), contact, 'beginContact')
end

local endContact = function(fixtureA, fixtureB, contact)
	endContactCounter = endContactCounter + 1
	print('endContact called ' .. endContactCounter .. ' times')
	print(fixtureA:getUserData(), fixtureB:getUserData(), contact, 'endContact')
end

local preSolve = function(fixtureA, fixtureB, contact)
	preSolveCounter = preSolveCounter + 1
	print('preSolve called ' .. preSolveCounter .. ' times')
	print(fixtureA:getUserData(), fixtureB:getUserData(), contact, 'preSolve')
end

local postSolve = function(fixtureA, fixtureB, contact)
	postSolveCounter = postSolveCounter + 1
	print('postSolve called ' .. postSolveCounter .. ' times')
	print(fixtureA:getUserData(), fixtureB:getUserData(), contact, 'postSolve')
end

local world = love.physics.newWorld(0, 100) -- Vertical gravity
world:setCallbacks(beginContact, endContact, preSolve, postSolve)
return world
