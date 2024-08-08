from django.apps import AppConfig
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

class PollsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'polls'

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=['*'],
    allow_headers=['*'],
    allow_credentials=True,
    allow_origins=["http://localhost:5173"]
)

@app.get('/get_data')
async def get_data():
    return {'body': 'minato'}