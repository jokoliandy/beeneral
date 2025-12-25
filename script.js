const WHATSAPP_NUMBER = "6282274992200"; // ganti nomor kamu

function rupiah(num){
  try { return new Intl.NumberFormat("id-ID").format(Number(num)); }
  catch { return num; }
}

function openWA({ product="Madu Beeneral", price="", from="Website" } = {}) {
  const text =
`Halo Admin Madu Beeneral,
Saya mau order:

• Produk: ${product}
• Harga: ${price ? "Rp " + rupiah(price) : "-"}
• Jumlah: 1
• Nama:
• Alamat:
• Catatan:

Dari: ${from}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.location.href = url; // lebih "direct" daripada window.open
}

// tahun footer (kalau ada)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// tombol-tombol global (kalau ada)
[
  "btnTopWA","btnHeroWA","btnCardWA","btnStripWA",
  "btnFaqWA","btnFooterWA","btnFloatWA"
].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", () => openWA({ from: id }));
});

// tombol beli per-produk
document.querySelectorAll("button[data-product]").forEach(btn => {
  btn.addEventListener("click", () => {
    openWA({
      product: btn.dataset.product,
      price: btn.dataset.price,
      from: "Produk"
    });
  });
});
