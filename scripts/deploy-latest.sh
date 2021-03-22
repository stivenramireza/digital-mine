cd /home/stivenramireza/projects/digital-mine-app
docker service rm production_digital-mine
docker pull stivenramireza/digital-mine:latest
docker stack deploy -c stack.yml production --with-registry-auth