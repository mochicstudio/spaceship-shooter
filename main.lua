local Gamestate = require('libs/hump/gamestate')
local game = require('game')

love.load = function()
	Gamestate.registerEvents()
	Gamestate.switch(game)
end
