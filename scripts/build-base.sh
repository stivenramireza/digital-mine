echo ${DOCKER_PASSWORD} | docker login --username ${DOCKER_USERNAME} --password-stdin
docker pull ${IMAGE_NAME}