from math import log10

HALF_LIFE = 45000 # half-life of a post's score is 12.5 hours


def weight(likes, dislikes, postTime, startTime):
    seconds = (startTime - postTime) / 1000
    likeScore = likes - dislikes
    order = log10(max(abs(likeScore), 1))
    sign = 1 if likeScore > 0 else 0 if likeScore == 0 else -1

    return round(sign * order + seconds / HALF_LIFE, 7)

