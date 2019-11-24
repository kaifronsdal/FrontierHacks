import os
import io
import json
import bz2
import sys

def locateIndex(name):
    firstLetter = name[0].lower()
    opened = io.open(firstLetter+".json","r", encoding='utf8')
    tempDict = json.load(opened)
    return tempDict.get(name, "Not an article. Please enter another.")

def decompress(index):
# Get the size of the compressed bzip2 file.
    path = "sys.argv[1]"

    # Decompress chunk bytes at a time.
    dec = bz2.BZ2Decompressor()
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(chunk), b''):
            # feed chunk to decompressor
            got = proc(chunk)

            # handle case of concatenated bz2 streams
            if dec.eof:
                rem = dec.unused_data
                dec = bz2.BZ2Decompressor()
                got += proc(rem)

def proc(input):
    #Decompress and process a piece of a compressed stream
    dat = dec.decompress(input)
    got = len(dat)
    if got != 0:    # 0 is common -- waiting for a bzip2 block
        # process dat here
        pass
    return got

def render():
    decompressTo = input("Article name:")
    articleIndex = locateIndex(decompressTo)
    decompress(articleIndex)

render()