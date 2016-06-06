from flask import Flask, render_template, Blueprint
from app import app

mod = Blueprint('app', __name__,
                template_folder='templates',)


@app.route('/home')
@app.route('/') 
def index():    
    return render_template('index.html')

@app.route('/stacked')
def stacked():
    return render_template('stacked.html')

@app.route('/treemap')
def treemap():
    return render_template('treemap.html')