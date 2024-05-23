# from flask import Flask, render_template, request, jsonify, session
# import torch
# from model import NeuralNet
# from nltk_ import bag_of_words, tokenize
# import random
# import json

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'  # Set a secret key for session management
# app.config['SESSION_COOKIE_SAMESITE'] = 'None'

# # Load the intents data
# with open("intents.json", "r") as file:
#     intents = json.load(file)

# # Load the model
# model_data = torch.load("data.pth")
# input_size = model_data["input_size"]
# hidden_size = model_data["hidden_size"]
# output_size = model_data["output_size"]
# all_words = model_data["all_words"]
# tags = model_data["tags"]
# model_state = model_data["model_state"]

# model = NeuralNet(input_size, hidden_size, output_size)
# model.load_state_dict(model_state)
# model.eval()

# bot_name = "Mohamed"

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/get_response", methods=["POST"])
# def get_response():
#     user_input = request.form["user_input"].strip()
#     if not user_input:
#         return jsonify({"message": "User input is empty"})

#     if user_input.lower() == "quit":
#         return jsonify({"message": "Bot: Goodbye!"})

#     # Process user input
#     sentence = tokenize(user_input)
#     X = bag_of_words(sentence, all_words)
#     X = X.reshape(1, X.shape[0])
#     X = torch.from_numpy(X)

#     # Get model prediction
#     output = model(X)
#     _, predicted = torch.max(output, dim=1)
#     tag = tags[predicted.item()]

#     # Get the probability corresponding to the predicted tag
#     probs = torch.softmax(output, dim=1)
#     prob = probs[0][predicted.item()]

#     # Set threshold for bot response
#     threshold = 0.75

#     # Check if probability is above threshold
#     if prob.item() > threshold:
#         # Find the appropriate response for the predicted tag
#         for intent in intents["intents"]:
#             if intent["tag"] == tag:
#                 response = random.choice(intent["responses"])
#                 break
#     else:
#         response = "I do not understand..."

#     return jsonify({"message": response})

# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, render_template, request, jsonify, session
# import torch
# from model import NeuralNet
# from nltk_ import bag_of_words, tokenize
# import random
# import json

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'  # Set a secret key for session management
# app.config['SESSION_COOKIE_SAMESITE'] = 'None'

# # Load the intents data
# with open("intents.json", "r") as file:
#     intents = json.load(file)

# # Load the model
# model_data = torch.load("data.pth")
# input_size = model_data["input_size"]
# hidden_size = model_data["hidden_size"]
# output_size = model_data["output_size"]
# all_words = model_data["all_words"]
# tags = model_data["tags"]
# model_state = model_data["model_state"]

# model = NeuralNet(input_size, hidden_size, output_size)
# model.load_state_dict(model_state)
# model.eval()

# bot_name = "Mohamed"

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/get_response", methods=["POST"])
# def get_response():
#     user_input = request.form["user_input"].strip()
#     if not user_input:
#         return jsonify({"message": "User input is empty"})

#     if user_input.lower() == "quit":
#         return jsonify({"message": "Bot: Goodbye!"})

#     # Process user input
#     sentence = tokenize(user_input)
#     X = bag_of_words(sentence, all_words)
#     X = X.reshape(1, X.shape[0])
#     X = torch.from_numpy(X)

#     # Get model prediction
#     output = model(X)
#     _, predicted = torch.max(output, dim=1)
#     tag = tags[predicted.item()]

#     # Get the probability corresponding to the predicted tag
#     probs = torch.softmax(output, dim=1)
#     prob = probs[0][predicted.item()]

#     # Set threshold for bot response
#     threshold = 0.75

#     # Check if probability is above threshold
#     if prob.item() > threshold:
#         # Find the appropriate response for the predicted tag
#         for intent in intents["intents"]:
#             if intent["tag"] == tag:
#                 response = random.choice(intent["responses"])
#                 break
#     else:
#         response = "I do not understand..."

#     return jsonify({"message": response})

# if __name__ == "__main__":
#     app.run(debug=True)


# from flask import Flask, render_template, request, jsonify, session
# import torch
# from model import NeuralNet
# from nltk_ import bag_of_words, tokenize
# import random
# import json

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'  # Set a secret key for session management
# app.config['SESSION_COOKIE_SAMESITE'] = 'None'

# # Load the intents data
# with open("intents.json", "r") as file:
#     intents = json.load(file)

# # Load the model
# model_data = torch.load("data.pth")
# input_size = model_data["input_size"]
# hidden_size = model_data["hidden_size"]
# output_size = model_data["output_size"]
# all_words = model_data["all_words"]
# tags = model_data["tags"]
# model_state = model_data["model_state"]

