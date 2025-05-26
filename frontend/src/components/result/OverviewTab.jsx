import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatRupiah, calculateFinances } from "@/utils/utils";

const OverviewTab = ({ data }) => {
  const finance = calculateFinances(data);

  const comparisonChartData = [
    { name: "Bulan Lalu", pengeluaran: finance.last_month_spending },
    { name: "Prediksi", pengeluaran: finance.target_next_month_spending },
  ];

  const incomeVsExpenseData = [
    { name: "Pendapatan", value: finance.income, fill: "#22c55e" },
    {
      name: "Pengeluaran",
      value: finance.target_next_month_spending,
      fill: "#ef4444",
    },
    { name: "Tabungan", value: finance.potentialSaving, fill: "#3b82f6" },
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Pendapatan vs Pengeluaran</CardTitle>
          <CardDescription>
            Perbandingan antara pendapatan dan prediksi pengeluaran Anda bulan depan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeVsExpenseData}>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip formatter={(value) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {incomeVsExpenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Perbandingan dengan Bulan Lalu</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={comparisonChartData}>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip formatter={(value) => formatRupiah(value)} />
                <Bar
                  dataKey="pengeluaran"
                  fill="#6366f1"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informasi Keuangan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pengeluaran Tetap</span>
              <span className="font-medium">
                {formatRupiah(finance.fixed_expenses)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Makanan (per bulan)</span>
              <span className="font-medium">
                {formatRupiah(finance.monthlyFood)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Transportasi (per bulan)</span>
              <span className="font-medium">
                {formatRupiah(finance.monthlyTransport)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Layanan Berlangganan</span>
              <span className="font-medium">
                {finance.subscription_services_count} layanan
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tabungan Bulan Lalu</span>
              <span className="font-medium">
                {formatRupiah(finance.savings_last_month)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OverviewTab;
