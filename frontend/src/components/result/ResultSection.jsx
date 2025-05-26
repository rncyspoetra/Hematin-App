import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkeletonResult from "./SkeletonResult";
import SummaryCards from "./SummaryCards";
import OverviewTab from "./OverviewTab";
import ExpensesTab from "./ExpensesTab";
import SuggestionsTab from "./SuggestionsTab";
import NotFoundResult from "./NotFoundResult";

const ResultSection = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:2000/predictions/${id}`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load prediction data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <SkeletonResult />;
  }

  if (!data) {
    return <NotFoundResult />;
  }

  return (
    <section className="w-full bg-gray-100 px-4 py-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Hasil Prediksi Keuangan
          </h1>
          <p className="text-gray-500">
            Berdasarkan data yang Anda masukkan, berikut adalah prediksi dan
            saran untuk keuangan Anda.
          </p>
        </div>

        <SummaryCards data={data} />

        <Tabs defaultValue="expenses" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="expenses">Pengeluaran</TabsTrigger>
            <TabsTrigger value="suggestions">Saran Berhemat</TabsTrigger>
          </TabsList>

          <TabsContent value="expenses" className="space-y-6">
            <ExpensesTab data={data} />
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
            <SuggestionsTab data={data} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResultSection;
