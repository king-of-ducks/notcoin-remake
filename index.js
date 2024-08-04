const getPlusBtn = document.getElementById('plus');
const getBalance = document.getElementById('balance');
const getEnergyBar = document.getElementById('energy');
const getLeagueState = document.getElementById('league');
let balance = 0;
let profit = 1;
let energy = 1000;
let energyPerClick = 3;
let currentLeague = 0;

getBalance.innerText = ` ${balance}`;
getEnergyBar.innerText = `${energy}`;

function plus()
{
	if (energy >= energyPerClick)
	{
		balance = balance + profit;
		getBalance.innerText = ` ${balance}`;
		console.log(`log:(operator:plus,profit:${profit},usedEnergy:${energyPerClick})`);
		energy = energy - energyPerClick;
		getEnergyBar.innerText = `${energy}`;
		document.getElementById('energyMeter').setAttribute('value', energy);
		
		if (balance >= 1000 && currentLeague === 0)
		{
			document.body.style.backgroundImage = "url('./assets/silver_background.png')";
			currentLeague = 1;
			getLeagueState.innerText = "🏆 Silver";
			return true;
		}
		
		if (balance >= 20000 && currentLeague === 1)
		{
			document.body.style.backgroundImage = "url('./assets/gold_background.png')";
			currentLeague = 2;
			getLeagueState.innerText = "🏆 Gold";
			return true;
		}
		
		if (balance >= 100000 && currentLeague === 2)
		{
			document.body.style.backgroundImage = "url('./assets/platinum_background.png')";
			currentLeague = 3;
			getLeagueState.innerText = "🏆 Platinum";
			return true;
		}
		return true;
	}
}

function autoRestoreEnergy()
{
	if (energy <= 999)
	{
		energy++;
		getEnergyBar.innerText = `${energy}`;
		document.getElementById('energyMeter').setAttribute('value', energy);
		return true;
	}
	
	else
	{
		return false;
	}
}

setInterval(autoRestoreEnergy, 1000);