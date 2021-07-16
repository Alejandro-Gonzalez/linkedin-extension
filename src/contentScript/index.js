global.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	const profiles = [...document.querySelectorAll('.reusable-search__result-container')];

	const users = profiles.reduce((accum, profile, idx) => {
		const profileContent = profile.querySelector('.entity-result__content');

		const fullname = profileContent.querySelector('.mb1 .entity-result__title-text > a > span > span');
		const position = profileContent.querySelector('.mb1 .entity-result__primary-subtitle');
		const location = profileContent.querySelector('.mb1 .entity-result__secondary-subtitle');

		return [
			...accum,
			{
				fullname: fullname.innerText,
				position: position.innerText,
				location: location.innerText,
			},
		];
	}, []);

	sendResponse(users);
});
