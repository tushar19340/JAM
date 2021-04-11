import os.path

def delete_file(meri_file_path):
	if (os.path.exists(file_path)):
		os.remove(file_path)
		print("file has been removed")


def rename_file(meri_file_path, new_name):
	if (os.path.exists(meri_file_path)):
		#new_file_name = meri_file_path[:-13] + new_name
		new_file_name = "./yo/" + new_name
		os.rename(meri_file_path, new_file_name)
		print("file has been renamed")


#file_path = "D:/COLLEGE/sem4/DIS/file delete python script/singer.mp3"
#file_path2 = "D:/COLLEGE/sem4/DIS/file delete python script/singer(1).mp3"

file_path = "./yo/singer.mp3"
file_path2 = "./yo/singer (1).mp3"



if (os.path.exists(file_path2)):
	delete_file(file_path)
	rename_file(file_path2,"singer.mp3")