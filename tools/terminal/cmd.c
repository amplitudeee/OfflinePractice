whoami   // Show current logged in user
uname    // Show system information
date     // Show date
/sbin    // directory in linux
!!       // Repeats last command
![string]// Repeats last command starting with string
''  // Used to escape special characters in file names
""  // Used to preserve the literal value of characters within the quotes
\   // Used to escape a single character
``  // Command substitution - allows the output of a command to replace the command itself
; 	// Allows multiple commands on one line
&& 	// Allows multiple commands on one line, but only if the previous command succeeded
|| 	// Allows multiple commands on one line, but only if the previous command failed
|   // Allows the output of one command to be used as input for another command (pipe)
[str] > [filename]  // redirection operator, sets output to new file
[str] >> [filename] // append operator, appends to file

// FILE SYSTEM NAVIGATION
pwd //Lists the path to the working directory
ls 	// List directory contents
  // -a 	List contents including hidden files (Files that begin with a dot)
  // -l 	List contents with more info including permissions (long listing)
  // -r 	List contents reverse order
  // -h   List contents in human readable format (e.g., 1K, 234M, 2G)
  // --help   Show help for ls command
echo [option] // echo prints to terminal
  // *     Show all files in current directory
  // *.txt Show all .txt files in current directory
  // *s    Show all files ending with s in current directory
  // s*    Show all files starting with s in current directory
  // ????  Show all files with 4 characters in current directory
cd               // Change directory to home
  // cd [dirname] | Change directory to specific directory
  // cd .. 	      | Change to parent directory
  // cd - 	      |Change to previous directory (which could be different than the parent of course)
find [dirtosearch] -name [filename] // Find location of a program
locate [filename]   // Locate file in system database
grep [option] [pattern] [file(s)] // look for character in file, pattern is what were looking for, ',' is an example of looking for a comma in a file
  // -n | line number of every instance)
  // -r | recursively search every file in CD and all subdirectories)
head [filename] // Display first 10 lines of file
tail [filename] // Display last 10 lines of file
clear // Clears terminal

// MODIFYING FILES AND DIRECTORIES
curl [url]        // Download files found at specific url
mkdir [dirname]   // Make directory
touch [filename]  // Create file
rm [option] [filename] //	Remove file
  // -f [filename]  Remove file without asking are you sure question
  // -i [filename] 	Remove directory, but ask before
  // -r [dirname] 	Remove directory, no questions bitch
  // -rf [dirname] 	Remove directory with contents
  // ./* 	*/        Remove everything in the current folder
cp [filename] [dirname] 	Copy file
  // -r [filename] [dirname]  Copy directory and its contents
  // [filename] . 	Copy file to current directory
mv [filename] [dirname] 	Move file from current directory
  // mv [dirname] [dirname] 	Move directory from current directory
  // mv [filename] [filename] 	Rename file or folder
  // mv [filename] [filename] -v 	Rename Verbose - print source/destination directory
sort [filename] // sort file contents alphabetically (A-Z) line by line
  // -r | reverse
  // -n | numeric
type [filename]   // Show content of file
cat [filename] 	  // Display contents of file
uniq [filename]   // Removes duplicate lines from file

// USER GROUP MANAGEMENT
userdel [username] 	    // Delete user account
groupdel [groupname]    // Delete group
usermod [options] [username] // Modify user account
adduser [username] 	    // Add user account
view [filename] 	      // View file with pagination
passwd 	                // Change user password
chown [user] [filename] 	        // Change ownership of file
chown [user]:[group] [filename] 	// Change ownership and group of file

created.sql 	Create SQL database
psql -u [username] -d [database] 	Access SQL database

// LINUX COMMAND HELP
info              // Basic Commands Reference Guide
whatis [command]  // Show short description of command
[command] --help  // Show larger description of command
man [option] [command]  // Show full manual of command
  // 5 [command]   // Show manual of file type
  // -k [keyword]  // Search manual pages for keyword
  ///////////// INSIDE MANUAL //////////////////////
    // / search in manual
    // q //quit manual
    // Shift + n //next search result in manual
    // n next search result in manual
    // Shift + p //previous search result in manual
info [command]    // GNU-style hyperlinked docs, more detailed than man
whereis [command]   // Show location of command   
type -a [command]   // Show all locations of command
which [command]     // Show path of command

// TBS COMMANDS
variable=value 	// Set environment variable
unset variable 	//Unset environment variable
export variable=value 	Set environment variable for child processes
env     Show all environment variables
|  Pipe output of one command to another command
PATH=/my/custom/path:$PATH 	Add custom path to PATH variable
nano ~/.bashrc     Edit bashrc file to make aliases and environment variables permanent
alias name='command' 	Create alias for command
source ~/.bashrc   Reload bashrc file to apply changes made
wc [filename] // counts: [lines] [words] [bytes] [filename]
wc [option] [filename]
  // -l | linecount
  // -w | wordcount
  // -c | byte count
  // -m | char count

// FUNCTIONS
Function_name () {
    command1
    command2
}

// TAR COMMAND REFERENCE
tar [options] [archive_name] [file(s)/directory_name]
  c (create) t (list) x (extract) v (verbose) f (file) z (gzip)
  // -cvf archive_name.tar directory_name   Create tar archive
  // -tvf archive_name.tar   List contents of tar archive
  // -xvf archive_name.tar   Extract tar archive
  // -zcvf archive_name.tar.gz directory_name   Create gzip compressed tar archive
  // -ztvf archive_name.tar.gz   List contents of gzip compressed tar archive
  // -zxvf archive_name.tar.gz   Extract gzip compressed tar archive
  // -rvf archive_name.tar file_name   Append file to tar archive
zip [options] [archive_name] [file(s)/directory_name]
  // -r archive_name.zip directory_name   //Create zip archive
  // unzip archive_name.zip   //Extract zip archive
bz2 [bzip2 compression]

// FILE PERMISSIONS
-        // is a file
d        // is a directory
chmod [group][operator][whatdo] [filename]
  u (user/owner) g (group) o (others) a (all) // group
  + (add permission) - (remove permission) = (set permission) // operator
  r (Read) w (write) x (execute) // what do
  // o-rx [fn]     | drwxrwx(---)     Remove read and execute permissions for others
  // a+x [fn]      | drw(x)rw(x)rw(x) Add execute permission for all
  // g-w [fn]      | drwxr(-)xrwx     Remove write permission for group
  // go+r [fn]     | drwx(r)wx(r)wx   Add read permission for group and others
  // o=rx [fn]     | drwxrwx(r)w(x)   Set read and execute permissions for others only
  // o+w [fn]      | drwxrwxr(w)x     Add write permission for others
  // g-rw,o-r [fn] | drw(------)      Remove read and write permissions for group and others
  // a=rw [fn]     | d(rw)x(rw)x(rw)x Set read and write permissions for all, remove execute permissions
  // u+x [fn]      | drw(x)rw-rw-     Add execute permission for user
7 (Read, Write, Execute) 6 (Read, Write) 5 (Read, Execute) 4 (Read) 3 (Write, Execute) 2 (Write) 1 (Execute) 0 (No Permission)
  // 755 [fn]      | drwxr-xr-x       Set permissions using numeric notation
  // 744 [fn]      | drwxr--r--       
  // 777 [fn]      | drwxrwxrwx 
  // 644 [fn]      | drw-r--r-- 