docker build --cache-from ${IMAGE_NAME}:staging --build-arg DOCKER_ENV=staging -t ${IMAGE_NAME}:staging .
docker push ${IMAGE_NAME}:staging