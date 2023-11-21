// наброски скрипта

// селектрора с именами пользователей для фильтрации
let userList = document.querySelectorAll('.filters-step-cat .selected .name')
// // имена собираем в массив userNames
// let userNames = []
// userList.forEach((e) => {
// 	console.log(e.textContent)
// 	userNames.push(e.textContent)
// })

// // Создаем модальное окно
// const modal = document.createElement('div');
// modal.classList.add('modal');

// // Создаем выпадающий список с именами пользователей
// const select = document.createElement('select');
// select.classList.add('user-select');

// // Добавляем опции в выпадающий список
// userNames.forEach(userName => {
// 	const option = document.createElement('option');
// 	option.value = userName;
// 	option.text = userName;
// 	select.appendChild(option);
// });

// // Создаем кнопку "ФИЛЬТРОВАТЬ"
// const filterButton = document.createElement('button');
// filterButton.textContent = 'ФИЛЬТРОВАТЬ';

// // Добавляем обработчик события на кнопку "ФИЛЬТРОВАТЬ"
// filterButton.addEventListener('click', () => {
// 	const selectedUser = select.value;
// 	setFilter(selectedUser);
// });

// // Добавляем выпадающий список и кнопку в модальное окно
// modal.appendChild(select);
// modal.appendChild(filterButton);

// // Добавляем модальное окно в тело документа
// document.body.appendChild(modal);

function setFilter(selectedUser) {
	let highlightedItems = document.querySelectorAll(".taskboard-row");
	let userItem = '';
	highlightedItems.forEach((row) => {
		userItem = row.querySelector('.card-user-avatar [title="' + selectedUser + '"]');
		if (!userItem) {
			row.style.display = "none";
			row.querySelector('.folding-actions').click()
		}
	});
}
