import { html } from '../libs/lit.html';

export const app = () => {
	return html` <div>
		<header>
			<h1>Todo App</h1>
			<form>
				<label>
					<span>New Task</span>
				</label>
				<button>Add Task</button>
			</form>
		</header>
		<main>
			<ul></ul>
		</main>
	</div>`;
};
