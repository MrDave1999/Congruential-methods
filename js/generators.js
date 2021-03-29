const PADDING_MAX = 15;

function multiplicative()
{
	mixed(0);
}

function mixed(c)
{
	let temp;
	const n = Number(document.getElementById("pseudo-random").value);
	const a = Number(document.getElementById("multiplier").value);
	let xi = Number(document.getElementById("seed").value);
	const m = Number(document.getElementById("module").value);
	const areatext = document.getElementById("result"); 
	areatext.value = "";
	areatext.value = `${"n".padEnd(PADDING_MAX)} ${"Xn".padEnd(PADDING_MAX)} ${"Xn+1".padEnd(PADDING_MAX)} ${"ri".padEnd(PADDING_MAX)}\n`;
	for(let i = 0; i != n; ++i)
	{
		temp = xi;
		xi = ((a* xi) + c) % m; 
		const ri = xi / (m-1); 
		areatext.value += `${i.toString().padEnd(PADDING_MAX)} ${temp.toString().padEnd(PADDING_MAX)} ${xi.toString().padEnd(PADDING_MAX)} ${ri.toFixed(5).padEnd(PADDING_MAX)}\n`;
	}
}

function additive()
{
	const n = Number(document.getElementById("pseudo-random").value);
	const m = Number(document.getElementById("module").value);
	const areatext = document.getElementById("result"); 
	const sequenceNumbers = document.getElementById("sequence").value.split(",").map(x => Number(x)); 
	let xi = sequenceNumbers[sequenceNumbers.length - 1];
	let temp;
	areatext.value = "";
	
	for(let i = 0, j = 0; i < n; ++i)
	{
		temp = xi;
		xi = (xi + sequenceNumbers[j]) % m;
		const ri = xi / (m-1);
		areatext.value += `X${addPad(sequenceNumbers.length+i+1)} = (${addPad(temp)} + ${addPad(sequenceNumbers[j])}) mod ${addPad(m)} = ${addPad(xi)} | r${addPad(i + 1)} = ${addPad(ri.toFixed(5))}\n`;
		sequenceNumbers[j] = xi;
		j = (j+1) % sequenceNumbers.length;
	}

	function addPad(value)
	{
		return value.toString().padEnd(2);
	}
}