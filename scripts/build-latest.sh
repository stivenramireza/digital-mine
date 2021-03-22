VERSION=$(npm run version --silent)
docker build --cache-from ${IMAGE_NAME}:latest --build-arg DOCKER_ENV=production -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:v${VERSION} .
docker push ${IMAGE_NAME}:latest
docker push ${IMAGE_NAME}:v${VERSION}