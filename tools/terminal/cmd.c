info //Basic Commands Reference Guide
info [command]   //show info of command
[command] --help  //show help of command
man [command]        //show manual of commmand mac
whatis [command]    //show short description of command
whereis [command]    //show location of command
man 5 [command]   //show manual of file type
man -k [keyword]   //search manual pages for keyword
    / //search in manual
    q //quit manual
    Shift + n //next search result in manual
    n //next search result in manual
    Shift + p //previous search result in manual    
whoami        //show current logged in user
uname       //show system information
date          //show date
pwd         //show current directory print working directory
sbin          //
-           // is a file
d           // is a directory
type filename   //show content of file
type -a command   //show all locations of command
which command   //show path of command
locate filename   //locate file in system database
echo *       //show all files in current directory
echo *.txt   //show all .txt files in current directory
echo *s  //show all files ending with s in current directory
echo s*  //show all files starting with s in current directory
echo ????  //show all files with 4 characters in current directory


//File System Navigation
pwd 	Lists the path to the working directory
ls 	List directory contents
ls -a 	List contents including hidden files (Files that begin with a dot)
ls -l 	List contents with more info including permissions (long listing)
ls -r 	List contents reverse order
ls -h   List contents in human readable format (e.g., 1K, 234M, 2G)
ls --help   Show help for ls command
cd 	Change directory to home
cd [dirname] 	Change directory to specific directory
cd  	Change to home directory
cd .. 	Change to parent directory
cd - 	Change to previous directory (which could be different than the parent of course)
find [dirtosearch] -name [filename] 	Find location of a program
clear   Clears terminal

//Modifying Files and Directories
curl [url]          download files found at specific url
touch [filename]    make a file
mkdir [dirname] 	Make directory
touch [filename] 	Create file
rm [filename] 	Remove file
rm -f [filename] Remove file without asking are you sure question
rm -i [filename] 	Remove directory, but ask before
rm -r [dirname] 	Remove directory
rm -rf [dirname] 	Remove directory with contents
rm ./* 	*/Remove everything in the current folder
cp [filename] [dirname] 	Copy file
cp -r [filename] [dirname]  Copy directory and its contents
cp [filename] . 	Copy file to current directory
mv [filename] [dirname] 	Move file
mv [dirname] [dirname] 	Move directory
mv [filename] [filename] 	Rename file or folder
mv [filename] [filename] -v 	Rename Verbose - print source/destination directory
'' - Used to escape special characters in file names
"" - Used to preserve the literal value of characters within the quotes
\ - Used to escape a single character
`` - Command substitution - allows the output of a command to replace the command itself
; 	Allows multiple commands on one line
&& 	Allows multiple commands on one line, but only if the previous command succeeded
|| 	Allows multiple commands on one line, but only if the previous command failed
|   Allows the output of one command to be used as input for another command (pipe)
cat [filename] 	Display contents of file
head [filename] 	Display first 10 lines of file
tail [filename] 	Display last 10 lines of file

//User and Group Management
userdel [username] 	Delete user account
groupdel [groupname] 	Delete group
usermod [options] [username] 	Modify user account
adduser [username] 	Add user account
view [filename] 	View file with pagination
passwd 	Change user password
chown [user] [filename] 	// Change ownership of file
chown [user]:[group] [filename] 	// Change ownership and group of file

created.sql 	Create SQL database
psql -u [username] -d [database] 	Access SQL database

//TBS commands

!!  Repeats last command
![string]  Repeats last command starting with string
variable=value 	Set environment variable
unset variable 	Unset environment variable
export variable=value 	Set environment variable for child processes
env     Show all environment variables
|  Pipe output of one command to another command
grep [string] 	Search for string in output - grep means global regular expression print
PATH=/my/custom/path:$PATH 	Add custom path to PATH variable
nano ~/.bashrc     Edit bashrc file to make aliases and environment variables permanent
alias name='command' 	Create alias for command
source ~/.bashrc   Reload bashrc file to apply changes made

//Functions
Function_name () {
    command1
    command2
}

// tar Command Reference
tar (options) [archive_name] [file(s)/directory_name]
zip (options) [archive_name] [file(s)/directory_name]
bz2 (bzip2 compression)
c (create) t (list) x (extract) v (verbose) f (file) z (gzip)
tar -cvf archive_name.tar directory_name   //Create tar archive
tar -tvf archive_name.tar   //List contents of tar archive
tar -xvf archive_name.tar   //Extract tar archive
tar -zcvf archive_name.tar.gz directory_name   //Create gzip compressed tar archive
tar -ztvf archive_name.tar.gz   //List contents of gzip compressed tar archive
tar -zxvf archive_name.tar.gz   //Extract gzip compressed tar archive
tar -rvf archive_name.tar file_name   //Append file to tar archive
zip -r archive_name.zip directory_name   //Create zip archive
unzip archive_name.zip   //Extract zip archive

// File Permissions
chmod //Change file permissions

u (user/owner) g (group) o (others) a (all)
+ (add permission) - (remove permission) = (set permission)
r (Read) w (write) x (execute)
drwxrwx(---)    chmod o-rx filename   //Remove read and execute permissions for others
drw(x)rw(x)rw(x)chmod a+x filename   //Add execute permission for all
drwxr(-)xrwx    chmod g-w filename   //Remove write permission for group
drwx(r)wx(r)wx  chmod go+r filename   //Add read permission for group and others
drwxrwx(r)w(x)  chmod o=rx filename   //Set read and execute permissions for others only
drwxrwxr(w)x    chmod o+w filename   //Add write permission for others
drw(------)     chmod g-rw,o-r filename   //Remove read and write permissions for group and others
d(rw)x(rw)x(rw)xchmod a=rw filename   //Set read and write permissions for all, remove execute permissions
drw(x)rw-rw-    chmod u+x filename   //Add execute permission for user
7 (Read, Write, Execute) 6 (Read, Write) 5 (Read, Execute) 4 (Read) 3 (Write, Execute) 2 (Write) 1 (Execute) 0 (No Permission)
drwxr-xr-x    chmod 755 filename   //Set permissions using numeric notation
drwxr--r--    chmod 744 filename   //Set permissions using numeric notation
drwxrwxrwx    chmod 777 filename   //Set permissions using numeric notation
drw-r--r--    chmod 644 filename   //Set permissions using numeric notation