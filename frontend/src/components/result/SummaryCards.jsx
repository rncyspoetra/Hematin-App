import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  ArrowDown,
  ArrowUp,
  CreditCard,
  PiggyBank,
} from "lucide-react";
import { formatRupiah, calculateFinances } from "@/utils/utils";

const SummaryCards = ({ data }) => {
  const finance = calculateFinances(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Prediksi Pengeluaran */}
      <Card className="overflow-hidden border-l-4 border-blue-500">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-gray-700">
              Prediksi Pengeluaran
            </CardTitle>
            <Wallet className="h-5 w-5 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {formatRupiah(finance.next_month_spending_prediction)}
          </div>
          <div className="flex items-center text-sm">
            {finance.isSavingFromLastMonth ? (
              <>
                <ArrowDown className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">
                  {finance.savingPercentage.toFixed(1)}% lebih rendah dari bulan lalu ({formatRupiah(finance.savingAmount)})
                </span>
              </>
            ) : (
              <>
                <ArrowUp className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-red-600">
                  {finance.savingPercentage.toFixed(1)}% lebih tinggi dari bulan lalu ({formatRupiah(finance.savingAmount)})
                </span>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Potensi Tabungan */}
      <Card className="overflow-hidden border-l-4 border-green-500">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-gray-700">
              Potensi Tabungan
            </CardTitle>
            <PiggyBank className="h-5 w-5 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {formatRupiah(finance.potentialSaving)}
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-600">
              {finance.savingRate.toFixed(1)}% dari pendapatan Anda
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Total Pendapatan */}
      <Card className="overflow-hidden border-l-4 border-purple-500">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-gray-700">
              Total Pendapatan
            </CardTitle>
            <CreditCard className="h-5 w-5 text-purple-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {formatRupiah(finance.income)}
          </div>
          <div className="flex items-center text-sm">
            <Badge variant="outline" className="bg-purple-50">
              {finance.employment_status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;