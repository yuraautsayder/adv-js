'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
	const { abilities } = JSON.parse(this.responseText);
	abilities.forEach(({ ability }) => {
		const abilityRequest = new XMLHttpRequest();
		abilityRequest.open('GET', ability.url);
		abilityRequest.send();
		abilityRequest.addEventListener('load', function () {
			const { effect_entries } = JSON.parse(this.responseText);
			const enEffect = effect_entries.find(
				(entry) => entry.language.name === 'en',
			);
			console.log(enEffect.effect);
		});
	});
});
