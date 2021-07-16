import styled from 'styled-components';

export const styles = {
	Container: styled.div`
		text-align: center;
	`,
	Logo: styled.img`
		width: 70px;
		pointer-events: none;
		margin-bottom: 10px;
	`,
	Header: styled.div`
		background-color: #282c34;
		min-height: 150px;
		min-width: 150px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	`,
	Button: styled.button`
		background-color: #f5f5f5;
		border: none;
		padding: 5px;
		border-radius: 3px;
	`,
	List: styled.div`
		margin-top: 15px;
		max-height: 300px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		::-webkit-scrollbar {
			width: 5px;
			height: 5px;
		}

		::-webkit-scrollbar-thumb {
			background: #4e4e4e;
			border-radius: 10px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #4e4e4e;
		}
		::-webkit-scrollbar-track {
			background: #f5f5f5;
			border-radius: 10px;
			box-shadow: inset 7px 10px 12px 0px #f0f0f0;
		}
	`,
};
