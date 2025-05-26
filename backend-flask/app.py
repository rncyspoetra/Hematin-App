from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():

    data = {
    "target_next_month_spending": 200000,
    "saving_suggestion": "Kurangi makan di luar, coba masak di rumah"
}

    return jsonify({"status": "ok", "message": "Data diterima!", "data": data})

if __name__ == '__main__':
    app.run(port=9000, debug=True)
