from flask import Flask, request, jsonify
import pymysql
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def get_connection():
    return pymysql.connect(host='localhost', user='root', passwd='', db='devqueens')


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    usuario = data.get('usuario')
    contraseña = data.get('contraseña')
    email = data.get('email')

    if not usuario or not contraseña or not email:
        return jsonify({'status': 'error', 'message': 'Faltan datos'})

    hashed_password = generate_password_hash(contraseña)

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO usuarios (usuario, contraseña, email) VALUES (%s, %s, %s)",
                       (usuario, hashed_password, email))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'status': 'ok', 'message': 'Usuario registrado'})
    except pymysql.err.IntegrityError:
        return jsonify({'status': 'error', 'message': 'Usuario o email ya existe'})


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data.get('usuario')
    contraseña = data.get('contraseña')

    if not usuario or not contraseña:
        return jsonify({'status': 'error', 'message': 'Faltan datos'})

    conn = get_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM usuarios WHERE usuario=%s", (usuario,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if user and check_password_hash(user['contraseña'], contraseña):
        return jsonify({'status': 'ok', 'message': 'Inicio de sesión exitoso'})
    else:
        return jsonify({'status': 'error', 'message': 'Usuario o contraseña incorrectos'})

if __name__ == '__main__':
    app.run(debug=True)
