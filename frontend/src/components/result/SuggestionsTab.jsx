import React from "react";
import { formatRupiah, calculateFinances } from "@/utils/utils";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown, TrendingUp } from "lucide-react";

const SuggestionsTab = ({ data }) => {
  const finance = calculateFinances(data);

  return (
    <>
      {finance?.next_month_spending_prediction >
      finance?.last_month_spending ? (
        // ALERT MERAH – Pengeluaran Naik
        <Alert className="bg-red-50 border-red-200">
          <TrendingUp className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800">
            Peringatan Pengeluaran
          </AlertTitle>
          <AlertDescription className="text-red-700">
            Prediksi pengeluaran bulan depan (
            {formatRupiah(finance.next_month_spending_prediction)}) lebih tinggi
            dari bulan sebelumnya ({formatRupiah(finance.last_month_spending)}).
            Pertimbangkan untuk menyesuaikan rencana pengeluaran Anda.
          </AlertDescription>
        </Alert>
      ) : (
        // ALERT HIJAU – Potensi Penghematan
        <Alert className="bg-green-50 border-green-200">
          <TrendingDown className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800">
            Potensi Penghematan
          </AlertTitle>
          <AlertDescription className="text-green-700">
            Dengan mengikuti saran di bawah, Anda berpotensi menghemat hingga{" "}
            {formatRupiah(finance.savingAmount)} setiap bulan.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Card className="border-l-4 border-green-500">
          <CardContent className="">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <TrendingDown className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-700">{finance.saving_suggestion}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Simulasi Penghematan</CardTitle>
          <CardDescription>
            Proyeksi tabungan Anda jika mengikuti saran penghematan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                  Pengeluaran Saat Ini
                </span>
                <span className="text-sm font-medium">
                  {formatRupiah(finance.last_month_spending)}
                </span>
              </div>
              <Progress value={100} className="h-2 bg-gray-100" />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                  Prediksi Pengeluaran
                </span>
                <span className="text-sm font-medium">
                  {formatRupiah(finance.next_month_spending_prediction)}
                </span>
              </div>
              <Progress
                value={
                  (finance.next_month_spending_prediction /
                    finance.last_month_spending) *
                  100
                }
                className="h-2 bg-gray-100"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                  Potensi Tabungan Bulan Depan
                </span>
                <span className="text-sm font-medium">
                  {formatRupiah(
                    finance.savings_last_month + finance.savingAmount
                  )}
                </span>
              </div>
              <Progress
                value={
                  ((finance.savings_last_month + finance.savingAmount) /
                    finance.income) *
                  100
                }
                className="h-2 bg-gray-100"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SuggestionsTab;
