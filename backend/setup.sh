#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: source setup.sh <path-to-jdk>"
    return
fi

export JAVA_HOME="$1"