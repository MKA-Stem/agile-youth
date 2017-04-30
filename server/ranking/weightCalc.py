from datetime import time
from math import log

currentTimeMilli = lambda: int(round(time.time() * 1000))

HALF_LIFE = 45000 # half-life of a post's score is 12.5 hours


def weight(likes, dislikes, postTime):
    seconds = (currentTimeMilli() - postTime) / 1000
    likeScore = likes - dislikes
    order = log(max(likeScore, 1), 10)
    sign = 1 if likeScore > 0 else 0 if likeScore == 0 else -1
    round(sign * order + seconds / HALF_LIFE, 7)

