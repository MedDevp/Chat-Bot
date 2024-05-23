import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np
# nltk.download('punkt')
#nltk.download('punkt')
stemmer = PorterStemmer()

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stem(word):
    return stemmer.stem(word.lower())

def bag_of_words(tokensized_sentence , all_words):
    tokensized_sentence = [stem(w) for w in tokensized_sentence]
    bag = np.zeros(len(all_words),dtype=np.float32)
    for index , w in enumerate(all_words):
        if w in tokensized_sentence:
            bag[index]=1.0
    return bag
