local keyMap = {
	-- Red
	r = function()
		return {1, 0, 0, 1}
	end,
	-- Green
	g = function()
		return {0, 1, 0, 1}
	end,
	-- Blue
	b = function()
		return {0, 0, 1, 1}
	end,
	-- White
	w = function()
		return {1, 1, 1, 1}
	end,
	-- Exit
	escape = function()
		love.event.quit()
	end,
	-- Pause
	space = function()
		return 'pause'
	end
}
return keyMap
