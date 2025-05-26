import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Coffee, Car, ShoppingCart } from "lucide-react";
import { formatRupiah, calculateFinances } from "../../utils/utils";

const ExpensesTab = ({ data }) => {
  const finance = calculateFinances(data);
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const expenseChartData = [
    {
      name: "Pengeluaran Tetap",
      value: finance.fixed_expenses,
      fill: "#3b82f6",
    },
    { name: "Makanan", value: finance.monthlyFood, fill: "#f59e0b" },
    { name: "Transportasi", value: finance.monthlyTransport, fill: "#10b981" },
    {
      name: "Lainnya",
      value:
        finance.income -
        finance.fixed_expenses -
        finance.monthlyFood -
        finance.monthlyTransport,
      fill: "#8b5cf6",
    },
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Pengeluaran</CardTitle>
          <CardDescription>
            Sebaran pengeluaran berdasarkan kategori
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="value"
                  label={
                    !isMobile
                      ? ({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                      : false
                  }
                >
                  {expenseChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatRupiah(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Pengeluaran Tetap</span>
                  </div>
                  <span className="font-medium">
                    {formatRupiah(finance.fixed_expenses)}
                  </span>
                </div>
                <Progress
                  value={(finance.fixed_expenses / finance.income) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                    <span>Makanan</span>
                  </div>
                  <span className="font-medium">
                    {formatRupiah(finance.monthlyFood)}
                  </span>
                </div>
                <Progress
                  value={(finance.monthlyFood / finance.income) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Transportasi</span>
                  </div>
                  <span className="font-medium">
                    {formatRupiah(finance.monthlyTransport)}
                  </span>
                </div>
                <Progress
                  value={(finance.monthlyTransport / finance.income) * 100}
                  className="h-2 "
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Lainnya</span>
                  </div>
                  <span className="font-medium">
                    {formatRupiah(
                      finance.income -
                        finance.fixed_expenses -
                        finance.monthlyFood -
                        finance.monthlyTransport
                    )}
                  </span>
                </div>
                <Progress
                  value={
                    ((finance.income -
                      finance.fixed_expenses -
                      finance.monthlyFood -
                      finance.monthlyTransport) /
                      finance.income) *
                    100
                  }
                  className="h-2 "
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">Makanan</CardTitle>
              <Coffee className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {formatRupiah(finance.weekly_food_spending)}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / minggu
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {formatRupiah(finance.monthlyFood)} per bulan
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">Transportasi</CardTitle>
              <Car className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {formatRupiah(finance.weekly_transport_spending)}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / minggu
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {formatRupiah(finance.monthlyTransport)} per bulan
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">Berlangganan</CardTitle>
              <ShoppingCart className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {finance.subscription_services_count}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                layanan
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Audit langganan secara berkala
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ExpensesTab;
