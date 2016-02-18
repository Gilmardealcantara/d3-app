from flask import Flask, render_template

app = Flask('d3-app')

@app.route('/') 
def index():    
    return render_template('index.html')

@app.route('/stacked') 
def stacked():    
    return render_template('maps.html')


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)    