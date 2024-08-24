from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS to handle cross-origin requests
from datetime import date

# Initialize the Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure the SQLAlchemy part of the app instance
# REPLACE PW WITH YOUR ACTUAL PW
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:FakePassword@localhost/monkeypox_db?sslmode=disable'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Define a model for the Monkeypox cases
class Case(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    date_reported = db.Column(db.Date, nullable=False, default=date.today)
    cases = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Case {self.country} - {self.state} - {self.date_reported}>"

# Define the home route
@app.route('/')
def home():
    return "Hello, Flask!"

# Endpoint to add a new case
@app.route('/cases', methods=['POST'])
def add_case():
    data = request.get_json()
    if not data.get('country') or not data.get('cases'):
        return jsonify({'error': 'Country and cases are required!'}), 400
    new_case = Case(
        country=data['country'],
        state=data.get('state', ''),  # Optional
        date_reported=data.get('date_reported', date.today()),
        cases=data['cases']
    )
    db.session.add(new_case)
    db.session.commit()
    return jsonify({'message': 'Case added successfully!'}), 201

# Endpoint to retrieve all cases
@app.route('/cases', methods=['GET'])
def get_cases():
    cases = Case.query.all()
    return jsonify([{
        'id': case.id,
        'country': case.country,
        'state': case.state,
        'date_reported': case.date_reported.isoformat(),
        'cases': case.cases
    } for case in cases]), 200

# Run the Flask app
if __name__ == '__main__':
    # Create the database tables within the application context
    with app.app_context():
        db.create_all()

    # Run the application
    app.run(debug=True)
