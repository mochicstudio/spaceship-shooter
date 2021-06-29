local Gamestate = require('libs/hump/gamestate')
local splashScreen = require('states/splash-screen')
local game = require('states/game')

love.load = function()
	-- Load main font
	local MAIN_FONT = love.graphics.newFont('assets/fonts/PressStart2P-Regular.ttf')
	love.graphics.setFont(MAIN_FONT)

	Gamestate.registerEvents()
	-- Gamestate.switch(splashScreen)
	Gamestate.switch(game)
end
