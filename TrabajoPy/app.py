from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Sirve el archivo HTML al cliente

if __name__ == '__main__':
    app.run(debug=True)
