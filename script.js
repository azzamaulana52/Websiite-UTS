$(document).ready(function () {
  // Static news data as fallback if API fails
  const staticNewsData = [
    {
      title: "Pemerintah Umumkan Kebijakan Baru",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Politik",
      urlToImage: "https://picsum.photos/300/200?random=1",
      description: "Pemerintah mengumumkan kebijakan baru untuk meningkatkan kesejahteraan masyarakat...",
      url: "#"
    },
    {
      title: "Tim Nasional Raih Kemenangan Telak",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Olahraga",
      urlToImage: "https://picsum.photos/300/200?random=2",
      description: "Tim nasional berhasil menumbangkan lawannya dalam pertandingan yang sengit...",
      url: "#"
    },
    {
      title: "Teknologi AI Semakin Canggih",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Teknologi",
      urlToImage: "https://picsum.photos/300/200?random=3",
      description: "Perkembangan kecerdasan buatan semakin pesat dan mulai diterapkan di berbagai bidang...",
      url: "#"
    },
    {
      title: "Gaya Hidup Sehat Jadi Tren Baru",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Gaya Hidup",
      urlToImage: "https://picsum.photos/300/200?random=4",
      description: "Banyak masyarakat mulai beralih ke pola hidup sehat demi kualitas hidup yang lebih baik...",
      url: "#"
    }
  ];

  // Function to render news cards
  function renderNewsCards(newsArray) {
    // Clear existing cards
    $(".row").empty();

    // Append each news item as a card
    newsArray.forEach(function (item) {
      const cardHTML = `
        <div class="card my-4 mx-2" style="width: 18rem;">
          <img src="${item.urlToImage || 'https://via.placeholder.com/300x200'}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <small class="text-muted">${new Date(item.publishedAt).toLocaleDateString()} ${item.category ? '- ' + item.category : ''}</small>
            <p class="card-text">${item.description || 'Deskripsi tidak tersedia.'}</p>
            <a href="${item.url}" class="btn btn-primary" target="_blank">Baca Selengkapnya</a>
          </div>
        </div>
      `;
      $(".row").append(cardHTML);
    });
  }

  // Function to fetch news from API
  function fetchNewsFromAPI() {
    $.getJSON("https://newsapi.org/v2/everything?q=indonesia&language=id&apiKey=35e9f2c44cc64db6aa812d39c29b5aed")
      .done(function (response) {
        if (response.articles && response.articles.length > 0) {
          renderNewsCards(response.articles);
        } else {
          // If no articles, fall back to static data
          renderNewsCards(staticNewsData);
        }
      })
      .fail(function () {
        // On API failure, use static data
        console.warn("Failed to fetch news from API. Using static data.");
        renderNewsCards(staticNewsData);
      });
  }

  // Initialize by fetching news from API
  fetchNewsFromAPI();
});
