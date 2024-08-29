# Bash Advance (Laisha)

## Bash

Bash is `Command Line Interepreter` language that lets you interact with your `Operating System`.

1. `pwd` (Print Working Directory): Display the current working directory

   ```sh
   $ pwd
   ```

2. `ls` (List Fies): This command displays a list of files and directories in the current directories.

   ```sh
   $ ls  // Give list of all files and folders
   $ ls -l // Gives list of all files and folders along with the details
   $ ls -l new_folder // Gives list of all the files and folder with new_folder
   $ ls -t // list of files and folders with last modified date
   $ ls -lt // list of files and folders along with deatils as well as last modified date
   $ ls -R // Gives list of all the directories along with sub directories
   $ ls -lR // list of files and folders with details and sub directories
   $ ls -la // list of files and folders which are hidden
   $ ls -lr // list of files and folders in reverse manner
   $ ls -s  // list of files and folders based on size
   $ ls *.json // Gives only those files which are having .json extension
   $ ls Zoo* // Gives only those files which are having Zoo
   $ ls -lR | grep .json // Gives list of directories and sub directories with .json extension
   $ ls .. // Gives the list of files and folder at parent directory
   ```

3. `cd`: Change Directory

   ```sh
   $ cd folder1
   $ cd folder2/folder3
   $ cd ../../
   ```

4. `mkdir` (Make Directory): Command to create new directory/folder.

   ```sh
   <!-- Creating one folder/directory at a time -->
   $ mkdir frontend

   <!-- Creating multiple folder/directory at a time -->
   $ mkdir folder1 folder2 folder3

   <!-- Creating Recursively folder/directory -->
   $ mkdir -p fullstack/frontend/scripts

   <!-- Creating folder/directory and navigating at the same time -->
   $ mkdir practice && cd practice
   ```

5. `touch`: Command to create new file.

   ```sh
   <!-- Creating one file at a time -->
   $ touch newFile.js

   <!-- Creating multiple file at a time -->
   $ touch file1 file2 file3

   <!-- Creating Recursively file -->
   $ touch practice/test/muskan.txt
   ```

6. `cat` (Concatenate): Command to display the contents of a file, insert and append contents to the file.

   ```sh
   <!-- Insert Data to File -->
   $ cat > newFile.js

   <!-- Append Data to File -->
   $ cat >> newFile.js

   <!-- Print Data of the File File -->
   $ cat newFile.js
   ```

7. `mv` (Move File/Folder & Rename File/Folder): Command to move File or Folder one directory/folder to another directory/folder and it is also used to rename File or Folder.

   ```sh
   <!-- Moving File to Another Folder/Directory -->
   mv index.js frontend

   <!-- Moving Folder to Another Folder/Directory -->
   mv folder1 folder2

   <!-- Renaming File -->
   mv index.js script.js

   <!-- Renaming Folder -->
   mv folder1 folder2
   ```

8. `cp` (Copy File or Folder/Directory): Command to copy File or Folder into another Folder/Directory.

   ```sh
   <!-- Copy File to Another Folder/Directory -->
   cp index.js frontend

   <!-- Copy Folder to Another Folder/Directory -->
   cp -r folder1 frontend
   ```

9. `rm` (Remove File or Folder/Directory): Command to Remove File or Folder/Directory.

   ```sh
   <!-- Remove File -->
   rm index.js

   <!-- Remove Empty Folder/Directory -->
   rmdir folderName

   <!-- Remove Empty Folder/Directory of Folder with Content -->
   rm -rf folderName
   ```

10. `chmod` (Change File Permission): Modify the read, write and execute permission of a file.

    ```js
    ## There are three options for permission groups available to you in Linux. These are

    `users` (u): these permissions will apply to all users, and as a result, they present the greatest security risk and should be assigned with caution.

    `groups` (g): you can assign a group of users specific permissions, which will only impact users within the group.

    `owners` (o): these permissions will only apply to owners and will not affect other groups.


    ## There are three kinds of file permissions in Linux:

    `Read` (r): Allows a user or group to view a file.

    `Write` (w): Permits the user to write or modify a file or directory.

    `Execute` (x): A user or group with execute permissions can execute a file or view a directory.

    $ `chmod ugo+rwx filename` to give read, write, and execute to everyone.
    $ `chmod -R ugo+rwx foldername` to give read, write, and execute to everyone.

    ## Changing Linux permissions in numeric code

    You may need to know how to change permissions in numeric code in Linux, so to do this you use numbers instead of “r”, “w”, or “x”.

    0 = No Permission
    1 = Execute
    2 = Write
    4 = Read

    => Permission numbers are:
    0 = ---
    1 = --x
    2 = -w-
    3 = -wx
    4 = r-
    5 = r-x
    6 = rw-
    7 = rwx

    => For example:
        `chmod 777 filename/foldername` will give read, write, and execute permissions for everyone.

        `chmod 700 filename/foldername` will give read, write, and execute permissions for the user only.

        `chmod 327 filename/foldername` will give write and execute (3) permission for the user, w (2) for the group, and read, write, and execute for the users.
    ```

    ```sh
    <!--For Example -->
    <!-- For File -->
    <!-- Add execute permission for users -->
    $ chmod u+x index.js
    <!-- Add write and execute permission for groups -->
    $ chmod g+wx index.js
    <!-- Remove execute permission for users -->
    $ chmod u-x index.js
    <!-- Add read, write & execute permission for owners -->
    $ chmod o+rwx index.js
    <!-- Add read, write & execute permission for all(users, groups & owners) -->
    $ chmod ugo+rwx index.js
    $ chmod 777 index.js

    <!-- For Folder/Directory -->
    <!-- Add execute permission for users -->
    $ chmod -R u+x folderName
    <!-- Add write and execute permission for groups -->
    $ chmod -R g+wx folderName
    <!-- Remove execute permission for users -->
    $ chmod -R u-x folderName
    <!-- Add read, write & execute permission for owners -->
    $ chmod -R o+rwx folderName
    <!-- Add read, write & execute permission for all(users, groups & owners) -->
    $ chmod -R ugo+rwx folderName
    $ chmod -R 777 folderName
    ```

