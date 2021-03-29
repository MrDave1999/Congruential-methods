function resetCampus()
{
	const elem = document.getElementById("inputs");
	const inputs = elem.getElementsByTagName("input");
	document.getElementById("result").value = "";
	
	if(document.getElementById("sequence") !== null)
		document.getElementById("sequence").value = "";
	
	for(const input of inputs)
		input.value = "";
}

function hasEmptyFields(tagname)
{
	const elem = document.getElementById("inputs");
	const inputs = elem.getElementsByTagName(tagname);
	if(inputs.length === 0)
		return -1; 
	for(const input of inputs)
	{
		if(input.value.trim().length === 0)
		{
			alert(`Error: Field ${input.id} cannot be left empty. Please enter a valid text!`);
			input.value = "";
			return 0;
		}
	}
	return 1;
}

function hasDigits(str)
{
	const len = str.length;
	if(len == 0)
		return false; 
	for(let i = 0; i < len; ++i)
		if(str[i] < '0' || str[i] > '9')
			return false;
	return true;
}

function isValidInteger(id)
{
	const elem = document.getElementById(id);
	if(elem === null)
		return -1;
	if(!hasDigits(elem.value))
	{
		alert(`Error: Field ${id} must be an integer!`);
		return 0;
	}
	return 1;
}

function splitAreaText()
{
	const elem = document.getElementById("sequence");
	const sequences = elem.value.split(",");
	const len = sequences.length;
	for(let i = 0; i < len; ++i)
	{
		if(!hasDigits(sequences[i]))
		{
			alert("Error: The sequence of numbers must be whole numbers only!");
			return 0;
		}
	}
	return 1;
}