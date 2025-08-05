from flask import Flask, jsonify
import pyaudio as pa;
from flask_cors import CORS # For handling cross-origin requests

app = Flask(__name__)
CORS(app) # Enable CORS for your frontend

@app.route('/api/data')
def get_data():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
