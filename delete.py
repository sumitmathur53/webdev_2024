import os
import shutil

def delete_folder_recursively(folder_name):
    current_dir = os.getcwd()
    for dirpath, dirnames, filenames in os.walk(current_dir, topdown=False):
        for name in dirnames:
            if name == folder_name:
                folder_path = os.path.join(dirpath, name)                
                try:
                    shutil.rmtree(folder_path)
                    print(f"Folder '{folder_name}' deleted successfully at: {folder_path}")
                except OSError as e:
                    print(f"Error: {folder_path} : {e.strerror}")



delete_folder_recursively('node_modules')