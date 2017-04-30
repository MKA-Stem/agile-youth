def heapSort(numList):
    """Heap Sort Algorithm"""
    for start in range((len(numList) - 2) / 2, -1, -1):
        siftdown(numList, start, len(numList) - 1)

    for end in range(len(numList) - 1, 0, -1):
        numList[end], numList[0] = numList[0], numList[end]
        siftdown(numList, 0, end - 1)
    return numList


def siftdown(numList, start, end):
    """Requisite for Heap Sort"""
    root = start
    while True:
        child = root * 2 + 1
        if child > end: break
        if child + 1 <= end and numList[child] < numList[child + 1]:
            child += 1
        if numList[root] < numList[child]:
            numList[root], numList[child] = numList[child], numList[root]
            root = child
        else:
            break
