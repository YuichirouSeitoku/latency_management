import time
class Timer:
    
    def setTime(self,second):
        self.second=second
        self.start=time.time()
    def getTime(self):
        return self.second-(time.time()-self.start)