# model = NeuralNet(input_size, hidden_size, output_size)
# model.load_state_dict(model_state)
# model.eval()

# bot_name = "Mohamed"

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/get_response", methods=["POST"])
# def get_response():
#     user_input = request.form["user_input"].strip()
#     if not user_input:
#         return jsonify({"message": "User input is empty"})

#     if user_input.lower() == "quit":
#         return jsonify({"message": "Bot: Goodbye!"})

#     # Process user input
#     sentence = tokenize(user_input)
#     X = bag_of_words(sentence, all_words)
#     X = X.reshape(1, X.shape[0])
#     X = torch.from_numpy(X)

#     # Get model prediction
#     output = model(X)
#     _, predicted = torch.max(output, dim=1)
#     tag = tags[predicted.item()]

#     # Get the probability corresponding to the predicted tag
#     probs = torch.softmax(output, dim=1)
#     prob = probs[0][predicted.item()]

#     # Set threshold for bot response
#     threshold = 0.75

#     # Check if probability is above threshold
#     if prob.item() > threshold:
#         # Find the appropriate response for the predicted tag
#         for intent in intents["intents"]:
#             if intent["tag"] == tag:
#                 response = random.choice(intent["responses"])
#                 break
#     else:
#         response = "I do not understand..."

#     return jsonify({"message": response})

# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, render_template, request, jsonify, session
# import torch
# from model import NeuralNet
# from nltk_ import bag_of_words, tokenize
# import random
# import json

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'  # Set a secret key for session management
# app.config['SESSION_COOKIE_SAMESITE'] = 'None'

# # Load the intents data
# with open("intents.json", "r") as file:
#     intents = json.load(file)

# # Load the model
# model_data = torch.load("data.pth")
# input_size = model_data["input_size"]
# hidden_size = model_data["hidden_size"]
# output_size = model_data["output_size"]
# all_words = model_data["all_words"]
# tags = model_data["tags"]
# model_state = model_data["model_state"]

# model = NeuralNet(input_size, hidden_size, output_size)
# model.load_state_dict(model_state)
# model.eval()

# bot_name = "Mohamed"

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/get_response", methods=["POST"])
# def get_response():
#     user_input = request.form["user_input"].strip()
#     if not user_input:
#         return jsonify({"message": "User input is empty"})

#     if user_input.lower() == "quit":
#         return jsonify({"message": "Bot: Goodbye!"})

#     # Process user input
#     sentence = tokenize(user_input)
#     X = bag_of_words(sentence, all_words)
#     X = X.reshape(1, X.shape[0])
#     X = torch.from_numpy(X)

#     # Get model prediction
#     output = model(X)
#     _, predicted = torch.max(output, dim=1)
#     tag = tags[predicted.item()]

#     # Get the probability corresponding to the predicted tag
#     probs = torch.softmax(output, dim=1)
#     prob = probs[0][predicted.item()]

#     # Set threshold for bot response
#     threshold = 0.75

#     # Check if probability is above threshold
#     if prob.item() > threshold:
#         # Find the appropriate response for the predicted tag
#         for intent in intents["intents"]:
#             if intent["tag"] == tag:
#                 response = random.choice(intent["responses"])
#                 break
#     else:
#         response = "I do not understand..."

#     return jsonify({"message": response})

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify, session,send_from_directory
import torch
import os
from model import NeuralNet
from nltk_ import bag_of_words, tokenize
import random
import json

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Set a secret key for session management
app.config['SESSION_COOKIE_SAMESITE'] = 'None'

# Load the intents data
with open("intents.json", "r") as file:
    intents = json.load(file)

# Load the model
model_data = torch.load("data.pth")
input_size = model_data["input_size"]
hidden_size = model_data["hidden_size"]
output_size = model_data["output_size"]
all_words = model_data["all_words"]
tags = model_data["tags"]
model_state = model_data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size)
model.load_state_dict(model_state)
model.eval()

bot_name = "Mohamed"


@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"].strip()
    if not user_input:
        return jsonify({"message": "User input is empty"})

    if user_input.lower() == "quit":
        return jsonify({"message": "Goodbye!"})

    # Process user input
    sentence = tokenize(user_input)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X)

    # Get model prediction
    output = model(X)
    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]

    # Get the probability corresponding to the predicted tag
    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]

    # Set threshold for bot response
    threshold = 0.75

    # Check if probability is above threshold
    if prob.item() > threshold:
        # Find the appropriate response for the predicted tag
        for intent in intents["intents"]:
            if intent["tag"] == tag:
                response = random.choice(intent["responses"])
                break
    else:
        response = "I do not understand..."

    return jsonify({"message": response})

if __name__ == "__main__":
    app.run(debug=True)

