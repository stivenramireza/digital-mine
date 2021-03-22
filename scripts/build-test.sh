docker build --cache-from ${IMAGE_NAME}:test --build-arg DOCKER_ENV=test -t ${IMAGE_NAME}:test .
docker push ${IMAGE_NAME}:test