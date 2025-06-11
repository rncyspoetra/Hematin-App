from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd 
import joblib 
from tensorflow.keras.models
import load_model

app = Flask(__name__)
CORS(app)

model_klasifikasi = load_model("tuned_model_klasifikasi.h5")
model_regresi = load_model("tuned_model_regresi.h5")
preprocessor = joblib.load("preprocessor.pkl")
label_encoder = joblib.load("label_encoder.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(force=True)

        required_keys = [
            "income", "fixed_expenses", "weekly_food_spending",
            "weekly_transport_spending", "subscription_services_count",
            "employment_status", "age", "last_month_spending", "savings_last_month"
        ]
        
        if not all(k in data for k in required_keys):
            return jsonify({"message": "Invalid input data"}), 400

        # Input ke DataFrame
        user_input = pd.DataFrame([{
            "income": data["income"],
            "fixed_expenses": data["fixed_expenses"],
            "weekly_food_spending": data["weekly_food_spending"],
            "weekly_transport_spending": data["weekly_transport_spending"],
            "subscription_services_count": data["subscription_services_count"],
            "employment_status": data["employment_status"],
            "age": data["age"],
            "last_month_spending": data["last_month_spending"],
             "savings_last_month": data["savings_last_month"]
        }])

        # Transformasi dan prediksi
        user_input_processed = preprocessor.transform(user_input)

        prediction_spending = model_regresi.predict(user_input_processed)[0][0]
        prediction_saving = model_klasifikasi.predict(user_input_processed)

        pred_class = prediction_saving.argmax(axis=1)[0]
        suggestion = label_encoder.inverse_transform([pred_class])[0]

        return jsonify({
            "message": "success",
            "data": {
                "next_month_spending_prediction": int(round(prediction_spending)),
                "saving_suggestion": suggestion
            }
        })

    except Exception as e:
        return jsonify({
            "message": "Internal server error",
            "error": str(e)
        }), 500


if __name__ == '__main__':
    app.run(port=9000, debug=True)
