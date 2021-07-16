import { useState, useEffect } from 'react';
import { styles as styled } from './styles';
import logo from './fizzmod-logo.png';

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		global.chrome.storage.local.get(['users'], (data) => {
			if (data && data.users) setUsers(JSON.parse(data.users));
		});
	}, []);

	const getTabData = async () => {
		global.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			global.chrome.tabs.sendMessage(tabs[0].id, { type: 'getProfiles' }, (response) => {
				if (!response) return;

				const usersData = [...users, ...response];

				setUsers(usersData);
				global.chrome.storage.local.set({
					users: JSON.stringify(usersData),
				});

				console.log('GET PROFILES FROM HTML');
			});
		});
	};

	const connectAndSave = () => {
		setUsers([]);
		global.chrome.storage.local.remove(['users']);
		console.log('CONNECT AND SAVE DATA');
	};

	return (
		<styled.Container>
			<styled.Header>
				<styled.Logo src={logo} alt="logo" />

				{users.length ? (
					<styled.Button onClick={connectAndSave}>Connect and Save</styled.Button>
				) : (
					<styled.Button onClick={getTabData}>Get Profiles</styled.Button>
				)}

				<styled.List>
					{users.map(({ fullname, location, position }, i) => {
						return (
							<p key={fullname + i}>
								{fullname} {position} - {location}
							</p>
						);
					})}
				</styled.List>
			</styled.Header>
		</styled.Container>
	);
};

export default App;
