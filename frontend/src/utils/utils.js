export const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateFinances = (data) => {
  const {
    income,
    weekly_food_spending,
    weekly_transport_spending,
    next_month_spending_prediction,
    last_month_spending,
  } = data;

  const monthlyFood = weekly_food_spending * 4;
  const monthlyTransport = weekly_transport_spending * 4;

  const potentialSaving = income - next_month_spending_prediction;
  const savingRate = (potentialSaving / income) * 100;

  const isSavingFromLastMonth =
    next_month_spending_prediction < last_month_spending;
  const savingAmount = Math.abs(
    next_month_spending_prediction - last_month_spending
  );
  const savingPercentage = (savingAmount / last_month_spending) * 100;

  return {
    ...data,
    monthlyFood,
    monthlyTransport,
    potentialSaving,
    savingRate,
    isSavingFromLastMonth,
    savingAmount,
    savingPercentage,
  };
};
