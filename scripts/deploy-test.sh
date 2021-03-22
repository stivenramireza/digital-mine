cd /home/stivenramireza/projects/digital-mine-app
docker service rm test_digital-mine
docker pull stivenramireza/digital-mine:test
docker stack deploy -c test.yml test --with-registry-auth