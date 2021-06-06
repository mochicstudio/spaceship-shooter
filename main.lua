local Gamestate = require('libs/hump/gamestate')
local splashScreen = require('states/splash-screen')
local game = require('states/game')

love.load = function()
	Gamestate.registerEvents()
	Gamestate.switch(splashScreen)
end
