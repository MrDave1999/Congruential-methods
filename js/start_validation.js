function initial(type)
{
	if(!hasEmptyFields("input") || !hasEmptyFields("textarea")) return;
	if(!isValidInteger("pseudo-random") ||
		!isValidInteger("multiplier") ||
		!isValidInteger("seed") ||
		!isValidInteger("module") ||
		!isValidInteger("constant")
	)return;

	switch(type)
	{
		case 0:
			multiplicative();
			break;
		case 1:
			mixed(Number(document.getElementById("constant").value));
			break;
		case 2:
			if(splitAreaText())
				additive();
			break;
	}
}