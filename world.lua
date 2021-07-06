local beginContactCounter = 0
local endContactCounter = 0
local preSolveCounter = 0
local postSolveCounter = 0

-- Callbacks for collision
local beginContact = function(fixtureA, fixtureB, contact)
	-- Get entities that are being in contact
	local entityA = fixtureA:getUserData()
	local entityB = fixtureB:getUserData()

	-- If entity has endContact mehtod, execute it
	if entityA.beginContact then entityA:beginContact() end
	if entityB.beginContact then entityB:beginContact() end
end

local endContact = function(fixtureA, fixtureB, contact)
	-- Get entities that are being in contact
	local entityA = fixtureA:getUserData()
	local entityB = fixtureB:getUserData()

	-- If entity has endContact mehtod, execute it
	if entityA.endContact then entityA:endContact() end
	if entityB.endContact then entityB:endContact() end
end

local preSolve = function(fixtureA, fixtureB, contact)
end

local postSolve = function(fixtureA, fixtureB, contact)
end

local world = love.physics.newWorld(0, 0)
world:setCallbacks(beginContact, endContact, preSolve, postSolve)
return world
