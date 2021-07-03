-- Spritesheet
local spritesheet = {}
spritesheet.data = love.image.newImageData('assets/gfx/sheet.png')
spritesheet.img = love.graphics.newImage(spritesheet.data)
return spritesheet
