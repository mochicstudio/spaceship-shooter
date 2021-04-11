keyMap = {
	-- Red
	r = function()
		currentColor = {1, 0, 0, 1}
	end,
	-- Green
	g = function()
		currentColor = {0, 1, 0, 1}
	end,
	-- Blue
	b = function()
		currentColor = {0, 0, 1, 1}
	end,
	-- White
	w = function()
		currentColor = {1, 1, 1, 1}
	end,
	-- Exit
	escape = function()
		love.event.quit()
	end
}