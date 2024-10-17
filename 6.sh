#!/bin/bash

echo "Checking for missing frontend files..."

# Navigate to project root
cd "$(dirname "$0")"

FRONTEND_DIR="frontend"
SRC_DIR="$FRONTEND_DIR/src"

mkdir -p "$SRC_DIR/context"
mkdir -p "$SRC_DIR/components"

MODAL_CONTEXT_FILE="$SRC_DIR/context/ModalContext.js"
MODAL_ROOT_FILE="$SRC_DIR/components/ModalRoot.js"

if [ ! -f "$MODAL_CONTEXT_FILE" ]; then
    touch "$MODAL_CONTEXT_FILE"
    echo "Created $MODAL_CONTEXT_FILE"
else
    echo "$MODAL_CONTEXT_FILE already exists."
fi

if [ ! -f "$MODAL_ROOT_FILE" ]; then
    touch "$MODAL_ROOT_FILE"
    echo "Created $MODAL_ROOT_FILE"
else
    echo "$MODAL_ROOT_FILE already exists."
fi

echo "Frontend files check completed."

