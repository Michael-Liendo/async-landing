const divContent = document.getElementById('content');

async function fetchVideos(channelID) {
  const request = await fetch(
    `https://youtube138.p.rapidapi.com/channel/videos/?id=${channelID}&hl=en&gl=US`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '42df846972mshb1866a13d9d5c8cp13f068jsn9891864f6b35',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      },
    }
  );

  const response = await request.json();

  return response.contents;
}

(async () => {
  try {
    const videos = await fetchVideos('UCpvDw1oFFfI2DkU0A0XCdYw');

    videos.slice(0, 4).forEach((video) => {
      divContent.innerHTML += `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="${video.video.thumbnails[3].url}" alt="" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.video.title}
          </h3>
        </div>
      </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
})();
