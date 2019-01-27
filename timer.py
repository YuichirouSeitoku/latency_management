import time
class Timer:
    def __init__(self,second):
        self.second = second
        self.start = time.time()
        
    def remaining_time(self):
        return self.second+time.time()-self.time