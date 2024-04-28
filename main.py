from flask import Flask, render_template, Response,jsonify 
from camera import VideoCamera
import numpy as np 
from flask_cors import CORS




# app = Flask(__name__)
app = Flask(__name__)
CORS(app)

emotion=''

@app.route('/')
def index():
    # return render_template('index.html',emotion={emotion})
    return '<h1>Rumman</h1>'

def gen(camera):
    while True:
        global emotion
        frame,emotion = camera.get_frame()
        # print(frame)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/video_feed')
def video_feed():

    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    # return Response(gen(x),
    #                 mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/t')
def get_emotion():
    data={
        "Emotion":emotion
    }
    # print(data)
    return jsonify(data)


if __name__ == '__main__':
    app.run()
