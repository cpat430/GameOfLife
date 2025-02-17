#!/bin/bash

cd frontend

docker build -f Dockerfile --platform linux/arm64 -t conways-game-of-life-frontend --network host .

cd ..

cd backend

docker build -f Dockerfile --platform linux/arm64 -t conways-game-of-life-backend --network host .