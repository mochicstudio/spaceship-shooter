local keyMap = require('keymap')
local seconds = 0
local paused = false
local myWorld = require('world')
local game = {}
local background
local spritesheet
local player = {
	quad = {},
	dimension = {
		width = 0,
		height = 0
	},
	pos = {
		x = 0,
		y = 0
	}
}

local constant = {
	HALF = 2,
	PLAYER_Y_POS = 0.9
}

function game:init()
	local backgroundData = love.image.newImageData('assets/gfx/background/purple.png')
	background = love.graphics.newImage(backgroundData)
	local spritesheetData = love.image.newImageData('assets/gfx/sheet.png')
	spritesheet = love.graphics.newImage(spritesheetData)

	-- Set player attributes
	player.quad = love.graphics.newQuad(211, 941, 99, 75, spritesheet:getDimensions())
	player.pos.x, player.pos.y, player.dimension.width, player.dimension.height = player.quad:getViewport()
	player.pos.x = (love.graphics.getWidth() / constant.HALF) - (player.dimension.width / constant.HALF)
	player.pos.y = (love.graphics.getHeight() * constant.PLAYER_Y_POS) - (player.dimension.height / constant.HALF)
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

	-- Player
	love.graphics.draw(spritesheet, player.quad, player.pos.x, player.pos.y, 0, 1, 1)

	-- Clock
	local clock = 'Seconds ' .. math.floor(seconds)
	love.graphics.print(clock, 1, 15)

	if paused then
		love.graphics.print('Paused', love.graphics.getWidth() / 2, love.graphics.getHeight() / 2)
	end
end

function game:focus(focus)
	-- Pause the game automatically
	paused = not focus

	if focus then
		print("Window is focused")
	else
		print("Window is not focused")
	end
end

-- rgb colors and exit the game
function game:keypressed(pressedKey)
	local response
	if keyMap[pressedKey] then
		response = keyMap[pressedKey]()

		-- Pause and unpause the game
		if response == 'pause' then
			paused = not paused
		end
	end
end

return game
