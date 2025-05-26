-- CreateTable
CREATE TABLE "PredictRecord" (
    "id" TEXT NOT NULL,
    "income" INTEGER NOT NULL,
    "fixed_expenses" INTEGER NOT NULL,
    "weekly_food_spending" INTEGER NOT NULL,
    "weekly_transport_spending" INTEGER NOT NULL,
    "subscription_services_count" INTEGER NOT NULL,
    "employment_status" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "last_month_spending" INTEGER NOT NULL,
    "savings_last_month" INTEGER NOT NULL,
    "target_next_month_spending" INTEGER NOT NULL,
    "saving_suggestion" TEXT NOT NULL,

    CONSTRAINT "PredictRecord_pkey" PRIMARY KEY ("id")
);
