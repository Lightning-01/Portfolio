from flask import Flask, request, jsonify
from flask_cors import CORS
from together import Together
from resume_data import resume_info 
import os

app = Flask(__name__)
CORS(app)  # Allow frontend to call this backend

# Load Together AI API Key
TOGETHER_API_KEY = "4a6b45af1398ff379b5c85f94bbdf4f7396dbea631ead2eefd30f9402990efbb"
client = Together(api_key=TOGETHER_API_KEY)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    # Structured prompt with resume data
    prompt = f"""
    You are a chatbot trained to answer questions about my resume. My name is {resume_info['name']}. 
    I am pursuing {resume_info['education']}. 
    My technical skills include: {', '.join(resume_info['skills'])}.
    
    I have worked on several projects:
    {''.join([f"- {p['title']}: {p['description']}\n" for p in resume_info['projects']])}
    
    I have also earned the following certifications:
    {', '.join(resume_info['certifications'])}.

    Now, answer the following question based on this information:
    Question: {user_message}
    Answer:
    """

    print("\n===== DEBUG: Prompt Being Sent =====")
    print(prompt)
    print("===================================\n")

    # Call Together AI API
    response = client.chat.completions.create(
        model="meta-llama/Llama-3.3-70B-Instruct-Turbo",
        messages=[{"role": "user", "content": prompt}],
    )

    return jsonify({"reply": response.choices[0].message.content})

if __name__ == "__main__":
    app.run(debug=True)