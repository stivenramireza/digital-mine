cd /home/stivenramireza/projects/digital-mine-app
docker service rm staging_digital-mine
docker pull stivenramireza/digital-mine:staging
docker stack deploy -c staging.yml staging --with-registry-auth