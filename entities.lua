local spritesheet = require('entities/spritesheet')
local player = require('entities/player')
local boundaryLeft = require('entities/boundary-vertical')
local boundaryRight = require('entities/boundary-vertical')

return function()
	local entities = {
		boundaryLeft(-1),
		boundaryRight(love.graphics.getWidth() + 1),
		player(spritesheet.img)
	}

	return entities
end
