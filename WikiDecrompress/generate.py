import os
import io
import json

def segregate(fileLoc, letter):
    # creates array of indeces for the file
    chunks = {}
    # opens file of chunks
    opened = io.open(fileLoc,"r", encoding='utf8')
    
    # iterates through file and parses each line
    # if an index in the array is the same as the next lines's index, break
    # if it is the same, append the new index to the lest
    for line in opened:
        lineTextInList = line.split(":", 2)
        if lineTextInList[2][0].lower() == letter:
            chunks[lineTextInList[2].strip()] = lineTextInList[0]

    opened.close()
    return chunks

def loadToJSON(array, letter):
    json.dump(array, open(letter+".json", "w+"))

# def decompress(index):

def render():
    decompressTo = input("Article name:")
    articleIndex = locateIndex(decompressTo)
    # decompress(articleIndex)
    indexList = segregate("C:\\Users\\Hagar\\Desktop\\Wikipedia\\enwiki-20191101-pages-articles-multistream-index.txt", letter)
    # loadToJSON(indexList)//not necessary anymore

# render()
# os.remove("C:\\Users\\Hagar\\Desktop\\wikipediaSelection.txt")
