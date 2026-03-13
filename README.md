# Linux Commands App

A beautiful desktop application that provides quick access to essential Linux commands with descriptions, examples, and copy-to-clipboard functionality.

## Features

✨ **30+ Essential Linux Commands** - Comprehensive reference for common Linux commands
🔍 **Search Functionality** - Quickly find commands by name or description
📁 **Category Filter** - Browse commands by category (file management, networking, system management, etc.)
📋 **Copy to Clipboard** - One-click copying of commands
🎨 **Dark Theme UI** - Modern, easy-on-the-eyes dark interface
📱 **Responsive Design** - Works on different screen sizes
🖥️ **Cross-Platform** - Runs on Windows, macOS, and Linux

## Command Categories

- **File Management** - ls, cd, cp, mv, rm, mkdir, touch
- **File Viewing** - cat, less
- **Searching** - grep, find
- **Permissions** - chmod, chown, sudo
- **Package Management** - apt install, apt remove, apt update
- **System Management** - ps, top, kill, df, du
- **Compression** - tar
- **Networking** - ssh, scp, ping, ifconfig, netstat

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/foxdoselinux/linux-commands-app.git
cd linux-commands-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development environment:
```bash
npm start
```

This will start both the React development server and the Electron app.

## Building for Distribution

To build the application for distribution:

```bash
npm run build
```

This will create a distributable package for your platform in the `dist/` directory.

## Project Structure

```
linux-commands-app/
├── public/
│   ├── electron.js          # Main Electron process
│   ├── preload.js           # Preload script for IPC
│   └── index.html           # HTML template
├── src/
│   ├── App.js               # Main React component
│   ├── App.css              # App styles
│   ├── index.js             # React entry point
│   ├── index.css            # Global styles
│   ├── components/
│   │   ├── SearchBar.js     # Search component
│   │   ├── SearchBar.css
│   │   ├── CommandCard.js   # Command card component
│   │   └── CommandCard.css
│   └── data/
│       └── commands.js      # Linux commands database
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Start development environment (React + Electron)
- `npm run react-start` - Start React dev server only
- `npm run react-build` - Build React for production
- `npm run electron-start` - Start Electron app only
- `npm run build` - Build the app for distribution

## Adding More Commands

To add more commands, edit `src/data/commands.js` and add entries to the `LINUX_COMMANDS` array:

```javascript
{
  command: 'your-command',
  description: 'What this command does',
  category: 'category-name',
  difficulty: 'beginner|intermediate|advanced',
  example: 'usage example'
}
```

## Technologies Used

- **React** - UI framework
- **Electron** - Cross-platform desktop app
- **CSS3** - Styling

## License

MIT

## Author

Created with ❤️ for Linux enthusiasts

## Contributing

Feel free to fork this project and submit pull requests for any improvements!