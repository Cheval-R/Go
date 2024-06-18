initMap();

async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer } = ymaps3;
	// Import the package to add a default marker
	const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [37.565021, 55.723151],

				// Уровень масштабирования
				zoom: 17
			}
		}
	);
	// const marker = new YMapDefaultMarker({
	// 	coordinates: [37.565021, 55.723151],
	// 	title: 'Game Over',
	// 	color: '#008001'
	// });
	// map.addChild(marker)

	// Добавляем слой для отображения схематической карты
	map.addChild(new YMapDefaultSchemeLayer());
}