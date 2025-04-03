from flask import Flask, request, jsonify
from flask_cors import CORS
from together import Together
from resume_data import resume_info 
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow frontend to call this backend

# Load Together AI API Key
TOGETHER_API_KEY = "4a6b45af1398ff379b5c85f94bbdf4f7396dbea631ead2eefd30f9402990efbb"
client = Together(api_key=TOGETHER_API_KEY)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    # Build skills and projects sections separately
    skills_text = ""
    for s in resume_info['skills']:
        skills_text += f"- {s['title']}: {s['techs']}\n"
    
    projects_text = ""
    for p in resume_info['projects']:
        projects_text += f"- {p['title']}: {p['description']}. Link: {p['link']}\n"
    
    # Structured prompt with resume data - avoiding f-string with backslash issues
    prompt = f"""
    You are a chatbot trained to answer questions about my resume. You are hosted on my portfolio website. The website contains various sections like home(brief introduction and download cv button and also buttons for my socials), about me(my education and detail about me), my skills, my projects, my contact information. When asked to answer briefly, try to keep it as short as possible, only when asked by user. Otherwise, answer as you would. For example, when you are asked aboot project names, just mention the project titles. Give description and links only when asked. Same goes with skills.
     
    My name is {resume_info['name']}. 

    My education include: 
    -B.Tech in Civil Engineering from IIT Guwahati. I am also getting a minor degree in Mathematics and Computing. The duration of my degree is 4 years from 2022 to 2026. My current CGPA or grade is 7.91 .
    -(Senior Secondary), (CBSE Board) from (Apex Int. School, Jaipur). I secured 96.5%. It was from 2021-2022.
    -(Secondary), (CBSE Board) from (MPS, Ajmer). I secured 95.2%. It was from 2019-2020.

    Some more general information about me: {resume_info['general']}.

    My technical skills include: 
    {skills_text}
    
    I have worked on several projects:
    {projects_text}
    
    I have also earned the following certifications:
    {', '.join(resume_info['certifications'])}.

    I do not have any former professional work experience.

    Now, answer the following question based on this information:
    Question: {user_message}
    Answer:
    """

    print("\n===== DEBUG: Prompt Being Sent =====")
    print(prompt)
    print("===================================\n")

    # Call Together AI API
    response = client.chat.completions.create(
        model="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        messages=[{"role": "user", "content": prompt}],
    )

    return jsonify({"reply": response.choices[0].message.content})

if __name__ == "__main__":
    app.run()