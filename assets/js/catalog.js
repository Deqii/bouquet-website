// render from JSON

document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
  const container = document.getElementById("catalog-grid");
  if (!container) return;

  try {
    const response = await fetch("assets/data/product.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    renderProducts(products, container);
  } catch (error) {
    console.error("Gagal mengambil data produk:", error);
    container.innerHTML = `
      <div class="error-text">
        <p>Maaf, gagal memuat katalog produk saat ini.</p>
        <p style="font-size: var(--text-sm); margin-top: var(--sp-2);">Pastikan Anda membuka file ini menggunakan Live Server.</p>
      </div>
    `;
  }
}

function renderProducts(products, container) {
  const html = products
    .map(
      (product) => `
    <article class="card fade-up">
      <div class="card__image-wrapper">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="card__image"
          onerror="this.style.display='none'"
        >
      </div>
      <div class="card__content">
        <span class="card__category">${product.category}</span>
        <h3 class="card__title">${product.name}</h3>
        <p class="card__price">Rp ${product.price.toLocaleString("id-ID")}</p>
      </div>
    </article>
  `
    )
    .join("");

  container.innerHTML = html;

  // Fade-in animation
  if (typeof initFadeAnimations === "function") {
    initFadeAnimations();
  }
}
