#参考にしたサイト https://news.mynavi.jp/article/zeropython-30/
#あとでReadmeに追記 pip install qrcode

import qrcode

hudaNames = {
    "akino":"127.0.0.1:5000/akino",
    "haruno":"127.0.0.1:5000/haruno",
    "ashi":"127.0.0.1:5000/ashi",
    "tago":"127.0.0.1:5000/tago",
    "oku":"127.0.0.1:5000/oku",
    "kasa":"127.0.0.1:5000/kasa",
    "amano":"127.0.0.1:5000/amano",
    "wagai":"127.0.0.1:5000/wagai",
    "hanano":"127.0.0.1:5000/hanano",
    "kore":"127.0.0.1:5000/kore"
}

for hudaName in hudaNames:
    print(hudaName)
    print(hudaNames[hudaName])
    img = qrcode.make(hudaNames[hudaName])
    img.save('./qrcode_data/'+hudaName+'.png')
