#!/bin/bash

echo "Checking if Node.js and npm are installed..."

if ! command -v node &> /dev/null; then
    echo "Node.js is not installed."

    # Detect OS and provide installation instructions
    OS=$(uname -s)

    if [ "$OS" = "Darwin" ]; then
        echo "Installing Node.js using Homebrew..."
        brew install node
    elif [ "$OS" = "Linux" ]; then
        echo "Installing Node.js using package manager..."
        # For Debian/Ubuntu
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    else
        echo "Please install Node.js manually from https://nodejs.org/"
        exit 1
    fi
else
    echo "Node.js is already installed."
fi

if ! command -v npm &> /dev/null; then
    echo "npm is not installed. It should have been installed with Node.js."
else
    echo "npm is already installed."
fi

echo "Node.js and npm installation check completed."

