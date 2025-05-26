export const segmentQuestion = [
  {
    title: "Informasi Dasar",
    desc: "Status pekerjaan, usia, dan pendapatan bulanan memberikan gambaran menyeluruh tentang kondisi keuangan Anda saat ini.",
    input: [
      {
        label: "Apa status pekerjaan Anda saat ini?",
        type: "select",
        name: "employment_status",
        options: ["Student", "Freelance", "Part-Time", "Full-Time", "Contract"],
      },
      {
        label: "Berapa usia Anda saat ini?",
        type: "number",
        name: "age",
        contoh : "20",
        satuan : "Tahun",
      },
      {
        label: "Berapa total pendapatan Anda setiap bulan?",
        type: "number",
        name: "income",
        contoh : "5000000",
        satuan : "Rp. ",
      },
    ],
  },
  {
    title: "Pengeluaran Tetap dan Berkala",
    desc: "Pengeluaran tetap mencakup biaya rutin seperti sewa atau cicilan, sedangkan jumlah langganan mengukur berapa banyak layanan berlangganan yang dimiliki individu. Pengeluaran bulan lalu memberikan gambaran umum tentang pola pengeluaran individu di luar kewajiban tetap.",
    input: [
      {
        label: "Berapa total pengeluaran tetap Anda setiap bulan?",
        type: "number",
        name: "fixed_expenses",
        contoh : "2000000",
        satuan : "Rp. ",
      },
      {
        label: "Berapa jumlah layanan berlangganan yang Anda miliki?",
        type: "number",
        name: "subscription_services_count",
        contoh : "3",
      },
      {
        label: "Berapa total pengeluaran Anda bulan lalu?",
        type: "number",
        name: "last_month_spending",
        contoh : "4000000",
        satuan : "Rp. ",
      },
    ],
  },
  {
    title: "Pengeluaran Bulanan Sehari-hari",
    desc: "Pengeluaran untuk makanan dan transportasi bulanan mencerminkan kebutuhan dasar individu dan menunjukkan efisiensi dalam mengelola pengeluaran rutin sehari-hari.",
    input: [
      {
        label: "Berapa pengeluaran Anda untuk makanan setiap bulan?",
        type: "number",
        name: "weekly_food_spending",
        contoh : "150000",
        satuan : "Rp. ",
      },
      {
        label: "Berapa pengeluaran Anda untuk transportasi setiap bulan?",
        type: "number",
        name: "weekly_transport_spending",
        contoh : "100000",
        satuan : "Rp. ",
      },
    ],
  },
];
