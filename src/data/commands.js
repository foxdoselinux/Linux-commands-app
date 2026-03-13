export const LINUX_COMMANDS = [
  {
    command: 'ls',
    description: 'List directory contents',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'ls -la /home'
  },
  {
    command: 'cd <directory>',
    description: 'Change current directory',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'cd /home/user'
  },
  {
    command: 'pwd',
    description: 'Print working directory',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'pwd'
  },
  {
    command: 'cp <source> <destination>',
    description: 'Copy files or directories',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'cp -r source/ destination/'
  },
  {
    command: 'mv <source> <destination>',
    description: 'Move or rename files',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'mv oldname.txt newname.txt'
  },
  {
    command: 'rm <file>',
    description: 'Remove files',
    category: 'file-management',
    difficulty: 'intermediate',
    example: 'rm -rf directory/'
  },
  {
    command: 'mkdir <directory>',
    description: 'Create a new directory',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'mkdir -p /path/to/dir'
  },
  {
    command: 'touch <file>',
    description: 'Create an empty file or update timestamp',
    category: 'file-management',
    difficulty: 'beginner',
    example: 'touch newfile.txt'
  },
  {
    command: 'cat <file>',
    description: 'Display file contents',
    category: 'file-viewing',
    difficulty: 'beginner',
    example: 'cat script.sh'
  },
  {
    command: 'less <file>',
    description: 'View file contents with pagination',
    category: 'file-viewing',
    difficulty: 'intermediate',
    example: 'less largefile.log'
  },
  {
    command: 'grep <pattern> <file>',
    description: 'Search for text patterns in files',
    category: 'searching',
    difficulty: 'intermediate',
    example: 'grep -r "error" .'
  },
  {
    command: 'find <path> -name <pattern>',
    description: 'Search for files by name',
    category: 'searching',
    difficulty: 'intermediate',
    example: 'find / -name "*.log"'
  },
  {
    command: 'chmod <permissions> <file>',
    description: 'Change file permissions',
    category: 'permissions',
    difficulty: 'intermediate',
    example: 'chmod 755 script.sh'
  },
  {
    command: 'chown <user>:<group> <file>',
    description: 'Change file owner and group',
    category: 'permissions',
    difficulty: 'advanced',
    example: 'chown user:group file.txt'
  },
  {
    command: 'sudo <command>',
    description: 'Execute command as superuser',
    category: 'permissions',
    difficulty: 'intermediate',
    example: 'sudo apt update'
  },
  {
    command: 'apt update && apt upgrade',
    description: 'Update and upgrade packages',
    category: 'package-management',
    difficulty: 'beginner',
    example: 'sudo apt update && sudo apt upgrade -y'
  },
  {
    command: 'apt install <package>',
    description: 'Install a package',
    category: 'package-management',
    difficulty: 'beginner',
    example: 'sudo apt install curl'
  },
  {
    command: 'apt remove <package>',
    description: 'Remove a package',
    category: 'package-management',
    difficulty: 'beginner',
    example: 'sudo apt remove curl'
  },
  {
    command: 'ps aux',
    description: 'List all running processes',
    category: 'system-management',
    difficulty: 'intermediate',
    example: 'ps aux | grep python'
  },
  {
    command: 'top',
    description: 'Display system resource usage',
    category: 'system-management',
    difficulty: 'intermediate',
    example: 'top'
  },
  {
    command: 'kill <pid>',
    description: 'Terminate a process by ID',
    category: 'system-management',
    difficulty: 'intermediate',
    example: 'kill -9 1234'
  },
  {
    command: 'df -h',
    description: 'Display disk space usage',
    category: 'system-management',
    difficulty: 'beginner',
    example: 'df -h'
  },
  {
    command: 'du -sh <directory>',
    description: 'Show directory size',
    category: 'system-management',
    difficulty: 'intermediate',
    example: 'du -sh /home'
  },
  {
    command: 'tar -czf <archive> <directory>',
    description: 'Create a compressed archive',
    category: 'compression',
    difficulty: 'intermediate',
    example: 'tar -czf backup.tar.gz /home/user'
  },
  {
    command: 'tar -xzf <archive>',
    description: 'Extract a compressed archive',
    category: 'compression',
    difficulty: 'intermediate',
    example: 'tar -xzf backup.tar.gz'
  },
  {
    command: 'ssh <user>@<host>',
    description: 'Connect to a remote server',
    category: 'networking',
    difficulty: 'intermediate',
    example: 'ssh user@192.168.1.100'
  },
  {
    command: 'scp <source> <destination>',
    description: 'Copy files over SSH',
    category: 'networking',
    difficulty: 'intermediate',
    example: 'scp file.txt user@host:/home/user'
  },
  {
    command: 'ping <host>',
    description: 'Check network connectivity',
    category: 'networking',
    difficulty: 'beginner',
    example: 'ping google.com'
  },
  {
    command: 'ifconfig',
    description: 'Display network interface information',
    category: 'networking',
    difficulty: 'intermediate',
    example: 'ifconfig'
  },
  {
    command: 'netstat -tuln',
    description: 'Show network connections and listening ports',
    category: 'networking',
    difficulty: 'advanced',
    example: 'netstat -tuln | grep LISTEN'
  }
];