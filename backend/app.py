from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse, fields, marshal_with, abort


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class UserModel(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique = True, nullable = False)
    email = db.Column(db.String(80), unique = True, nullable = False)

    # Representation of data
    def __repr__(self):
        return f"User(name = {self.name}, email = {self.email})"

CORS(app)  # Enable CORS for frontend communication

@app.route('/')
def home():
    return '<h1>Flask REST API</h1>'

if __name__ == '__main__':
    app.run(debug=True, port=5000)
