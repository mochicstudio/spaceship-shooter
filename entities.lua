local spritesheet = require('entities/spritesheet')
local player = require('entities/player')

return function()
	local entities = {
		spritesheet(),
		player()
	}

	return entities
end
