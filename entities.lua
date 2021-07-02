local spritesheet = require('entities/spritesheet')
local player = require('entities/player')

return function()
	local entities = {
		player(spritesheet.img)
	}

	return entities
end
