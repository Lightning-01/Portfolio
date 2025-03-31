from together import Together

client = Together(api_key="4a6b45af1398ff379b5c85f94bbdf4f7396dbea631ead2eefd30f9402990efbb")  # Add your API key

response = client.chat.completions.create(
    model="meta-llama/Llama-3.3-70B-Instruct-Turbo",
    messages=[{"role": "user", "content": "What are some fun things to do in New York?"}],
)

print(response.choices[0].message.content)
