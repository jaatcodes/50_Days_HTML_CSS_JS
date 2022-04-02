const sounds = ['song-1', 'song-2', 'song-3', 'song-4', 'song-5', 'song-6'];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerHTML = sound;

	btn.addEventListener('click', () => {
		stopSong();

		document.getElementById(sound).play();
	});
	document.getElementById('buttons').appendChild(btn);
});

function stopSong() {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);
		song.pause();

		song.currentTime = 0;
	});
}
