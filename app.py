from flask import Flask, render_template, redirect, url_for, request, jsonify
import os


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/mission')
def mission():
    return render_template('mission.html')

@app.route('/solutions')
def solutions():
    return render_template('solutions.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('contact.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3100, debug=True)
