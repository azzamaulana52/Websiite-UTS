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
    },
    {
      title: "Ekonomi Nasional Tumbuh Positif",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Ekonomi",
      urlToImage: "https://picsum.photos/300/200?random=5",
      description: "Data terbaru menunjukkan pertumbuhan ekonomi nasional mencapai angka yang menggembirakan...",
      url: "#"
    },
    {
      title: "Film Lokal Pecahkan Rekor Penonton",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Hiburan",
      urlToImage: "https://picsum.photos/300/200?random=6",
      description: "Film karya anak bangsa berhasil menarik jutaan penonton dalam waktu singkat...",
      url: "#"
    },
    {
      title: "Startup Baru Hadirkan Inovasi Energi Terbarukan",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Teknologi",
      urlToImage: "https://picsum.photos/300/200?random=7",
      description: "Sebuah startup lokal menghadirkan solusi energi terbarukan yang ramah lingkungan...",
      url: "#"
    },
    {
      title: "Kampanye Lingkungan Hidup Digalakkan di Sekolah",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Lingkungan",
      urlToImage: "https://picsum.photos/300/200?random=8",
      description: "Program peduli lingkungan kini menjadi bagian dari kurikulum di sejumlah sekolah...",
      url: "#"
    },
    {
      title: "Harga Pangan Naik Menjelang Akhir Tahun",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Ekonomi",
      urlToImage: "https://picsum.photos/300/200?random=9",
      description: "Kenaikan harga sejumlah bahan pokok mulai dirasakan oleh masyarakat menjelang akhir tahun...",
      url: "#"
    },
    {
      title: "Industri Musik Digital Kian Berkembang",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Hiburan",
      urlToImage: "https://picsum.photos/300/200?random=10",
      description: "Platform musik digital terus mengalami peningkatan pengguna di berbagai daerah...",
      url: "#"
    },
    {
      title: "Infrastruktur Jalan Diperbaiki untuk Kurangi Kemacetan",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Nasional",
      urlToImage: "https://picsum.photos/300/200?random=11",
      description: "Pemerintah daerah mulai memperbaiki sejumlah ruas jalan utama untuk mengurangi kemacetan...",
      url: "#"
    },
    {
      title: "Peneliti Temukan Metode Baru Pengolahan Sampah",
      publishedAt: "2025-11-08T00:00:00Z",
      category: "Sains",
      urlToImage: "https://picsum.photos/300/200?random=12",
      description: "Tim peneliti berhasil mengembangkan metode baru yang lebih efisien dalam mengolah limbah rumah tangga...",
      url: "#"
    }
  ];

  // Contoh penggunaan:
  console.log("Static news loaded:", staticNewsData);
});


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

