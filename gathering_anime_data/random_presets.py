import random
import os

FILE_PATH = os.path.dirname(__file__)
RANDOM_PRESETS = os.path.join(FILE_PATH, "random_presets/")

def list_to(max): # 1 to max
    return list(range(1, max+1))

def create_random_order(seed, length):
    random.seed(seed)
    order = []
    id_list = list_to(length)
    random.shuffle(id_list)
    # length = len(id_list)
    # while(length > 0):
    #     next = int(random.random() * (length - 1))
    #     order.append(id_list.pop(next))
    #     length -= 1
    return id_list

def write_order(seed, length):
    fpath = os.path.join(RANDOM_PRESETS, f"{seed}.txt")
    order = create_random_order(seed, length)
    with open(fpath, "w") as file:
        for id in order:
            file.write(f"{id}\n")

def confirm_1000(fname):
    with open(os.path.join(RANDOM_PRESETS, fname), "r") as file:
        all = sorted([int(line.strip()) for line in file])
        to_1000 = list_to(1000)
        if all == to_1000:
            print("All 1000 elements are present!")
        else:
            print("Values do not match!!")
            for index, a in enumerate(all, start=1):
                print(f"index {index} -> a:{a} b:{to_1000[index-1]}")

write_order(1380729, 1000)
write_order(29852731, 1000)
write_order(32859871, 1000)
write_order(4982729739, 1000)
write_order(9387128740, 1000)
write_order(529567109, 1000)
# confirm_1000("1380729.txt")
# confirm_1000("29852731.txt")
# confirm_1000("32859871.txt")
# confirm_1000("4982729739.txt")
# confirm_1000("9387128740.txt")
# confirm_1000("529567109.txt")