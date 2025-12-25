from fastapi import FastAPI

app = FastAPI(title="Employd API")

@app.get("/health")
def health():
    return {"ok": True}