11. `echo`: Display message on terminal.

    ```sh
    $ echo "Hello, World!"
    $ echo $PATH
    ```

12. `head`: Show the content from top of the file.

    ```sh
    <!-- Bydefault show first 10 rows -->
    $ head index.js

    <!-- Show first 20 rows -->
    $ head -20 index.js
    ```

13. `tail`: Show the content from bottom of the file.

    ```sh
    <!-- Bydefault show last 10 rows -->
    $ tail index.js

    <!-- Show last 20 rows -->
    $ tail -20 index.js
    ```

14. `|` (Pipe Operator): Combine multiple command. `command1 | command2` - Whatever output comes from command1 it flows to command2

    ```sh
    <!-- gives 5 rows after 15th rows - means shows lines 16 to 20 -->
    $ tail -n +15 index.js | head -5
    ```

15. `wc` (Word Cound): Shows numbers of lines, words and characters.

    ```sh
    <!-- print numbers of lines, words and characters of index.js file -->
    $ wc index.js
    ```

16. `grep`: Use for matching operations. Print those line which contains particular characters, words, sentences.

    ```sh
    <!-- print all line which contains character 'a' -->
    $ grep "a" index.js

    <!-- print all line which contains word 'Hello' -->
    $ grep "Hello" index.js

    <!-- print all line which contains sentence 'Hi, Everyone!!' -->
    $ grep "Hi, Everyone!!" index.js

    <!-- Print all lines which does not contains Muskan -->
    $ grep -v "Muskan" index.js

    <!-- Print before 5 lines, which line contains Muskan -->
    $ grep -B 5 "Muskan" data.txt

    <!-- Print after 5 lines, which line contains Muskan -->
    $ grep -A 5 "Muskan" data.txt

    <!-- Print before and after 5 lines, which line contains Muskan -->
    $ grep -C 5 "Muskan" data.txt

    <!-- print numbers of lines, words and characters of index.js file which contains word "Muskan" -->
    $ grep "Muskan" index.js | wc

    <!-- only occurence of a parthicular word -->
    $ grep "Muskan" index.js | wc -l

    <!-- Print Occurence Count -->
    $ grep -c "Muskan" index.js

    <!-- Print Matched Line -->
    $ grep -h "Muskan" index.js

    <!-- ignore case -->
    $ grep -hi "Muskan" index.js

    <!-- Print matched line data after ignoring case with line number -->
    $ grep -hin "Muskan" index.js

    <!-- Print those line which contains word "Muskan" -->
    $ grep -hinw "Muskan" index.js

    <!-- Print only the matched Part -->
    $ grep -o "Muskan" index.js

    <!-- For current directory -->
    $ grep -hir "Muskan" index.js
    ```

17. `history`: History of all command that you ran.

    ```sh
    $ history
    ```

18. `Bash Scripting`: Using Bash Scripting we can Automate our work. It is a language.

    ```sh
    <!-- script.sh -->

    #!/bin/bash
    echo "Hello, World!!"
    mkdir automated_dir
    cd automated_dir && touch newFile.txt
    ```

19. `bash`: Command to run bash scripting file.

    ```sh
    <!-- Run the script.sh file - first it will print "Hello, World", then it will create a folder autemated_dir and after that it will move to automated_dir folder and create newFile.txt inside that folder. -->
    $ bash script.sh
    ```

20. `clear`: Clear the terminal

    ```sh
    $ clear
    ```

21. `nvm`: Node Version Manager - Using this you can install node.

22. `npm`: Node Package Manager

    ```sh
    $ npm install express
    $ npm install array
    ```

23. `node fileName.js`: Use to run file.
    ```sh
    $ node index.js
    ```

24. `sed`: Stream Editor is a powerful utility for text processing.
    ```sh
    <!-- to print lines with ERROR text -->
    $  sed -n '/ERROR/ p' filename 

    <!-- Replace ERROR with CRITICAL in the file -->
    $ sed 's/ERROR/CRITICAL' filename 

    <!-- Create a backup of the file  -->
    $ sed -ibackup 's/ERROR/CRITICAL/' filename 

    <!-- Replace CRITICAL with VERYCRITICAL in line number 3  -->
    $ sed '3 s/CRITICAL/VERYCRITICAL/' filename 

    <!-- Replace CRITICAL with VERYCRITICAL in line number 3 to line number 5 -->
    $ sed '3,5 s/ERROR/CRITICAL/' filename 
    ```

25. `awk`: The awk command is a powerful text-processing tool used for pattern scanning and processing.
    ```sh
    <!-- to print lines with ERROR text -->
    $  awk '/ERROR/{print $0}' filename 

    <!-- Replace ERROR with CRITICAL in the file -->
    $ awk '{gsub(/ERROR/, "CRITICAL")}{print}' filename 

    <!-- add text in the beginning and ending of a file -->
    $ awk 'BEGIN {print "LOG SUMMARY\n--------------"} {print} END {print "--------------\nEND OF LOG SUMMARY"}' filename

    <!-- Print 1st and the 2nd column of the data (file)  -->
    $ awk '{print $1, $2}' filename 

    <!-- Count the occurance of ERROR in second column of the file -->
    $ awk '{count[$2]++} END {print count["ERROR]}' filename 

    <!-- view the rows after 1598863888 timestamp in first column -->
    $ awk '{ if ($1 > 1598863888 ) {print $0} }' log.txt 
    ```
