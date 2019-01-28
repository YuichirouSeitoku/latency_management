import time
class Timer:
    #テスト環境用
    def __init__(self,second):
        self.second = second
        self.start = time.time()
        self.fixedTime = 180
        
    def remaining_time(self):
        #現在の時刻ータイマースタート時の時刻＋タイマーにセットされた時間＋盛り付け等にかかる時間
        if self.second+time.time()-self.time+self.fixedTime < 0:
            return 0
        else:
            return self.second+time.time()-self.time+self.fixedTime
            #fixedTimeが機能していない