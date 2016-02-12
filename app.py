from flask import Flask, render_template

app = Flask('d3-app')

@app.route('/') 
def index():    
    return render_template('maps.html')

@app.route('/graphic/')
def graphic():
    return render_template('graphic2.html')

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)    