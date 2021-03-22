echo ${DOCKERHUB_PASSWORD} | docker login --username ${DOCKERHUB_USER} --password-stdin
docker pull ${IMAGE_NAME}