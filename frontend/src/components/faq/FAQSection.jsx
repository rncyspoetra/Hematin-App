import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuestionPicture from "../../assets/question.png";

const FAQItem = ({ title, desc, value }) => {
  return (
    <AccordionItem value={value} className="max-w-full">
      <AccordionTrigger className="md:text-lg">
        <h5>{title}</h5>
      </AccordionTrigger>
      <AccordionContent className="">
        <p className="text-sm font-light">{desc}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQSection = () => {
  return (
    <section className="w-full py-20 px-2 bg-gray-100 flex items-center justify-center">
      <div className="w-3/4 mx-auto flex flex-col md:flex-row gap-5 justify-center items-center">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={QuestionPicture} alt="" />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Apa yang Sering Ditanyakan
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <FAQItem
              title="Apa tujuan utama dari aplikasi ini?"
              desc="Aplikasi ini bertujuan untuk membantu individu dalam mengelola keuangan pribadi mereka dengan cara yang lebih efisien dan bijak. Menggunakan machine learning, aplikasi ini memberikan rekomendasi yang lebih akurat terkait pengeluaran dan tabungan."
              value="item-1"
            />
            <FAQItem
              title="Siapa target pengguna aplikasi ini?"
              desc="Aplikasi ini ditujukan untuk pekerja muda, mahasiswa, freelancer, serta individu lain yang ingin memantau dan mengelola keuangan mereka dengan lebih baik dan berdasarkan data pribadi yang lebih relevan."
              value="item-2"
            />
            <FAQItem
              title="Bagaimana cara sistem rekomendasi bekerja?"
              desc="Sistem rekomendasi aplikasi ini menggunakan data keuangan yang dimasukkan oleh pengguna, seperti pengeluaran bulan lalu, pendapatan, dan tabungan. Berdasarkan pola pengeluaran tersebut, aplikasi akan memberikan saran yang lebih personal untuk mengatur pengeluaran dan meningkatkan tabungan."
              value="item-3"
            />
            <FAQItem
              title="Apa manfaat utama yang akan saya dapatkan dari aplikasi ini?"
              desc="Sistem rekomendasi aplikasi ini menggunakan data keuangan yang dimasukkan oleh pengguna, seperti pengeluaran bulan lalu, pendapatan, dan tabungan. Berdasarkan pola pengeluaran tersebut, aplikasi akan memberikan saran yang lebih personal untuk mengatur pengeluaran dan meningkatkan tabungan."
              value="item-4"
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
